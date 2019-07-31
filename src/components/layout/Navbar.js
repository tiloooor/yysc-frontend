import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
    const authLinks = (
        <ul>
            <li>
                <Link to="/">Developers</Link>
            </li>
            <li>
                <Link to="/dashboard">
                    <i className='fa fa-user' />{' '}
                    <span className='hide-sm'>Dashboard</span>
                </Link>
            </li>
            <li>
                <a onClick={logout} href="#!">
                    <i class="fa fa-sign-out-alt" />{' '}
                    <span className="hide-sm">Logout</span>
                </a>
            </li>
            <li>
                <Link to="/posts">
                    <i className='fa fa-users' />{' '}
                    <span className='hide-sm'>Posts</span>
                </Link>
            </li>
        </ul>
    );

    return (
        <nav className="navbar bg-light">
            {!loading && isAuthenticated && (
                <Fragment>
                    <h6>
                        <Link to="/">
                            <i className="fa fa-code" /> DevConnector
                        </Link>
                    </h6>
                    {authLinks}
                </Fragment>
            )}
        </nav>
    );
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logout }
)(Navbar);
