import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { counterAction } from "./reducer/Counter";

const Home = () => {
  const isLogin = useSelector((state) => {
    return state.auth.isLogin;
  });
  const dispatch = useDispatch();
  const isShow = useSelector((state) => {
    return state.counter.isShow;
  });
  const number = useSelector((state) => {
    return state.counter.counter;
  });
  const increaseHandler = () => {
    dispatch(counterAction.increase());
  };
  const decreaseHandler = () => {
    dispatch(counterAction.decrease());
  };
  const increaseBy5 = () => {
    dispatch(counterAction.increaseBy5(8));
  };
  const toggleHandler = () => {
    dispatch(counterAction.toggle());
  };

  return (
    <>
      {isLogin && (
        <div className="counter-container">
          <div>
            {isShow && <p className="number">{number}</p>}
            <button onClick={increaseHandler}>+</button>
            <button onClick={decreaseHandler}>-</button>
            <button onClick={increaseBy5}>increaseBy5</button>
            <button onClick={toggleHandler}>Toggle</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
