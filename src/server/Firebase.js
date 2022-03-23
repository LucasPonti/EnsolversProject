// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import { useState, useEffect } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnu9uucvrk68VvvNBmgOsSrGhypDbaa1w",
  authDomain: "userspasswords-bac51.firebaseapp.com",
  projectId: "userspasswords-bac51",
  storageBucket: "userspasswords-bac51.appspot.com",
  messagingSenderId: "246519034005",
  appId: "1:246519034005:web:b849dbd90b3934c9f8eb9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password) {
   return createUserWithEmailAndPassword(auth, email, password);
}

export function logout(){
    return signOut(auth);
}

export function login(email, password){
    return signInWithEmailAndPassword(auth, email, password);
}

//Custom Hook
export function useAuth() {
    const [currentUser, setCurrentUser] = useState();

    useEffect(()=> {
        const unsub = onAuthStateChanged(auth, user => {
            setCurrentUser(user)
        })
        return unsub;
    },[])

    return currentUser;
}

