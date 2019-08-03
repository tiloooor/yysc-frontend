import React from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';

const ViewedResources = () => {
  const resources = [
    'https://www.youtube.com/watch?v=M6ZmTKQyVOE',
    'https://www.youtube.com/watch?v=KYJdekjiAog',
    'https://www.youtube.com/watch?v=FoI94Epkjrc'
  ];

  const ResourceItem = ({ resource }) => {
    return (
      <div className="viewed-resource">
        <a href={resource}>
          <i className="fa fa-youtube-play" aria-hidden="true" />
        </a>
      </div>
    );
  };

  const Menu = () =>
    resources.map((resource) => {
      return <ResourceItem resource={resource} />;
    });

  const menu = Menu();
  return <ScrollMenu data={menu} />;
};

export default ViewedResources;
