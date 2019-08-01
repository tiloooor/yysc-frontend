import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';

const PostForm = ({ addPost }) => {
    const [text, setText] = useState('')

    return (
        <div className="post-form">
            <form className="form" onSubmit={e => {
                e.preventDefault();
                addPost({ text });
                setText('');
            }}
            >
                <textarea
                    name="text"
                    rows="5"
                    placeholder="Create a post"
                    value={text}
                    onChange={e => setText(e.target.value)}
                    required
                >
                </textarea>
                <input type="submit" class="btn btn-md btn-general my-1" value="Submit" />
            </form>
        </div>
    )
}

export default connect(null, { addPost })(PostForm)
