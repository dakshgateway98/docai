import { createSlice } from "@reduxjs/toolkit";

const userAuthSlice = createSlice({
    name: "userSlice",
    initialState: {
        userData: null,
        isLogged: false,
    },
    reducers: {
        addUser: (state, action) => {
            
            state.userData = action.payload;
        },
        removeUser: (state) => {
            state.userData = null;
        },
        updateIsLogged: (state, action) => {
            state.isLogged = action.payload;
        },
    },
});

export default userAuthSlice.reducer;
export const { addUser, removeUser, updateIsLogged } = userAuthSlice.actions;
