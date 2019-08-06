import React from 'react';

import uploadToCloudImg from '../../img/upload-to-cloud.jpg';

const Dropzone = ({ onFilesAdded }) => {
  const fileInputRef = React.createRef();

  const openFileDialog = () => {
    fileInputRef.current.click();
  };

  const fileListToArray = (list) => {
    const array = [];
    for (var i = 0; i < list.length; i++) {
      array.push(list.item(i));
    }
    return array;
  }

  const addFiles = (evt) => {
    const files = evt.target.files;
    if (onFilesAdded) {
        const array = fileListToArray(files);
        onFilesAdded(array);
    }
  }

  return (
    <div>
      <div className="dropzone" onClick={openFileDialog}>
        <img alt="upload" className="icon" src={uploadToCloudImg} />
        <span>Upload Files</span>
      </div>
      <input
        ref={fileInputRef}
        className="file-input"
        type="file"
        multiple
        onChange={addFiles}
      />
    </div>
  );
};

export default Dropzone;
