import React, { useState } from 'react';

import Dropzone from './Dropzone';

const Upload = () => {
  const [zoneData, setZoneData] = useState({
    files: [],
    uploading: false,
    uploadProgress: {},
    highlight: false,
    successfullUploaded: false
  });

  const { files, uploading, uploadProgress, successfullUploaded } = zoneData;

  const onFilesAdded = (files) => {
    setZoneData({ ...zoneData, [files]: [files.concat(files)] });
  };

  return (
    <div className="container">
      <div className="upload">
        <span>Upload Files</span>
        <div className="content">
          <div>
            <Dropzone onFilesAdded={onFilesAdded} />
          </div>

          <div className="files">
            {files.map((file) => (
              <div key={file.name} className="row">
                <span className="file-name">{file.name}</span>
              </div>
            ))}
          </div>

        </div>
        <div className="actions" />
      </div>
    </div>
  );
};

export default Upload;
