import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    const res = await signInWithEmailAndPassword(auth, email, password);
    if (!res.user.emailVerified) {
      await signOut(auth);
      alert("Verify email first");
      return;
    }
    alert("Login successful");
  };

  return (
    <form onSubmit={login}>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button>Login</button>
    </form>
  );
}
