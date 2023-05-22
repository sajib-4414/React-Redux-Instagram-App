import * as firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyB8eMaA2t3aeZBH6vb5Eb8R6E35TRlN0WQ",
    authDomain: "photowall-4b0a3.firebaseapp.com",
    databaseURL: "https://photowall-4b0a3-default-rtdb.firebaseio.com",
    projectId: "photowall-4b0a3",
    storageBucket: "photowall-4b0a3.appspot.com",
    messagingSenderId: "766264145043",
    appId: "1:766264145043:web:ebc3a6cf46eda33adf0966",
    measurementId: "G-5VGKC5Y35V"
};
firebase.initializeApp(firebaseConfig)
const database = firebase.database()
export {database}