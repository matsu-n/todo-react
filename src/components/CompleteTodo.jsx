import React from "react";

export const CompleteTodo = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div className="complete-area">
      <p className="title">完了したTODO</p>
      <ul id="complete-list">
        {todos.map((todo, index) => {
          return (
            <li key={todo}>
              <div className="list-row">
                <p>aaa</p>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
