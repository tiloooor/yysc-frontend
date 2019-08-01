import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/post';
import PostItem from './PostItem';
import PostForm from './PostForm';
import Group from './Group';

const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <Fragment>
      <div className="container">
        <h5>Group</h5>
        <div className="group">
          <Group />
        </div>

        <h5>Feed</h5>
        <PostForm />

        <div className="posts">
          {posts.map((post) => (
            <PostItem key={post._id} post={post} />
          ))}
        </div>
        
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Posts);
