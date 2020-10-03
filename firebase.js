import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBzMPQUn9lKLKqmGcEtkNyN3yE0nUZfIgY",
  authDomain: "clone-47f4c.firebaseapp.com",
  databaseURL: "https://clone-47f4c.firebaseio.com",
  projectId: "clone-47f4c",
  storageBucket: "clone-47f4c.appspot.com",
  messagingSenderId: "759935540458",
  appId: "1:759935540458:web:895ea26bbb573cc6ab0b93",
  measurementId: "G-R31BCY39X3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
