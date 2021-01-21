import firebase from 'firebase/app';
import 'firebase/database';
//import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCN3OhrRQ3C2_KF2eB96wFYV3IEA6WKqZo",
    authDomain: "test-3976a.firebaseapp.com",
    databaseURL: "https://test-3976a.firebaseio.com",
    projectId: "test-3976a",
    storageBucket: "test-3976a.appspot.com",
    messagingSenderId: "1084874247404",
    appId: "1:1084874247404:web:069d7f6b4e293b2dd269c9",
    measurementId: "G-74XER02W5K"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;

export const firebaseDb = firebase.database();
//export const firebaseAuth = firebase.auth();
