import React from "react";

export const IncompleteTodos = (props) => {
  const { incompTodo, onClickComp, onClickDel } = props;

  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {incompTodo.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComp(index)}>完了</button>
              <button onClick={() => onClickDel(index)}>削除</button>
              {/* onClick~~~(index)と平打ち→アロー関数にして即関数実行されるのを避けています */}
            </div>
          );
        })}
      </ul>
    </div>
  );
};
