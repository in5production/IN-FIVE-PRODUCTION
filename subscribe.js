<script type="module">
  import { collection, addDoc, serverTimestamp }
  from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

  window.subscribeUser = async () => {
    const email = document.getElementById("subEmail").value;

    if (!email) return alert("Enter email");

    await addDoc(collection(window.db, "subscribers"), {
      email,
      time: serverTimestamp()
    });

    alert("Subscribed!");
  };
</script>
