import React from 'react';

const ViewedResources = () => {
  const resources = [
    'https://www.youtube.com/watch?v=M6ZmTKQyVOE',
    'https://www.youtube.com/watch?v=KYJdekjiAog',
    'https://www.youtube.com/watch?v=FoI94Epkjrc'
  ];

  const viewedResources = resources.map((resource) => (
    <div className="viewed-resource">
      <a href={resource}>
        <i className="fa fa-youtube-play" aria-hidden="true" />
      </a>
    </div>
  ));

  return (
    <div className="container">
      <h5>Viewed Resources</h5>
      <div className="row">
        {viewedResources}
      </div>
    </div>
  );
};

export default ViewedResources;
