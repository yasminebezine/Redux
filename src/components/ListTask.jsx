import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

const ListTask = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      {Array.isArray(todos) && todos.map((el) => <Task key={el.id} el={el} />)}
    </div>
  );
};

export default ListTask;