import "./login.css";
import { Link } from "react-router-dom";
import Photo from "../Assets/darknet.jpg";

export default function Login() {
  return (
    <div className="login">
      <div className="main">
        <div className="left">
          <img src={Photo} alt="darknet" />
        </div>
        <div className="right">
      <h1>Login</h1>
          <form>
            <label>
              Email
              <input type="email" id="email" placeholder="Enter Email" />
            </label>
            <label>
              Password
              <input
                type="password"
                id="password"
                placeholder="Enter Password"
              />
            </label>
            <div className="forget">
              <Link to="/Register">Register</Link>
              <Link to="/Forget">Forget Password</Link>
            </div>
            <button type="submit">Use Google Account to login</button>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
