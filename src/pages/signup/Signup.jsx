import "./signup.scss";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useState } from "react";

const Signup = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const handleSignup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);

        navigate("/login");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="signup">
      <h1 className="title">Sign Up</h1>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Full Name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <h4>{error ? error : ""}</h4>
        <button type="submit">Sign up</button>
      </form>
      <h3>
        Have an account ?
        <Link to="/login" style={{ textDecoration: "none" }}>
          <span>Login</span>
        </Link>
      </h3>
    </div>
  );
};

export default Signup;
