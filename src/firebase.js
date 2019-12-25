import * as firebase from 'firebase';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDFLU06FI_gWWEOs079ICdb7BPFnB87pYg",
    authDomain: "ptsmanagement-7b0a7.firebaseapp.com",
    databaseURL: "https://ptsmanagement-7b0a7.firebaseio.com",
    projectId: "ptsmanagement-7b0a7",
    storageBucket: "ptsmanagement-7b0a7.appspot.com",
    messagingSenderId: "773448729495",
    appId: "1:773448729495:web:db0fd2d2293ef2b0f03ad2",
    measurementId: "G-P4DMSEM2QG"
  };

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const rewardsRef = firebase.database().ref('rewards');
//export const completeGoalRef = firebase.database().ref('completeGoals');
  