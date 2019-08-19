import React from 'react';
import ReactPlayer from 'react-player';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import TextTruncate from 'react-text-truncate';

import { addLike } from '../../actions/resource';
import { logEvent, getLogs } from '../../actions/tracking';

const ResourceItem = ({
  auth,
  resource: { _id, name, desc, links },
  preview = true,
  addLike,
  getLogs,
  logEvent
}) => {
  const previewContent = (
    <div>
      <h3 className="card-title">{name}</h3>
      <p className="card-text">
        <TextTruncate
          line={4}
          element="p"
          truncateText="…"
          text={desc}
          textTruncateChild={<a href="#">Read on</a>}
        />
      </p>
    </div>
  );

  var secondsPlayed = 0;
  const content = (
    <div>
      <h3>{name}</h3>
      <p>{desc}</p>

      {links.map((link) => (
        <ReactPlayer
          url={link.url}
          onStart={(e) => logEvent(`Resource`, `Started`, `${link.url}`)}
          onPause={(e) => logEvent(`Resource`, `Paused`, `${secondsPlayed}`)}
          onEnded={(e) => logEvent(`Resource`, `Completed`, `${link.url}`)}
          onProgress={(e) => (secondsPlayed = e.playedSeconds)}
        />
      ))}
    </div>
  );

  const buttons = (
    <div>
      <button className="btn btn-general btn-circle float-right">
        Save for later
      </button>
      <button
        className="btn btn-general btn-circle float-right"
        onClick={(e) => addLike(_id)}
      >
        Like
      </button>
    </div>
  );

  return preview ? (
    <div className="col-md-4">
      <div className="card resource-card">
        <div className="card-body">
          <Link to={`/resource/${_id}`} className="resource-link">
            {previewContent}
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <div className="container">
      <button
        onClick={(e) => {
          console.log(e);
          getLogs();
        }}
      >
        Get Logs
      </button>
      {content}
      {buttons}
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addLike, getLogs, logEvent }
)(ResourceItem);
