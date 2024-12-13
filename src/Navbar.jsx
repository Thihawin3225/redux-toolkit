import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authAction } from "./reducer/Auth";
const Navbar = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => {
    return state.auth.isLogin;
  });
  console.log(isLogin);

  const logout = () => {
    dispatch(authAction.logout());
  };
  const login = () => {
    dispatch(authAction.login());
  };
  return (
    <section className="nav-bar">
      <h1>Calculate</h1>
      {isLogin ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </section>
  );
};

export default Navbar;
