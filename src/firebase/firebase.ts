import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore"; 
import { useState } from "react";

const config = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DB,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_SB,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_SID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
};

console.log(config);

const app = initializeApp(config);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);