import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: "realtimesplash", // have to hard code as string for some reason
    storageBucket: '',
    messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
}

// Initialize Firebase
let Firebase = firebase.initializeApp(firebaseConfig)

// firestore db
export const db = firebase.firestore()

export default Firebase
