import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: 'John Doe',
    email: 'john@example.com',
    address: {
        street: '123 Fake St',
    }
}

const userSlice = createSlice({
    initialState,
    name: 'user',
    reducers: {
        setName(state, action) {
            state.name = action.payload;
        },
        setEmail(state, action) {
            state.email = action.payload;
        }
    }
})

export const { setName, setEmail } = userSlice.actions;
export const userReducer = userSlice.reducer;