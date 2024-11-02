const firebaseConfig = {
    apiKey: "AIzaSyCt2HnBM2t0tvJNRnsk0FsDLLvxiB3-0Ac",
    authDomain: "m-photo-16a53.firebaseapp.com",
    projectId: "m-photo-16a53",
    storageBucket: "m-photo-16a53.firebasestorage.app",
    messagingSenderId: "30453910789",
    appId: "1:30453910789:web:eeaddf56fe3f71496e3b6c",
    databaseURL: "https://m-photo-16a53-default-rtdb.firebaseio.com/",
  };
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  import "firebase/compat/database";
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  var database = firebase.database();

  function writeUserData(userId, name, email) {
firebase.database().ref('users' + userId).set({
  username: name,
  email: email,
  // profile_picture : imageUrl
});
}

const dbRef = firebase.database().ref();
dbRef.child("users").child(userId).get().then((snapshot) => {
if (snapshot.exists()) {
  console.log(snapshot.val());
} else {
  console.log("No data available");
}
}).catch((error) => {
console.error(error);
});



writeUserData(1,"viyan", "v@gmail.com")