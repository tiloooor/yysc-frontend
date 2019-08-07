import React, { useState } from 'react';

import Dropzone from './Dropzone';
import Progress from './Progress';

import axios from 'axios';

import { uploadResource } from '../../actions/upload';

const checkIcon = '../../img/check-icon.svg';

const Upload = () => {
  const [zoneData, setZoneData] = useState({
    files: [],
    uploading: false,
    uploadProgress: {},
    successfullUploaded: false
  });

  const { files, uploading, uploadProgress, successfullUploaded } = zoneData;

  const onFilesAdded = (newFiles) => {
    setZoneData({ ...zoneData, files: files.concat(newFiles) });
  };

  const uploadFiles = async () => {
    console.log("uploading...");

    setZoneData({
      ...zoneData,
      uploadProgress: {},
      uploading: true
    });

    const promises = [];
    files.forEach((file) => {
      promises.push(sendRequest(file));
    });

    try {
      await Promise.all(promises);
      setZoneData({
        ...zoneData,
        successfullUploaded: true,
        uploaded: true
      });
    } catch (err) {
      setZoneData({
        ...zoneData,
        successfullUploaded: true,
        uploaded: false
      });
    }
  };

  const sendRequest = (file) => {
    const data = new FormData();
    data.append('file', file, file.name);
    axios.post('http://localhost:5000/api/upload', data, {
      // receive two    parameter endpoint url ,form data
    });
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();

      req.upload.addEventListener("progress", (event) => {
        console.log("in progress...");
        if (event.lengthComputable) {
          const copy = { ...uploadProgress };
          copy[file.name] = {
            state: "pending",
            percentage: (event.loaded / event.total) * 100
          };
          setZoneData({ ...zoneData, uploadProgress: copy });
        }
      });

      req.upload.addEventListener("load", event => {
        console.log("in load...");
        const copy = { ...uploadProgress };
        copy[file.name] = {
          state: "done",
          percentage: 100
        };
        setZoneData({ ...zoneData, uploadProgress: copy });
        resolve(req.response);
      })

      req.upload.addEventListener("error", event => {
        const copy = { ...uploadProgress };
        copy[file.name] = {
          state: "error",
          percentage: 0
        };
        setZoneData({ ...zoneData, uploadProgress: copy });
        reject(req.response);
      })

      const formData = new FormData();
      formData.append('file', file, file.name);

      req.open('POST', 'http://localhost:5000/api/upload');
      req.send(formData);
    });
  };

  const renderProgress = (file) => {
    const uploadProg = uploadProgress[file.name];

    if (uploading || successfullUploaded) {
      return (
        <div className="progress-wrapper">
          <Progress progress={uploadProg ? uploadProg.percentage : 0} />
          <img
            className="check-icon"
            alt="done"
            src={checkIcon}
            style={{
              opacity: uploadProg && uploadProg.state === 'done' ? 0.5 : 0
            }}
          />
        </div>
      );
    }
  };

  const renderActions = () => {
    if (successfullUploaded) {
      return (
        <button
          onClick={setZoneData({
            ...zoneData,
            files: [],
            successfullUploaded: false
          })}
        >
          Clear
        </button>
      );
    } else {
      return (
        <button
          className="btn btn-general"
          disabled={files.length < 1 || uploading}
          onClick={uploadFiles}
        >
          Upload
        </button>
      );
    }
  };

  return (
    <div className="container">
      <div className="upload">
        <span>Upload Files</span>
        <div className="content">
          <div>
            <Dropzone
              onFilesAdded={onFilesAdded}
              disabled={uploading || successfullUploaded}
            />
          </div>

          <div className="files">
            {files.map((file) => (
              <div key={file.name} className="file-row">
                <span className="file-name">{file.name}</span>
                {renderProgress(file)}
              </div>
            ))}
          </div>
        </div>
        <div className="actions">{renderActions()}</div>
      </div>
    </div>
  );
};

export default Upload;
