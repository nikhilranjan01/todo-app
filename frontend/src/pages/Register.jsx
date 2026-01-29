import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async (e) => {
    e.preventDefault();
    const res = await createUserWithEmailAndPassword(auth, email, password);
    await sendEmailVerification(res.user);
    alert("Verification email sent");
  };

  return (
    <form onSubmit={register}>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button>Register</button>
    </form>
  );
}
