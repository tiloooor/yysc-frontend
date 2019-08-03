import React from 'react';
import { Link } from 'react-router-dom';
import ScrollMenu from 'react-horizontal-scrolling-menu';

const GroupItem = ({ profiles }) => {
    const MenuItem = ({ avatar, name, user }) => {
        return (
            <Link to={`/profile/${user}`}>
                <div className={`menu-item`}>
                    <img src={avatar} className="rounded-circle" alt="" />
                    <p>{name}</p>
                </div>
            </Link>
        )
    };

    const Menu = () =>
        profiles.map((profile) => {
            return (
                <MenuItem
                    user={profile._id}
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
