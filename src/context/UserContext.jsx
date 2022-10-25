import React, { createContext, useState } from "react";
import app from "../firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const auth = getAuth(app);
export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState({ displayName: "Mamun" });

  //-------Create User With Email & Password------//
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //-------Sign In With Email & Password---------//
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //---------Log Out---------//
  const LogOut = () => {
    return signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, createUser, signIn, LogOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default UserContext;
