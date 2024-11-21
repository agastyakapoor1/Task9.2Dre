import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import PricingPlans from './PricingPlans'; // Import the PricingPlans component
import Login from './Login';
import SignUp from './SignUp';
import PostPage from './PostPage';
import { auth } from './firebase'; // import firebase authentication service
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const [currentView, setCurrentView] = useState('');
  const [user, setUser] = useState(null); // Track logged-in user state

  const showLogin = () => setCurrentView('login');
  const showSignUp = () => setCurrentView('signup');
  const redirectToHome = () => setCurrentView('home');
  const showPostPage = () => setCurrentView('post');
  const showPlansPage = () => setCurrentView('plans'); // Show plans page

  // Check if a user is logged in on component mount
  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user); // Update user state based on auth state
    });
  }, []);

  const signOutUser = () => {
    auth.signOut()
      .then(() => {
        setUser(null); // Clear user state
        setCurrentView('home'); // Redirect to home after sign-out
        alert("Successfully signed out!");
      })
      .catch((error) => {
        alert("Sign out failed. Please try again.");
      });
  };

  return (
    <div>
      <Header
        showLogin={showLogin}
        showPostPage={showPostPage}
        user={user} // Pass the user state to Header
        signOutUser={signOutUser} // Pass the sign-out function to Header
        showPlansPage={showPlansPage} // Pass showPlansPage function to Header
      />
      {currentView === 'login' && <Login showSignUp={showSignUp} redirectToHome={redirectToHome} />}
      {currentView === 'signup' && <SignUp showLogin={showLogin} />}
      {currentView === 'home' && <h1>Welcome to the Home Page!</h1>}
      {currentView === 'post' && <PostPage />}
      {currentView === 'plans' && <PricingPlans />} {/* Add the plans page to render */}
    </div>
  );
}

export default App;
