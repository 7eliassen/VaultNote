import { Link } from "react-router-dom";
import styles from "./auth.module.css"; // import as styles
import axios from "axios"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

 async function getToken(username, password) {
    try {
      const params = new URLSearchParams();
      params.append("grant_type", "password")
      params.append("username", username);
      params.append("password", password);

      const response = await axios.post("http://127.0.0.1:8000/token", params, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      console.log("Login response:", response.data);
      localStorage.setItem("token", response.data.access_token);
      return true;
    } catch (error) {
      console.error("Login error:", error);
      if (error.status === 401) {
        {
          alert("Incorrect login or password")
          return false
        }
      }
    }
  }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  

  return (
    <div className={styles.auth_background}>
      <div className={`${styles.auth_container} ${styles.form}`}>
        <header>Login</header>
        <form>
          <input type="text" placeholder="Enter your login" onChange={(e) => setUsername(e.target.value)}/>
          <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}/>
          <a href="#" className={styles.link}>Forgot password?</a>
          <input type="button" className={styles.button} value="Login" 
          onClick={async () => {
            const login = await getToken(username, password)
            if (login)
              navigate("/home")       
            }}/>
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
