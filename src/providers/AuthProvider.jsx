import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import { app } from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const auth = getAuth(app);

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create user
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const updateUserProfile = (name, photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }
    // Log In
    const logIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }



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
        setLoading(true);
        return signOut(auth);
    }

    const authInfo ={
        user,
        loading,
        setLoading,
        googleLogIn,
        logOut,
        createUser,
        updateUserProfile,
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