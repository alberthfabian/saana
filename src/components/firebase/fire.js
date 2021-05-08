import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDVlDT9tzFye9HWxZQVyIJdXF7saZvcy1M",
  authDomain: "api-saana.firebaseapp.com",
  projectId: "api-saana",
  storageBucket: "api-saana.appspot.com",
  messagingSenderId: "784010433424",
  appId: "1:784010433424:web:fdeb560e97b74976cf9915",
  measurementId: "G-YQ1CNNP3C3"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
