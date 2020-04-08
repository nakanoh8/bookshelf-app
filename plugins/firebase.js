import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyBOfzufyY6VG-4VbfvuZfpSC2HV9ykutL8",
    authDomain: "bookshelf-app-4360d.firebaseapp.com",
    databaseURL: "https://bookshelf-app-4360d.firebaseio.com",
    projectId: "bookshelf-app-4360d",
    storageBucket: "bookshelf-app-4360d.appspot.com",
    messagingSenderId: "701169814140",
    appId: "1:701169814140:web:ee5d3162f41ea9a5b017f9",
    measurementId: "G-JC3GJVHWGJ"
  })
}

export default firebase
