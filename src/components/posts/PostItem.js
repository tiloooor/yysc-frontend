import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post';

const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  showActions,
  post: { _id, name, text, avatar, user, likes, comments, date }
}) => {
  return (
    <div className="card post-card">
      <div className="card-body">
        <h6>{name}</h6>
        <Link to={`/profile/${user}`}>
          <img className="rounded-circle" src={avatar} alt="avatar" />
        </Link>

        <p className="posted-date">
          Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
        </p>

        <p className="post-text">{text}</p>

        {showActions && <Fragment>
          <hr />
          <button onClick={e => addLike(_id)} type="button" className="btn btn-light">
            <i className="fa fa-thumbs-up" />{' '}
            <span>
              {likes.length > 0 && (
                <span className="like-count">{likes.length}</span>
              )}
            </span>
          </button>
          <button onClick={e => removeLike(_id)} type="button" className="btn btn-light">
            <i className="fa fa-thumbs-down" />{' '}
          </button>

          <Link to={`/post/${_id}`} type="button" className="btn btn-general comment-btn">
            <i className="fa fa-comment"></i>
            {comments.length > 0 && (
              <span className="comment-count">{comments.length}</span>
            )}
          </Link>
          {!auth.loading && user === auth.user._id && (
            <button onClick={e => deletePost(_id)} type="button" className="btn btn-danger">
              <i className="fa fa-times" />
            </button>
          )}
        </Fragment>}

      </div>
    </div>
  );
};

PostItem.defaultProps = {
  showActions: true
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addLike, removeLike, deletePost }
)(PostItem);
