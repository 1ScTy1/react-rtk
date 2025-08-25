import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    list: JSON.parse(localStorage.getItem("contacts")) || [],
    searchQuery: ""
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        addContact: (state, action) => {
            const newContact = { id: uuidv4(), ...action.payload };
            state.list.push(newContact);
            localStorage.setItem("contacts", JSON.stringify(state.list));
        },
        updateContact: (state, action) => {
            const { id, data } = action.payload;
            const index = state.list.findIndex(c => c.id === id);
            if (index !== -1) {
                state.list[index] = { ...state.list[index], ...data };
                localStorage.setItem("contacts", JSON.stringify(state.list));
            }
        },
        deleteContact: (state, action) => {
            state.list = state.list.filter(c => c.id !== action.payload);
            localStorage.setItem("contacts", JSON.stringify(state.list));
        },
        clearAllContacts: (state) => {
            state.list = [];
            localStorage.setItem("contacts", JSON.stringify(state.list));
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        }
    }
});

export const { addContact, updateContact, deleteContact, clearAllContacts, setSearchQuery } = contactsSlice.actions;
export default contactsSlice.reducer;
