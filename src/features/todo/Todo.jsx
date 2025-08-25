import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, toggleTask, removeTask } from "./todoSlice";

export default function TodoList() {
    const [text, setText] = useState("");
    const tasks = useSelector((state) => state.todo.tasks);
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (text.trim() === "") return;
        dispatch(addTask(text) )
        setText("");
    };

    return (
        <div>
            <h2>Todo List</h2>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={handleAdd}>Добавить</button>

            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
            <span
                style={{
                    textDecoration: task.completed ? "line-through" : "none"
                }}
            >
              {task.text}
            </span>
                        <button onClick={() => dispatch(toggleTask(task.id))}>
                            Сделано
                        </button>
                        <button onClick={() => dispatch(removeTask(task.id))}>
                            Удалить
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
