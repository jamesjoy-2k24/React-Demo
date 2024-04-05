import "./user.css";

export default function User() {
  return (
    <div className="user">
      <h1>Login</h1>
      <form>
        <div className="fill-field">
          <label>
            Username
            <input type="text" id="username" placeholder="Enter Username" />
          </label>
          <label>
            Password
            <input type="password" id="password" placeholder="Enter Password" />
          </label>
        </div>
        <div className="forget">
          <a href="/home">Forget Password</a>
          <a href="/home">Register</a>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
