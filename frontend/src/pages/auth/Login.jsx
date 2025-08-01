import { Link } from "react-router-dom";
import styles from "./auth.module.css"; // import as styles

function Login() {
  return (
    <div className={styles.auth_background}>
      <div className={`${styles.auth_container} ${styles.form}`}>
        <header>Login</header>
        <form>
          <input type="text" placeholder="Enter your email" className={styles.input} />
          <input type="password" placeholder="Enter your password" className={styles.input} />
          <a href="#" className={styles.link}>Forgot password?</a>
          <input type="button" className={styles.button} value="Login" />
        </form>
        <div className={styles.signup}>
          <span>
            Don't have an account?
            <Link to="/register" className={styles.link}> Signup</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
