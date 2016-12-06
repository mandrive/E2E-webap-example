import React from 'react';
import { Link } from 'react-router';

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <button className="navbar-toggler hidden-sm-up" type="button">
            <i className="fa fa-bars"></i>
        </button>
        <div className="container">
            <div className="collapse navbar-toggleable-xs">
                <a className="navbar-brand">#Hello</a>
                <ul className="nav navbar-nav">
                    <li className="nav-item active waves-effect waves-light">
                        <Link to="/" className="nav-link">HOME</Link>
                    </li>
                    <li className="nav-item waves-effect waves-light">
                        <Link to="/editor" className="nav-link">EDITOR</Link>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
    );
  }
}
