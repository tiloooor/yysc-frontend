import React from 'react'
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';

const PostItem = ({auth, post: { _id, text, name, avatar, user, likes, comments, date } }) => {
    return (
        <div className="card">
            <div className="card-body">
            {text}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
})
    

export default connect(mapStateToProps, {})(PostItem)
