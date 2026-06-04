import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyCISiSeOegesyAaqVsHuRNH7cFtGUUc920",
    authDomain: "iproject-edf06.firebaseapp.com",
    projectId: "iproject-edf06",
    storageBucket: "iproject-edf06.appspot.com",
    messagingSenderId: "1094280671740",
    appId: "1:1094280671740:web:4acb1a445f3ffe37bf4279"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    signInWithEmailAndPassword(auth, username, password)
        .then((userCredential) => {
            
            const user = userCredential.user;
            localStorage.setItem('user', user) // Müəmma
            window.location.href = "check.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        }); 
});