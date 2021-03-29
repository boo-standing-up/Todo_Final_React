import { React } from "react";

export const InconplateTodos = (props) => {
  const { todos, onClickDelete } = props;
  return (
    <div className="incomplate_aria">
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list_row">
              <li>{todo}</li>
              <button>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
