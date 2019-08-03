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

    const Arrow = ({ text, className }) => {
        return (
            <div
                className={className}
            >{text}</div>
        );
    };

    const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
    const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });
    const menu = Menu();

    return <ScrollMenu
        data={menu}
        arrowLeft={ArrowLeft}
        arrowRight={ArrowRight} />;
};

export default GroupItem;
