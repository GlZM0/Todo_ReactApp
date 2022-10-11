import React, { useState } from "react";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [elements, setElements] = useState([
    { id: "345678", isDone: true, title: "zakupy" },
    { id: "64423", isDone: false, title: "zadanie domowe" },
  ]);
  const [inputValue, setInputValue] = useState("");

  const changeState = (id) => {
    const index = elements.findIndex((x) => x.id == id);
    const newElements = elements;
    newElements[index].isDone = !newElements[index].isDone;

    console.log(newElements);
    setElements(newElements);
  };

  const addItem = () => {
    const item = {
      id: Math.random(),
      title: inputValue,
    };
    const newElements = [item, ...elements];
    setElements(newElements);
  };

  const inputHandler = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  const renderedElements = elements.map((e, index) => {
    return (
      <TodoItem key={index} element={e} clickHandler={() => this.changeState(index)} />
    );
  });

  return (
    <div>
      Todo app
      <input
        type="text"
        value={inputValue}
        onChange={inputHandler.bind(this)}
      ></input>
      <button onClick={addItem.bind(this)}>Dodaj do listy</button>
      {renderedElements}
    </div>
  );
};

export default Todo;
