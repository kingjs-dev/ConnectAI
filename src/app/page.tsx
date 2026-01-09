'use client';

import { useState } from 'react';
import { Eye, EyeSlash } from 'phosphor-react';
import Link from "next/link";
import styles from './page.module.css';

export default function Home() {
  const [ showPassword, setShowPassword ] = useState(false);
  return (
      <div className={styles.page}>
        <main className={styles.title}>
          <h1>Login | ConnectAI</h1>
        </main>
        <div className={styles.divEmail}>
          <label className={styles.labelAnim}> 
          <input
            type="email"
            id="loginEmail"
            placeholder=""
            required
          />
          <span>Your Email or Username</span>
          </label>
        </div>
        <div className={styles.divPassword}>
          <label className={styles.labelAnim}>
          <input
            type={showPassword ? 'text' : 'password' }
            id="loginPassword"
            placeholder=""
            required
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
          >Login</button>
        </div>
         <div className={styles.linkDiv}>
          <Link href="/register">Dont have an account? Go to the registration page.</Link>
         </div>
      </div>
  )
}