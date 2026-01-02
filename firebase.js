// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDWgibGFkTYUjE9AG_mOpXW92OgP3ARvUk",
  authDomain: "infivesite.firebaseapp.com",
  projectId: "infivesite",
  storageBucket: "infivesite.appspot.com",
  messagingSenderId: "359834066542",
  appId: "1:359834066542:web:722f2f3efabfd338a0507f",
  measurementId: "G-49E3M70LFE"
};

// Initialize Firebase ONCE
firebase.initializeApp(firebaseConfig);

// Services
const auth = firebase.auth();
const db = firebase.firestore();

// Google provider
const googleProvider = new firebase.auth.GoogleAuthProvider();
