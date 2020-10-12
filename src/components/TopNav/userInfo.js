import React from 'react';
import { Link } from "react-router-dom";

const UserInfor = (props) => {
  const { username, photoUrl, id } = props.user;
  function handleSignOut() {
    props.onSignOut();
  }
  return (
    <li className="nav-item dropdown no-arrow">
      <a
        className="nav-link dropdown-toggle"
        href="/"
        id="userDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <span className="mr-2 d-none d-lg-inline text-gray-600 small">
          {username}
        </span>
        <img
          className="img-profile rounded-circle"
          src={
            photoUrl
              ? photoUrl
              : 'https://source.unsplash.com/QAB-WJcbgJk/60x60'
          }
          alt=""
        />
      </a>
      <div
        className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
        aria-labelledby="userDropdown"
      >
        <Link to={`/users/${id}/edit-profile`} className="dropdown-item">
          <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
          Profile
        </Link>
        <div className="dropdown-divider" />
        <button className="dropdown-item" onClick={() => handleSignOut()}>
          <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
          Logout
        </button>
      </div>
    </li>
  );
};

export default UserInfor;
