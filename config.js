
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getDatabase , set, ref , update} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUOFWtXI1aujf1HIcXpoYoc5AU2g1_e9k",
  authDomain: "authenicationapp-70a80.firebaseapp.com",
  databaseURL: "https://authenicationapp-70a80-default-rtdb.firebaseio.com",
  projectId: "adminlogin-70a80",
  storageBucket: "adminlogin-70a80.appspot.com",
  messagingSenderId: "722034747822",
  appId: "1:722034747822:web:1b05741e84c4cf2af9803f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();


Login.addEventListener('click', (e) =>{
    const auth = getAuth();
    var username= document.getElementById('username').value
    var password= document.getElementById('password').value
signInWithEmailAndPassword(auth, username, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    const dt = new Date();
    update(ref(database, 'users/' + user.uid),{

       last_login: dt,
    })
    alert("User Login");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });

})

const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});
logout.addEventListener('click', (e)=> {
    const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
  alert("LogOut");
}).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
});
})