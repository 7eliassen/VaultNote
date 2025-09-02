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
    const [errorMessage, setErrorMessage] = useState("")


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

      console.log("registration response:", response);
      return response.status
  } catch (error) {
      console.error("registration error:", error);
      return error.status
  }
  }

  function checkPassword(password) {
    const passwordRequirements = /^[a-zA-Z0-9!@#$%^&*()_\+\-=\[\]{};:'",.<>\/?|~`]{8,}$/
    return passwordRequirements.test(password)
    
  }


  return (
    <div className={styles.auth_background}>
      <div className={`${styles.auth_container} ${styles.form}`}>
        <p className={styles.error_message}>{errorMessage}</p>
        <header>Signup</header>
        <form>
          <input type="text" placeholder="Enter your login" className={styles.input} onChange={(e) => setUsername(e.target.value)}/>
          <input type="password" placeholder="Create a password" className={styles.input} onChange={(e) => setPassword(e.target.value)}/>
          <input type="password" placeholder="Confirm your password" className={styles.input} onChange={(e) => setSecPassword(e.target.value)}/>
          <input type="button" className={styles.button} value="Signup" onClick={async () => {
            if (password !== secPassword) {
              setErrorMessage("Passwords do not match")
              return
            }
            if (checkPassword(password)) {
              const reg_response = await registration(username, password)
              const resp_status = reg_response
              console.log(resp_status)

              if (resp_status == 200) {
                navigate("/login")
              }

              else if (resp_status == 403) {
                setErrorMessage("Username is busy try another")
              }

              else if (resp_status == 400) {
                setErrorMessage("Bad password or username")
              }     

          } else {
            setErrorMessage("The password must contain English letters, special characters, and be at least 8 characters long.")
          }}}/>
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
