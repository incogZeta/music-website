import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../config";
import { MdOutlinePersonOutline } from "react-icons/md";
import { BiLock } from "react-icons/bi";
import styles from "../styles/pages/Login.module.css";

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
    <div className={styles.outer}>
      <div className={styles.container}>
        <h1 className={styles.header}>Login</h1>
        <div className={styles.username}>
          <p>Gmail / Username</p>
          <div className={styles.iconputter}>
            <MdOutlinePersonOutline className={styles.icon} />
            <input
              className={styles.input}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
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
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            ></input>
          </div>
          <div className={styles.underline}></div>
          <div className={styles.forgot}>Forgot password?</div>
        </div>
        <button type="submit" onClick={onSubmit} className={styles.Signup}>
          Sign in
        </button>
        <p className={styles.underlast}>
          no account? <NavLink to="/Signup"> Sign up</NavLink>
        </p>
      </div>
    </div>
  );
};

