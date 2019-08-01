import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getPost } from '../../actions/post';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';

import PostItem from '../posts/PostItem';

const Post = ({ getPost, post: { post, loading }, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost]);

  console.log(post);

  return loading || post === null ? (
    <h1>Loading</h1>
  ) : (
    <Fragment>
      <div className="container">
        <Link to="/posts" className="btn btn-general">
          Back to Posts
        </Link>

        <PostItem post={post} showActions={false} />
        <CommentForm postId={post._id}/>
        <div className="comments">
            { post.comments.map(comment => (
                <CommentItem key={comment._id} comment={comment} postId={post._id} />
            ))}
        </div>
      </div>
    </Fragment>
  )
};

const mapStateToProps = (state) => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPost }
)(Post);
