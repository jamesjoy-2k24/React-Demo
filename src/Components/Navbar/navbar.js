import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>Joy</h1>
      </div>
      <div className="navItems">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/form">Form</a>
        <a href="/user">User</a>
      </div>
    </div>
  );
}
