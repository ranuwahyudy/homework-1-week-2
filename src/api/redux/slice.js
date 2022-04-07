import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice ({
    name: "token",
    initialState: {
        token: '',
    },
    devTools: true,
    reducers: {
        setUserToken: (state, action) => {
            state.token = action.payload
        }
    }
})

export const {setUserToken} = userSlice.actions;
export default userSlice.reducer;