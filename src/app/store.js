import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/users/usersSlice';
import counterReducer from '../features/counter/counterSlice';
import todoReducer from '../features/todo/todoSlice';
import contactReducer from '../features/contact/contactSlice';

export const store = configureStore({
    reducer: {
        users: usersReducer,
        counter: counterReducer,
        todo: todoReducer,
        contacts: contactReducer,
    },
});
