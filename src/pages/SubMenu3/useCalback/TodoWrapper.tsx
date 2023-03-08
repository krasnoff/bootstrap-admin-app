import { memo, useCallback, useState } from "react";
import Todos from "./Todos";

const TodoWrapper = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<Array<string>>([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  
  /**
   * this function is being called only when the inner component rerenders it self
   * not when you explicittaly call it
   */
  const addTodo = useCallback(() => {
    // elegeant way to add a new element to an array
    setTodos((t) => [...t, "New Todo"]);
  }, []);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default memo(TodoWrapper);