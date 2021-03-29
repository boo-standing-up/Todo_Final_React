import { React } from "react";

const style = {
  backgroundColor: "rgb(0, 89, 255)",
  width: "400px",
  height: "30px",
  padding: "8px",
  marginBlockEnd: "8px",
  borderRadius: "8px"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div style={style}>
      <input placeholder="Todoを入力" value={todoText} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
