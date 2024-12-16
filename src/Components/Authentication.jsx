import { createContext } from "react";
import PropTypes from 'prop-types';
import { useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from './firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
import { useEffect } from "react";

export const AuthContext = createContext();
const Authentication = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();
  
    const handleRegister = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const handleGoogle_Login =()=> {
        setLoading(true);
         return signInWithPopup(auth, provider)
    }

    const handleLogOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }


    useEffect(() => {
      
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      });
      return () => unsubscribe();
    }, []);


   const value = {
       handleRegister,
       handleLogin,
       handleGoogle_Login,
       user,
       loading,
       handleLogOut
   }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

Authentication.propTypes = {
    children: PropTypes.node,
}

export default Authentication;