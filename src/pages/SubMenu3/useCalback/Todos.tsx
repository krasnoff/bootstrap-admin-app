import { memo } from "react";

interface Props {
    todos: Array<string>,
    addTodo: React.MouseEventHandler<HTMLButtonElement>
}

const Todos = (props: Props) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {props.todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={props.addTodo}>Add Todo</button>
    </>
  );
};

export default memo(Todos);