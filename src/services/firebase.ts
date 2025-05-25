import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA48SCiTa6JtJFwc57hBot9loQNv2ocTGk",
    authDomain: "project-saude-4c667.firebaseapp.com",
    projectId: "project-saude-4c667",
    storageBucket: "project-saude-4c667.firebasestorage.app",
    messagingSenderId: "972417883246",
    appId: "1:972417883246:web:dae079668fcd5a7cc5da7f",
    measurementId: "G-28Z1ZFSH1P"

};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
