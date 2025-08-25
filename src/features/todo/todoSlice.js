import {createSlice} from "@reduxjs/toolkit";

const  initialState = {
    tasks: []
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({
                id:Date.now(),
                text: action.payload,
                completed: false
            });
        },
        toggleTask: (state, action) => {
            state.tasks.forEach((task) => {
                if (task.id === action.payload) {
                    task.completed = !task.completed;
                }
            })
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        }
    },
})
export const {addTask, toggleTask, removeTask} = todoSlice.actions
export default todoSlice.reducer