import styles from "../styles/pages/Signup.module.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../config";
import { MdOutlinePersonOutline } from "react-icons/md";
import { BiLock } from "react-icons/bi";

export const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
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
    <div className={styles.outer}>
      <div className={styles.container}>
        <h1 className={styles.header}>Sign up</h1>
        <div className={styles.username}>
          <p>Gmail / Username</p>
          <div className={styles.iconputter}>
            <MdOutlinePersonOutline className={styles.icon} />
            <input
              className={styles.input}
              type="email"
              label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Type your Gmail"
            ></input>
          </div>
          <div className={styles.underline}></div>
        </div>
        <div className={styles.password}>
          <p>Password</p>
          <div className={styles.iconputter}>
            <BiLock className={styles.icon} />
            <input
              className={styles.input}
              type="password"
              label="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Create your password"
            ></input>
          </div>
          <div className={styles.underline}></div>
          <div className={styles.forgot}>Forgot password?</div>
        </div>
        <button type="submit" onClick={onSubmit} className={styles.Signup}>
          Sign up
        </button>
        <p className={styles.underlast}>
          Already have an account? <NavLink to="/login">Sign in</NavLink>
        </p>
      </div>
    </div>
  );
};
