importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

firebase.initializeApp({
    apiKey: "AIzaSyCg3McXe6RZ9vRyXMlggXeiSdqjtMktKG4",
    authDomain: "nandhaproject-37058.firebaseapp.com",
    projectId: "nandhaproject-37058",
    storageBucket: "nandhaproject-37058.appspot.com",
    messagingSenderId: "241468062647",
    appId: "1:241468062647:web:4abb7c5bee600c968c0632"
});
// Necessary to receive background messages:
const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((m) => {
  console.log("onBackgroundMessage", m);
});