import { auth } from "./firebase-config.js";

import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const ADMIN_EMAIL = "meghanreddyanumula@gmail.com";

const loginBtn = document.getElementById("loginBtn");
const userInfo = document.getElementById("userInfo");

document.getElementById("todayDate").innerText =
    new Date().toDateString();

loginBtn.addEventListener("click", async () => {
    const provider = new GoogleAuthProvider();

    try {
        await signInWithPopup(auth, provider);
    } catch (err) {
        alert(err.message);
    }
});

onAuthStateChanged(auth, (user) => {

    if (!user) return;

    if (user.email === ADMIN_EMAIL) {
        userInfo.innerHTML =
            `👑 Admin: ${user.displayName}`;
    } else {
        userInfo.innerHTML =
            `👤 ${user.displayName}`;
    }

    loginBtn.style.display = "none";
});
