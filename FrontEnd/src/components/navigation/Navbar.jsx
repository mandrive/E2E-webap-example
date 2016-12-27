import React from 'react';
import { IndexLink } from 'react-router';

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary" style={{marginBottom: 30 }}>
        <button className="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar">
            <i className="fa fa-bars"></i>
        </button>
        <div className="container">
            <div className="collapse navbar-toggleable-xs">
                <a className="navbar-brand">#Hello</a>
                <ul className="nav navbar-nav">
                    <li className="nav-item waves-effect waves-light">
                        <IndexLink to="/" className="nav-link" activeClassName="active">HOME</IndexLink>
                    </li>
                    <li className="nav-item waves-effect waves-light">
                        <IndexLink to="/editor" className="nav-link" activeClassName="active">EDITOR</IndexLink>
                    </li>
                </ul>
            </div>
        </div>
        <div className="collapse" id="exCollapsingNavbar">
            <ul className="nav navbar-nav">
                    <li className="nav-item active waves-effect waves-light">
                        <IndexLink to="/" className="nav-link">HOME</IndexLink>
                    </li>
                    <li className="nav-item waves-effect waves-light">
                        <IndexLink to="/editor" className="nav-link">EDITOR</IndexLink>
                    </li>
                </ul>
        </div>
      </nav>
    );
  }
}
