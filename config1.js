import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyDvvW-iuamWdzCkF07gTwa6hPJ5CFUeDaU",
  authDomain: "adminlogin-79fd4.firebaseapp.com",
  databaseURL: "https://adminlogin-79fd4-default-rtdb.firebaseio.com",
  projectId: "adminlogin-79fd4",
  storageBucket: "adminlogin-79fd4.appspot.com",
  messagingSenderId: "618210945592",
  appId: "1:618210945592:web:990df02fb327084ba314cd"
};

initializeApp(firebaseConfig);

const database = getDatabase(app);
const auth = getAuth();

SignIn.addEventListener('click', (e) =>{
    var username= document.getElementById('#username').value;
    var password= document.getElementById('#password').value;

    createUserWithEmailAndPassword(auth, username, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    set(ref(database, 'users/' + user.uid),{
        username : username,
        password : password,
    })
    alert('Successfully Login');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    // ..
  });

})
  