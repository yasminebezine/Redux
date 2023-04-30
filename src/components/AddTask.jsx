import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./redux/todoSlice";



const AddTask = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  return (
    <>
      <h4>ToDo App</h4>
      <form
        onSubmit={(e) => e.preventDefault()}
      >
            <label>Add todo</label>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          <button
            onClick={() => {
              dispatch(addTodo({ id: Math.random(), payload: input }));
              setInput("");
            }}
          >
            Add Task
          </button>
      
      </form>
    </>
  );
};

export default AddTask;
