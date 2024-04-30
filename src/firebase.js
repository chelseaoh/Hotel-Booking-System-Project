<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD2w9wR2W7hHjm1vojOmMO7cX-_93QtZWI",
    authDomain: "cabelle-a0a69.firebaseapp.com",
    databaseURL: "https://cabelle-a0a69-default-rtdb.firebaseio.com",
    projectId: "cabelle-a0a69",
    storageBucket: "cabelle-a0a69.appspot.com",
    messagingSenderId: "735995960774",
    appId: "1:735995960774:web:f0fa81b21871c044b7a6c7",
    measurementId: "G-MF101YKX7H"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>