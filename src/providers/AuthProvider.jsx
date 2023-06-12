import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth'
import { app } from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const auth = getAuth(app);

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Social sign in google
    const googleAuthProvider = new GoogleAuthProvider();

    const googleLogIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleAuthProvider);
    }

     // Set up an observer to track user sign-in state changes
     useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
        });

        return ()=>{
            unsubscribe();
        }

    }, [])


    // Log out
    const logOut = () =>{
        return signOut(auth);
    }

    const authInfo ={
        user,
        loading,
        googleLogIn,
        logOut
    };
    return (
        <div>
            <AuthContext.Provider value={authInfo} >
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;