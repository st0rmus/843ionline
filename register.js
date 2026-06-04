import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyCISiSeOegesyAaqVsHuRNH7cFtGUUc920",
    authDomain: "iproject-edf06.firebaseapp.com",
    projectId: "iproject-edf06",
    storageBucket: "iproject-edf06.appspot.com",
    messagingSenderId: "1094280671740",
    appId: "1:1094280671740:web:4acb1a445f3ffe37bf4279"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);


document.getElementById("register-form").addEventListener("submit", function (event) {
    event.preventDefault(); 

    const email = document.getElementById('new-usermail').value;
    const password = document.getElementById('new-password').value;
    const repeatpassword = document.getElementById("repeat-password").value;

    if (repeatpassword == password) {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                
             
                set(ref(database, 'users/' + user.uid), {
                    email: email,
                    password: password,
                    rank: "guest"
                }).then(() => {
                    alert("Uğurla qeydiyyatdan keçdiniz.");
                    window.location.href = "check.html";
                }).catch((error) => {
                    alert("Nəsə problem var Məhəmmədə yaz: " + error.message);
                });

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });
    }
    else {
        alert("Şifreler uyuşmuyor.")
    }
});