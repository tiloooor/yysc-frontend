import React from 'react'

const GroupItem = ({ profile: { name, avatar} }) => {
    return (
        <div style={{ float: 'left', width: '100px'}}>
            <img className="rounded-circle social-wall-img" src={avatar} alt="" />
            <p>{ name }</p>
        </div>
    )
}

export default GroupItem
