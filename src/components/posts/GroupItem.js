import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';

const GroupItem = ({ profiles }) => {
    const MenuItem = ({ avatar, name }) => {
        return <div className={`menu-item`}>
            <img src={avatar} className="rounded-circle" alt="" />
            <p>{name}</p>
        </div>
    };

    const Menu = () =>
        profiles.map((profile) => {
            return (
                <MenuItem
                    name={profile.name}
                    avatar={profile.avatar}
                    key={profile.name}
                />
            );
        });

    const menu = Menu();
    return <ScrollMenu data={menu} />;
};

export default GroupItem;
