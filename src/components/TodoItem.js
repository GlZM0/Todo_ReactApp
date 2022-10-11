import React from "react";

const TodoItem = (props) => {
  const markHandler = () => props.clickHandler(props.element.id);

  console.log("render");
  return (
    <div
      className={`card ${props.element.isDone ? "done" : ""}`}
      key={props.element.id}
    >
      <h2>{props.element.title}</h2>
      <button onClick={markHandler}>{`${props.element.isDone ? "Przywroc" : "Zakoncz"}`}</button>
    </div>
  );
};

export default TodoItem;
