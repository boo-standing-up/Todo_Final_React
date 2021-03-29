import { useState } from "react";
import "./styles.css";
import { inputTodo } from "./components/inputTodo";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incomplateTodos, setIncomplateTodos] = useState([]);
  const [complateTodos, setComplateTodo] = useState(["33", "hanamichi"]);
  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    if (todoText === "") return; //空だと動かないと設定
    const newTodo = [...incomplateTodos, todoText];
    setIncomplateTodos(newTodo);
    setTodoText("");
  };

  // const onComplateAdd=()=>{
  //   const genTodo=
  // };

  const onClickDelete = (index) => {
    const newTodo = [...incomplateTodos];
    newTodo.splice(index, 1);
    setIncomplateTodos(newTodo);
  };
  return (
    <>
      <inputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <div className="incomplate_aria">
        <p className="title">未完了のTODO</p>
        <ul>
          {incomplateTodos.map((todo, index) => {
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
      <div className="complate_aria">
        <p className="title">完了のTODO</p>
        <ul>
          {complateTodos.map((todo) => {
            return (
              <div key={todo} className="list_row">
                <li>{todo}</li>
                <button>戻る</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
