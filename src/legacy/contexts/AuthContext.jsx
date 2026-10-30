import React, { createContext, useState, useContext, useEffect } from "react";
import {
  onAuthStateChanged,
  getAuth
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = authenticate();
    return unsubscribe; // Clean up subscription on unmount
  }, []);



  const authenticate = () => {
    return onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  };

  const checkUserRole = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
  
    if (!user) {
      console.log('No user is signed in.');
      return 'error';
    }
  
    try {
      const idTokenResult = await user.getIdTokenResult();
  
      if (idTokenResult.claims.admin) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
      return 'error';
    }
  };

  const value = {
    user,
    setUser,
    authenticate,
    checkUserRole
  };



  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;