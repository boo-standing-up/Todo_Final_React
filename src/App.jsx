import "./styles.css";

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="Todoを入力" />
        <button>追加</button>
      </div>
      <div>
        <p>未完了のTODO</p>
        <ul>
          <div>
            <li>文字が入ります</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div>
            <li>文字が入ります</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div>
        <p>完了のTODO</p>
        <ul>
          <div>
            <li>文字が入ります</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div>
            <li>文字が入ります</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
    </>
  );
};
