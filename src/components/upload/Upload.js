import React, { useState } from 'react';

import Dropzone from './Dropzone';

import { uploadResource } from '../../actions/upload';

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

  const onUploadResource = () => {
    console.log("in here...");
    const filesCopy = files;
    uploadResource(filesCopy)
  }

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
          onClick={onUploadResource()}
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
