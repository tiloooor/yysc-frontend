import React from 'react'

const ResourceItem = ({ name, desc }) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>{desc}</p>
        </div>
    )
}

export default ResourceItem
