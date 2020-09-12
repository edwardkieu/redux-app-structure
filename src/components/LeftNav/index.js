import React, { Component } from 'react';

export default class LeftNav extends Component {
  render() {
    return (
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink" />
          </div>
          <div className="sidebar-brand-text mx-3">
            Edward <sup>Kieu</sup>
          </div>
        </a>
        <hr className="sidebar-divider my-0" />
        <li className="nav-item">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>Dashboard</span>
          </a>
        </li>
        <hr className="sidebar-divider" />
        <div className="sidebar-heading">Group Name</div>
        <li className="nav-item active">
          <a
            className="nav-link"
            href="/"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <i className="fas fa-fw fa-folder" />
            <span>Pages</span>
          </a>
          <div
            id="collapsePages"
            className="collapse show"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Screens:</h6>
              <a className="collapse-item" href="/">
                Users
              </a>
            </div>
          </div>
        </li>

        <hr className="sidebar-divider d-none d-md-block" />

        <div className="text-center d-none d-md-inline">
          <button className="rounded-circle border-0" id="sidebarToggle" />
        </div>
      </ul>
    );
  }
}
