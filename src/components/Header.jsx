import React from "react";
import { useUserContext } from "../context/userContext";
import './Header.css';

const Header = () => {
  const { user, logOut } = useUserContext();

  return (
    <div className="header-container">
      <div className="header-content">
        <h2 className="app-title">React ContextApi</h2>
        <div className="profile">
          <h3 className="username">Welcome, {user.name}</h3>
          {!user.isGuestUser && (
            <button className="logout-btn" onClick={logOut}>
              LogOut
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
