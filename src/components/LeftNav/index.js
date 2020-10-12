import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

const MenuLink = ({ menu }) => {
  let { label, to, activeOnlyWhenExact, faIcon, slug } = menu;
  let childMenu = menu.children;
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ history }) => {
        let { pathname } = history.location;
        let active = '';
        if (pathname === to) {
          active = 'active';
        } else {
          if (pathname.startsWith('/' + slug + '/')) {
            active = 'active';
          }
        }
        if (childMenu) {
          return (
            <li className={`nav-item ${active}`}>
              <Link
                className="nav-link"
                to={to}
                data-toggle="collapse"
                data-target={`#${slug}`}
                aria-expanded="true"
                aria-controls={`collapse${slug}`}
              >
                <i className={faIcon} />
                <span>{label}</span>
              </Link>
              <div
                id={`${slug}`}
                className="collapse show"
                aria-labelledby="headingPages"
              >
                <div className="bg-white py-2 collapse-inner rounded">
                  <h6 className="collapse-header">{`${label} Management:`}</h6>
                  {childMenu.map((childrenMenuItem, childrenMenuItemIndex) => {
                    return (
                      <Link
                        key={childrenMenuItemIndex}
                        className="collapse-item"
                        to={childrenMenuItem.to}
                      >
                        <i className={childrenMenuItem.faIcon} />
                        <span> {childrenMenuItem.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </li>
          );
        } else {
          return (
            <li className={`nav-item ${active}`}>
              <Link to={to} className="nav-link">
                <i className={faIcon || `fas fa-fw fa-folder`} />
                <span>{label}</span>
              </Link>
            </li>
          );
        }
      }}
    />
  );
};

export default class LeftNav extends Component {
  state = {
    navMenus: [
      {
        label: 'Dashboard',
        slug: 'dashboard',
        to: '/',
        exact: true,
        faIcon: 'fas fa-fw fa-tachometer-alt',
      },
      {
        label: 'Pages',
        slug: 'pages',
        to: '/pages',
        exact: false,
        faIcon: 'fas fa-fw fa-folder',
        children: [
          {
            label: 'Users',
            slug: 'pages-users',
            to: '/pages/users',
            exact: false,
            faIcon: 'fas fa-fw fa-user',
          },
        ],
      },
    ],
  };

  showNavMenus = (menus) => {
    let result = null;
    if (menus && menus.length > 0) {
      result = menus.map((menu, index) => {
        return <MenuLink key={index} menu={menu} />;
      });
    }
    return result;
  };

  render() {
    return (
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink" />
          </div>
          <div className="sidebar-brand-text mx-3">
            Edward <sup>Kieu</sup>
          </div>
        </Link>
        <hr className="sidebar-divider my-0" />
        {this.showNavMenus(this.state.navMenus)}
        {/* <li className="nav-item">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="nav-item active">
          <Link
            className="nav-link"
            to="/"
            data-toggle="collapse"
            data-target="#collapsePages1"
            aria-expanded="true"
            aria-controls="collapsePages1"
          >
            <i className="fas fa-fw fa-folder" />
            <span>Pages</span>
          </Link>
          <div
            id="collapsePages1"
            className="collapse show"
            aria-labelledby="headingPages"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Accounts Management:</h6>
              <a className="collapse-item" href="/">
                Users
              </a>
            </div>
          </div>
        </li> */}
      </ul>
    );
  }
}
