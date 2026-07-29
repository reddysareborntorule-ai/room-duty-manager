import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDgrpaLQvpBMqb2nm_PDFQMpUHlh1RnoL0",
  authDomain: "room-duty-manager-c7422.firebaseapp.com",
  projectId: "room-duty-manager-c7422",
  storageBucket: "room-duty-manager-c7422.firebasestorage.app",
  messagingSenderId: "822860959581",
  appId: "1:822860959581:web:32db099d368e3dfa61e2b4"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);