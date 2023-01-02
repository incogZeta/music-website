import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../config";

export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div>
      <h1>Sign in</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email address"
      ></input>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      ></input>
      <button type="submit" onClick={onSubmit}>
        Sign in
      </button>
      <p>
        no account?<NavLink to="/Signup">Sign up</NavLink>
      </p>
    </div>
  );
};
