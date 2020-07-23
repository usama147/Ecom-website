import  firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB-aze7Rtv9MQKlcp_s4gIcDSNyXvNqerI",
    authDomain: "ecom-project-195cd.firebaseapp.com",
    databaseURL: "https://ecom-project-195cd.firebaseio.com",
    projectId: "ecom-project-195cd",
    storageBucket: "ecom-project-195cd.appspot.com",
    messagingSenderId: "868158408210",
    appId: "1:868158408210:web:fb4203c05671e73173bacb",
    measurementId: "G-0JHGGY627J",
});
const db =firebaseApp.firestore();
const auth = firebase.auth();

export {db , auth};