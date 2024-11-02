const firebaseConfig = {
    apiKey: "AIzaSyCt2HnBM2t0tvJNRnsk0FsDLLvxiB3-0Ac",
    authDomain: "m-photo-16a53.firebaseapp.com",
    databaseURL: "https://m-photo-16a53-default-rtdb.firebaseio.com",
    projectId: "m-photo-16a53",
    storageBucket: "m-photo-16a53.firebasestorage.app",
    messagingSenderId: "30453910789",
    appId: "1:30453910789:web:eeaddf56fe3f71496e3b6c"
  };

  firebase.initializeApp(firebaseConfig);

  const commentsDB = firebase.database().ref('comments')

  const savee = (name , mesg) =>{
    var newcommentDB = commentsDB.push()

    newcommentDB.set({
        name: name,
        mesg :mesg,
    })
  }

  savee("viyan" ,"hiii")