import { React } from "react";

export const inputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div className="input_eria">
      <input placeholder="Todoを入力" value={todoText} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
