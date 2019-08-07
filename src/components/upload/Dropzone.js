import React, { useState } from 'react';

import uploadToCloudImg from '../../img/upload-to-cloud.jpg';

const Dropzone = ({ onFilesAdded, disabled }) => {
  const [zoneData, setZoneData] = useState({
    highlight: false
  });

  const { highlight } = zoneData;

  const fileInputRef = React.createRef();

  const openFileDialog = () => {
    if (disabled) return;
    fileInputRef.current.click();
  };

  const onDragOver = (event) => {
    console.log('Drag over...');
    event.preventDefault();
    if (disabled) return;
    setZoneData({ ...zoneData, highlight: true });
  };

  const onDragLeave = () => {
    console.log('Drag leave...');
    setZoneData({ hightlight: false });
  };

  const onDrop = (event) => {
    console.log('On drop...');
    event.preventDefault();

    const files = event.dataTransfer.files;
    if (onFilesAdded) {
      const array = fileListToArray(files);
      onFilesAdded(array);
    }

    setZoneData({ ...zoneData, highlight: false });
  };

  const fileListToArray = (list) => {
    const array = [];
    for (var i = 0; i < list.length; i++) {
      array.push(list.item(i));
    }
    return array;
  };

  const addFiles = (evt) => {
    console.log('add files...');
    if (disabled) return;
    const files = evt.target.files;
    if (onFilesAdded) {
      const array = fileListToArray(files);
      onFilesAdded(array);
    }
  };

  return (
    <div>
      <div
        className={`dropzone ${highlight ? 'highlight' : ''}`}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        onClick={openFileDialog}
      >
        <img alt="upload" className="icon" src={uploadToCloudImg} />
        <span>Upload Files</span>
      </div>
      <input
        ref={fileInputRef}
        className="file-input"
        type="file"
        name="file"
        multiple
        onChange={addFiles}
      />
    </div>
  );
};

export default Dropzone;
