'use client';

import { useState } from "react";
import { Eye, EyeSlash } from "phosphor-react";
import Link from "next/link";
import styles from "./register.module.css";

export default function Register() {
  const [ showPassword, setShowPassword ] = useState(false);
  const [ email, setEmail ] = useState("");
  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");
  
  return (
    <div className={styles.page}>
        <main className={styles.title}>
          <h1>Register | ConnectAI</h1>
        </main>
        <div className={styles.username}>
          <label className={styles.labelAnim}>
          <input
            type="text"
            id="UserName"
            placeholder=""
            required
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <span>Your Username</span>
          </label>
        </div>
        <div className={styles.divEmail}>
          <label className={styles.labelAnim}>
          <input
            type="email"
            id="loginEmail"
            placeholder=""
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <span>Your Email</span>
          </label>
        </div>
        <div className={styles.divPassword}>
          <label className={styles.labelAnim}>
          <input
            type={showPassword ? 'text' : 'password' }
            id="loginPassword"
            placeholder=""
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <span>Your Password</span>
          </label>
          <button
          type="button"
          onClick={() => setShowPassword(!showPassword) }
          onMouseDown={(e) => e.preventDefault()}
          >
            { showPassword ? <EyeSlash size={24} /> : <Eye size={24} /> }
          </button>
        </div>
        <div className={styles.buttonSubmit}>
          <button
            type="submit"
          >Register</button>
        </div>
        <div className={styles.linkDiv}>
          <Link href="/">Return to Login Page.</Link>
        </div>
    </div>
 )
}