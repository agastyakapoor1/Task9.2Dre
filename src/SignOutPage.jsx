import React from 'react';
import { Button } from 'semantic-ui-react';
import './SignOutPage.css'; 

const SignOutPage = ({ user, signOutUser }) => {
  return (
    <div className="signout-container">
      <div className="signout-box">
        <h2>You are currently logged in as:</h2>
        <p>{user.email}</p>
        <p>Do you want to sign out?</p>
        <div className="signout-buttons">
          <Button className="signout-btn" onClick={signOutUser}>
            Yes, Sign Out
          </Button>
          <Button className="cancel-btn" onClick={() => window.history.back()}>
            No, Stay Logged In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignOutPage;
