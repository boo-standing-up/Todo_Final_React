import { useState } from "react";
import "./styles.css";

export const App = () => {
  const [incomplateTodos, setIncomplateTodos] = useState(["もももも", "2"]);
  const [complateTodos, setComplateTodo] = useState(["33", "hanamichi"]);
  return (
    <>
      <div className="input_eria">
        <input placeholder="Todoを入力" />
        <button>追加</button>
      </div>
      <div className="incomplate_aria">
        <p className="title">未完了のTODO</p>
        <ul>
          {incomplateTodos.map((todo) => {
            return (
              <div key={todo} className="list_row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
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
