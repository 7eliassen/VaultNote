import { Link } from "react-router-dom";


function Registration() {
  return (
    <div className="auth_container registration form">
      <header>Signup</header>
      <form>
        <input type="text" placeholder="Enter your email" />
        <input type="password" placeholder="Create a password" />
        <input type="password" placeholder="Confirm your password" />
        <input type="button" className="button" value="Signup" />
      </form>
      <div className="signup">
        <span>
          Already have an account? 
          <Link to="/login"> Login</Link>
        </span>
      </div>
    </div>
  );
}

export default Registration;
