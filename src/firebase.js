import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCWDyiOb-agDxmeYeKlia8f2WkjHXeml-g",
  authDomain: "react-slack-app-33284.firebaseapp.com",
  databaseURL: "https://react-slack-app-33284.firebaseio.com",
  projectId: "react-slack-app-33284",
  storageBucket: "react-slack-app-33284.appspot.com",
  messagingSenderId: "886083262686",
  appId: "1:886083262686:web:bd7b9cd427f7c476f34a4f",
  measurementId: "G-RFJEC9TMPG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;