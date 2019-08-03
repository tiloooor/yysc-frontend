import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import { getUserPosts } from '../../actions/post';
import PostItem from '../posts/PostItem'

const UserPosts = ({ userId, getUserPosts, post: { posts } }) => {
    console.log(userId);

    useEffect(() => {
        getUserPosts(userId)
    }, []);

    return (
        <div className="posts">
            {posts.map((post) => (
                <PostItem key={post._id} post={post} />
            ))}
        </div>
    )
}

const mapStateToProps = (state) => ({
    post: state.post
})

export default connect(mapStateToProps, { getUserPosts })(UserPosts)
