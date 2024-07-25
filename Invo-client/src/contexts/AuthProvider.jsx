import React, { createContext, useState, useEffect } from 'react';
import app from "../firebase/firebase.config";
import { 
  GoogleAuthProvider, 
  createUserWithEmailAndPassword, 
  getAuth,  
  onAuthStateChanged,  
  signInWithPopup, 
  signInWithEmailAndPassword, 
  signOut, 
  updateProfile 
} from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create an account
  const createUser = async (email, password) => {
    try {
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      return userCredential;
    } catch (error) {
      console.error("Error creating user:", error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Sign up with Gmail account
  const signUpWithGmail = async () => {
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      return result;
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Login using email and password
  const login = async (email, password) => {
    try {
      setLoading(true);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential;
    } catch (error) {
      console.error("Error logging in:", error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Logout
  const logOut = async () => {
    try {
      localStorage.removeItem('genius-token');
      await signOut(auth);
    } catch (error) {
      console.error("Error logging out:", error.message);
      throw error;
    }
  };

  // Update profile
  const updateUserProfile = async (name, photoURL) => {
    try {
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, {
          displayName: name, 
          photoURL: photoURL
        });
      } else {
        throw new Error("No user is currently signed in.");
      }
    } catch (error) {
      console.error("Error updating profile:", error.message);
      throw error;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signUpWithGmail,
    login,
    logOut,
    updateUserProfile
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
