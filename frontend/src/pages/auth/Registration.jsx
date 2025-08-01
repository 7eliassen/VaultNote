import { Link } from "react-router-dom";
import styles from "./auth.module.css"; // import CSS Module

function Registration() {
  return (
    <div className={styles.auth_background}>
      <div className={`${styles.auth_container} ${styles.form}`}>
        <header>Signup</header>
        <form>
          <input type="text" placeholder="Enter your email" className={styles.input} />
          <input type="password" placeholder="Create a password" className={styles.input} />
          <input type="password" placeholder="Confirm your password" className={styles.input} />
          <input type="button" className={styles.button} value="Signup" />
        </form>
        <div className={styles.signup}>
          <span>
            Already have an account? 
            <Link to="/login" className={styles.link}> Login</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Registration;
