import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { AuthContext } from "../../comp/context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/");
      })
      .catch(() => {
        setError(true);
      });
  };

  return (
    <div className="login">
      <h1 className="title">Login</h1>

      <form onSubmit={handleLogin}>
        <div className="formInput">
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Pasword"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <h3>{error && `Wrong Email or Password`}</h3>
        <button type="submit">Login</button>
      </form>
      <h2>
        Don't have an account ?
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <span>Sign Up</span>
        </Link>
      </h2>
    </div>
  );
};

export default Login;
