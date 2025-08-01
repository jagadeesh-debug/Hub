import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../Backend/firebaseconfig";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getDoc, doc ,setDoc} from "firebase/firestore";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const login = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userDoc = await getDoc(doc(db, "users", user.uid));
      const agentData = await getDoc(doc(db, "Agents", user.uid));

      if (userDoc.exists() || agentData.exists()) {
        navigate("/home");
      } else {
        setError("User not found in Firestore.");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;

      const userDoc = await getDoc(doc(db, "users", user.uid));
      const agentData = await getDoc(doc(db, "Agents", user.uid));

      if (userDoc.exists() || agentData.exists()) {
        navigate("/home");
      } else {
        await setDoc(doc(db,"users",user.uid),
        {
          name:user.displayName,
          email:user.email,
          image:  user.photoURL
        });
        navigate("/home");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    const loginButton = document.getElementById("login_button");

    const handleEnterKey = (event) => {
      if (event.key === "Enter") {
        loginButton.click();
      }
    };

    document.addEventListener("keydown", handleEnterKey);
    return () => document.removeEventListener("keydown", handleEnterKey);
  }, []);

  useEffect(() => {
    const password_visible = document.getElementById("password_visible");

    const togglePasswordVisibility = () => {
      const password = document.getElementById("password");
      if (password.type === "password") {
        password.type = "text";
        password_visible.classList.remove("bx-show");
        password_visible.classList.add("bx-hide");
      } else {
        password.type = "password";
        password_visible.classList.remove("bx-hide");
        password_visible.classList.add("bx-show");
      }
    };

    password_visible?.addEventListener("click", togglePasswordVisibility);
    return () => password_visible?.removeEventListener("click", togglePasswordVisibility);
  }, []);

  return (
    <div className="flex justify-center items-center md:justify-center md:items-center min-h-screen">
      <div className="flex flex-col md:w-1/2 px-4 py-4 space-y-8 items-center">
        <h1 className="text-2xl tracking-wider md:text-5xl text-green-400" style={{ fontFamily: 'Bagel Fat One, sans-serif' }}>
          Login Here
        </h1>

        <div className="w-full md:w-2/3 xl:w-1/2 flex relative">
          <input
            id="email"
            type="email"
            placeholder="person@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-black w-full pr-10 px-4 py-2 rounded-md"
          />
          <i className="bx bx-user absolute top-1 right-2 text-2xl font-bold text-green-400"></i>
        </div>

        <div className="w-full md:w-2/3 xl:w-1/2 flex relative">
          <input
            id="password"
            type="password"
            placeholder="person@0"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-black w-full px-4 py-2 rounded-md"
          />
          <i className="bx bx-show absolute top-1 right-2 text-2xl font-bold text-green-400 cursor-pointer" id="password_visible"></i>
        </div>

        <button id="login_button" className="text-xl bg-green-400 md:w-1/4 rounded-md p-1 font-bold" onClick={login}>
          Log In
        </button>

        {error && <p className="text-red-500">{error}</p>}

        <div className="flex justify-between w-full md:w-2/3 xl:w-1/2">
          <a className="text-sm" href="#">Forgot Password</a>
          <Link to="/signup" className="text-sm">New User?</Link>
        </div>

        <div className="w-full md:w-1/2 flex items-center">
          <hr className="border border-black flex-grow" />
          <h2 className="text-md px-2">Or</h2>
          <hr className="border border-black flex-grow" />
        </div>

        <div className="flex space-x-4 justify-center w-1/2">
          <button className="text-center px-4 py-2 rounded-full text-3xl" onClick={handleGoogleLogin}>
            <i
              className="bx bxl-google"
              style={{
                background: 'linear-gradient(-220deg, #EA4335 30%, #FBBC05 50%, #4285F4 66%, #34A853 55%)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            ></i>
          </button>
          <button className="text-center px-4 py-2 rounded-full text-3xl">
            <i className="bx bxl-facebook text-blue-800"></i>
          </button>
          <button className="text-center px-4 py-2 rounded-full text-3xl">
            <i className="bx bxl-twitter text-blue-400"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
