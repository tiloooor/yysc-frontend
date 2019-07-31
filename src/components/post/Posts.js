import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/post';
import PostItem from './PostItem';

const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return loading ? (
      <h1>Loading...</h1>
  ) : (
      <Fragment>
          <h1>Posts</h1>
          <p>Welcome to the community!</p>
          <div className="posts">
            {posts.map(post => (
                <PostItem key={post._id} post={post}/>
            ))}
          </div>
      </Fragment>
  )
};

const mapStateToProps = (state) => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Posts);
