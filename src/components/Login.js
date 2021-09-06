import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";
import { useState } from "react";

const Login = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");

  const loginHandler = () => {
    dispatch(
      login({
        name: name,
        age: age,
        email: email,
      })
    );
  };

  const logoutHandler = () => {
    // initial state
    dispatch(logout());
  };

  return (
    <div>
      <div>
        <button onClick={loginHandler}>Login</button>
        <p>
          Enter your name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </p>
        <p>
          Enter your age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </p>
        <p>
          Enter your email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <button onClick={logoutHandler}>Logout</button>
      </div>
    </div>
  );
};

export default Login;
