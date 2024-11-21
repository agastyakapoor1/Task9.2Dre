import React from 'react';
import { Input, Button } from 'semantic-ui-react';
import './Header.css';

const Header = ({ showLogin, showPostPage, user, signOutUser, showPlansPage }) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">DEV@Deakin</div>
        <div className="search-bar">
          <Input fluid icon="search" placeholder="Search..." />
        </div>
        <div className="header-buttons">
          <Button className="post-btn" onClick={showPostPage}>
            Post
          </Button>
          
          <Button className="plans-btn" onClick={showPlansPage}>
            Plans
          </Button>

          {user ? (
            <Button className="logout-btn" onClick={signOutUser}>
              Sign Out
            </Button>
          ) : (
            <Button className="login-btn" onClick={showLogin}>
              Login
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
