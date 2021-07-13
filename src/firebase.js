import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyDplYffT0JdMwyvtEwoEexriQhCj000030",
    authDomain: "linkedin-clone-yt-39836.firebaseapp.com",
    projectId: "linkedin-clone-yt-39836",
    storageBucket: "linkedin-clone-yt-39836.appspot.com",
    messagingSenderId: "520272574929",
    appId: "1:520272574929:web:8df45d662367d33e9688f0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };