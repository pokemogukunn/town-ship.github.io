import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCnUyLBgG1wzn5q-FOLAW552oMOPi6gAWc",
  authDomain: "pokemogukunn.firebaseapp.com",
  projectId: "pokemogukunn",
  storageBucket: "pokemogukunn.appspot.com",
  messagingSenderId: "179278550397",
  appId: "1:179278550397:ios:604b4f78d27c78dc1aa814"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, firestore };
