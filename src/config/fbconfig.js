import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDn26xJTcrKq66OamVFfk7ITz101HX8pIc",
    authDomain: "mario-plan-360.firebaseapp.com",
    databaseURL: "https://mario-plan-360.firebaseio.com",
    projectId: "mario-plan-360",
    storageBucket: "mario-plan-360.appspot.com",
    messagingSenderId: "920024466176",
    appId: "1:920024466176:web:a07a840df84b77b79869e5",
    measurementId: "G-1WP2KR2BMW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore.settings({timeStampsInSnapshots: true})

export default firebase