import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "recyclehub-fa4e0.firebaseapp.com",
  projectId: "recyclehub-fa4e0",
  storageBucket: "recyclehub-fa4e0.firebasestorage.app",
  messagingSenderId: "821296348060",
  appId: "1:821296348060:web:b1e05514c8c150a62ae659",
  measurementId: "G-WWT03K4P10"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
export default app;