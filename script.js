
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

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

document.addEventListener("DOMContentLoaded", function () {
 
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      const userRef = ref(database, 'users/' + uid + '/rank');
      get(userRef).then((snapshot) => {
        const userRank = snapshot.val();
        console.log('İstifadəçi uid:', uid);
        console.log('İstifadəçi rankı:', userRank); 
        if (userRank === 'guest') {
         
          window.location.href = 'guest.html';
        } else if (userRank === 'standart') {
          window.location.href = 'login.html';
        } else {
          console.error('Bilinməyən istifadəçi rankı:', userRank); 
        }
      }).catch((error) => {
        console.error('İstifadəçi məlumatları alınırkən xəta oldu:', error); // 
      });
    } 
  });


});