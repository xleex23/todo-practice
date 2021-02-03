import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBS8m8823HujCWZxqVfYw48E7ZzyBNO4jU",
  authDomain: "todo-practice-35720.firebaseapp.com",
  projectId: "todo-practice-35720",
  storageBucket: "todo-practice-35720.appspot.com",
  messagingSenderId: "881747314121",
  appId: "1:881747314121:web:065b76f32f0462fec0d418"
};

firebase.initializeApp(firebaseConfig);

export default firebase;