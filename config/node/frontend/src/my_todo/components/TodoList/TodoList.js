import React from "react";
import Todoitem from "../Todoitem/Todoitem";

function TodoList({ listaZadan, listItemRemover }) {
  console.log(listaZadan);

  return (
    <div>
      <h2>Lista zadań do zrobienia</h2>
      <ul>
        {listaZadan.map((zadanie, i) => {
          return (
            <Todoitem
              key={i}
              id={i}
              zadanie={zadanie}
              listItemRemover={listItemRemover}
            />
          );
        })}
      </ul>
    </div>
  );
}
export default TodoList;
