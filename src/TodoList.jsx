import { getTodo } from "./reducer/Todo";
import { useDispatch, useSelector } from "react-redux";
const TodoList = () => {
  const dispatch = useDispatch();
  const getdata = () => {
    dispatch(getTodo());
  };

  const isLoading = useSelector((state) => {
    return state.todo.isLoading;
  });
  const data = useSelector((state) => {
    return state.todo.data;
  });
  const isError = useSelector((state) => {
    return state.todo.isError;
  });

  return (
    <div>
      <button onClick={getdata}>GetTodo</button>
      {isLoading && <p>Loaing...</p>}
      {data && (
        <>
          {data.map((item, index) => {
            return (
              <div key={index}>
                <p>{item.title}</p>
              </div>
            );
          })}
        </>
      )}
      {isError && <p>Something Went Wrong</p>}
    </div>
  );
};

export default TodoList;
