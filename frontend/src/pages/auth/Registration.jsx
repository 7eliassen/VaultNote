import { Link } from "react-router-dom";
import styles from "./auth.module.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Registration() {
  // TODO: implement registration

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [secPassword, setSecPassword] = useState("")

  async function registration(userName, passwd) {
    try {
      const response = await axios.post('http://localhost:8000/users/', {
          username: userName,
          password: passwd
      }, {
          headers: {
              "Content-Type": "application/json",
          },
      });

      console.log("registration response:", response.data);
      return true
  } catch (error) {
      console.error("registration error:", error);
      return false
  }

  }


  return (
    <div className={styles.auth_background}>
      <div className={`${styles.auth_container} ${styles.form}`}>
        <header>Signup</header>
        <form>
          <input type="text" placeholder="Enter your login" className={styles.input} onChange={(e) => setUsername(e.target.value)}/>
          <input type="password" placeholder="Create a password" className={styles.input} onChange={(e) => setPassword(e.target.value)}/>
          <input type="password" placeholder="Confirm your password" className={styles.input} onChange={(e) => setSecPassword(e.target.value)}/>
          <input type="button" className={styles.button} value="Signup" onClick={async () => {
            if (password !== secPassword) {
              alert("Different passwords")
              return
            }
            const reg_response = await registration(username, password)
            if (reg_response){
              alert("You are registered now")
              navigate("/login")
            }else {
              alert("Error... Try another login")
            }
          }}/>
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
