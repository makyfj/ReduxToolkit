import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

const Login = () => {
  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(
      login({
        name: "Franklin",
        age: 24,
        email: "franklin@gmail.com",
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
        <button onClick={logoutHandler}>Logout</button>
      </div>
    </div>
  );
};

export default Login;
