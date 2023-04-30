import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo,editTodo,toggleIsDone } from "./redux/todoSlice";

const Task = ({ el }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [input, setInput] = useState(el.payload);
  const dispatch = useDispatch();

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(editTodo({ id: el.id, text: input }));
    setIsEditing(false);
  };

  const handleDone = () => {
    dispatch(toggleIsDone({ id: el.id }));
  };

  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleEdit}>
          <input value={input} onChange={(e) => setInput(e.target.value)} />
          <button type="submit">Save</button>
        </form>
      ) : (
        <>
          <table class="table mb-4">
            <thead>
              <tr>
                <th scope="col">Item Number</th>
                <th scope="col">Todo Item</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>{el.id}</th>
                <td
                  style={{
                    textDecoration: el.isDone ? "line-through" : "none",
                  }}
                >
                  {input}
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(deleteTodo(el))}
                  >
                    Delete
                  </button>
                  |
                  <button
                    className="btn btn-warning ms-1"
                    onClick={() => setIsEditing(true)}
                  >
                    Edit
                  </button>
                  |
                  <button className="btn btn-success" onClick={handleDone}>
                    {el.isDone ? "Undo" : "Done"}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default Task;
