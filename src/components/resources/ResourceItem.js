import React from 'react';
import ReactPlayer from 'react-player';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

const ResourceItem = ({
  auth,
  resource: { _id, name, desc, links },
  preview = true
}) => {
  const previewContent = (
    <div>
      <h3 className="card-title">{name}</h3>
      <p className="card-text">{desc}</p>
    </div>
  );

  const content = (
    <div>
      <h3>{name}</h3>
      <p>{desc}</p>

      {links.map((link) => (
        <ReactPlayer url={link.url} />
      ))}
    </div>
  );

  return preview ? (
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <Link to={`/resource/${_id}`}>{previewContent}</Link>
        </div>
      </div>
    </div>
  ) : (
    <div className="container">{content}</div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(ResourceItem);
