import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    console.log('Clicked!', collapsed);
    setCollapsed(!collapsed);
  }

  const classOne = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
  const classTwo = collapsed ? 'collapse navbar-collapse ' : 'collapse navbar-collapse show';

  const authLinks = (
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
      <li className="nav-item">
        <Link to="/dashboard">
          <span className="hide-sm">Dashboard</span>
        </Link>
      </li>
      <li className="nav-item">
        <a onClick={logout} href="#!">
          <i className="fa fa-sign-out-alt" />{' '}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
      <li className="nav-item">
        <Link to="/posts">
          <span className="hide-sm">Posts</span>
        </Link>
      </li>
    </ul>
  );

  return (
    !loading &&
    isAuthenticated && (
      <nav className="navbar navbar-expand-lg navbar-light">
        <Fragment>
          <Link to="/" className="navbar-brand">
            <i className="fa fa-ravelry fa-md" aria-hidden="true" />
          </Link>

          <button
            className={classOne}
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggler"
            aria-controls="navbarTogglerDemo"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => toggleNavbar()}
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className={classTwo} id="navbarToggler">
            {authLinks}
          </div>
        </Fragment>
      </nav>
    )
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
