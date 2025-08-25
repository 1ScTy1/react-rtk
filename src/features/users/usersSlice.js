import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return await response.json();
});

const usersSlice = createSlice({
    name: "users",
    initialState: {
        list:[],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.status = 'success';
                state.list = action.payload;
            })
            .addCase(getUsers.rejected, (state, action) => {
                action.error = undefined;
                state.status = 'failed';
                state.error = action.error.message;
            })
    },
})

export default usersSlice.reducer;