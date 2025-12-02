<script type="module">
  // Import Firebase SDKs
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

  // --- Your Firebase Configuration ---
  const firebaseConfig = {
    apiKey: "AIzaSyDWgibGFkTYUjE9AG_mOpXW92OgP3ARvUk",
    authDomain: "infivesite.firebaseapp.com",
    projectId: "infivesite",
    storageBucket: "infivesite.firebasestorage.app",
    messagingSenderId: "359834066542",
    appId: "1:359834066542:web:722f2f3efabfd338a0507f",
    measurementId: "G-49E3M70LFE"
  };

  // --- Initialize Firebase ---
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  // Global Firebase instances
  window.auth = getAuth(app);
  window.db = getFirestore(app);
</script>
