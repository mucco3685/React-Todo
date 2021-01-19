import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/inputTodo";
import { IncompleteTodos } from "./components/incompleteTodos";
import { CompleteTodos } from "./components/completeTodos";

export const App = () => {
  // 入力フォーム
  const [todoText, setTodoText] = useState("");

  // 未完了のTODOエリア
  const [incompleteTodos, setIncompleteTodos] = useState([
    "ああああ",
    "いいいい"
  ]);

  // 完了のTODOエリア
  const [completeTodos, setCompleteTodos] = useState(["うううう"]);

  // TODOを入力にevent(テキスト入力)がされたらそれを反映する(defaultの””を解除)
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  // 入力エリアで追加ボタンをクリック→未完了のTODOエリアに追加し、フォームもクリアする
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  // 削除の実装
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    // index番目の要素を１つ削除

    setIncompleteTodos(newTodos);
  };

  // 完了ボタンの実装
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  // 戻すボタンの実装
  // completeエリアからsplitで削除して、
  // incompleteエリアの値に代入する

  const onClickReturn = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />

      <IncompleteTodos
        incompTodo={incompleteTodos}
        onClickComp={onClickComplete}
        onClickDel={onClickDelete}
      />

      <CompleteTodos
        completeTodos={completeTodos}
        onClickReturn={onClickReturn}
      />
    </>
  );
};
