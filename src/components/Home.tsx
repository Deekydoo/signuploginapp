// src/components/Home.tsx
import React from "react";
import { useAuth } from "./AuthContext"; // Import your AuthContext to access current user
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const currentUser = useAuth(); // Use the AuthContext to get the current user
  const navigate = useNavigate();

  // Function to handle sign out
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      alert("You have signed out successfully!");
      navigate("/login"); // Redirect to login page after sign out
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div>
      <h1>Welcome to Our App!</h1>
      {currentUser ? (
        <div>
          <h2>Hello, {currentUser.email}</h2>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <div>
          <p>Please <a href="/login">Log In</a> or <a href="/signup">Sign Up</a> to continue.</p>
        </div>
      )}
    </div>
  );
};

export default Home;
