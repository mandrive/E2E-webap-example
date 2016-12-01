import React from 'react';

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
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item waves-effect waves-light">
                        <a className="nav-link" href="/">Planner</a>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
    );
  }
}
