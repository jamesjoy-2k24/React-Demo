import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <h1>Login</h1>
      <form>
        <div className="fill-field">
          <label>
            First Name
            <input type="text" id="username" placeholder="Enter Username" />
          </label>
          <label>
            Password
            <input type="password" id="password" placeholder="Enter Password" />
          </label>
          <button type="submit">Login</button>
          <a href="/user">Create New Account</a>
        </div>
      </form>
    </div>
  );
}
