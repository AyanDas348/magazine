// Import the functions you need from the SDKs you need
import type { FirebaseApp, FirebaseOptions } from 'firebase/app'
import { getApp, getApps, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// TODO:e
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig: FirebaseOptions = {
    apiKey: "AIzaSyBxQBlRdPHw4ZyRe8Qw7FUJOr_C1oIFZMU",
    authDomain: "magazine-76926.firebaseapp.com",
    projectId: "magazine-76926",
    storageBucket: "magazine-76926.appspot.com",
    messagingSenderId: "282063597246",
    appId: "1:282063597246:web:91b1953a4ef1faddc678ef"
};

// Initialize Firebase
let app: FirebaseApp

if (!getApps().length) {
    app = initializeApp(firebaseConfig)
} else {
    app = getApp()
}

export const auth = getAuth(app)
