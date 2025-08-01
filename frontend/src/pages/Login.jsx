import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="auth_container login form">
      <header>Login</header>
      <form>
        <input type="text" placeholder="Enter your email" />
        <input type="password" placeholder="Enter your password" />
        <a href="#">Forgot password?</a>
        <input type="button" className="button" value="Login" />
      </form>
      <div className="signup">
        <span>
          Don't have an account? 
          <Link to="/register"> Signup</Link>
        </span>
      </div>
    </div>
  );
}

export default Login;
