import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { deleteComment } from '../../actions/post';

const CommentItem = ({
    postId,
    comment: { _id, text, avatar, user, date },
    auth, 
    deleteComment
}) => {
    return (
        <div>
            <Link to={`/profile/${user}`}>
                <img 
                    className="rounded-circle"
                    src={avatar} 
                    alt="" 
                />
            </Link>
            <p>
                {text}
            </p>
            <p>
                Posted on <Moment format="YYYY/MM//DD">{date}</Moment>
            </p>
            {!auth.loading && user == auth.user._id && (
                <button onClick={e => deleteComment(postId, _id)} type="button" className="btn btn-danger">
                    <i className="fa fa-times"></i>
                </button>
            ) }
        </div>
    );
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { deleteComment }
)(CommentItem);
