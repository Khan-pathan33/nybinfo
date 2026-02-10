import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: false,
        role: "guest",  //guest | user | premium
    },
    reducers: {
        loginAsUser: (state) => {
            state.isLoggedIn= true;
            state.role ="user";
        },
        loginAsPremium:(state) =>{
            state.isLoggedIn=true;
            state.role="premium";
        },
        logout: (state)=> {
            state.isLoggedIn=false;
            state.role="guest"
        }
    }

})

export const { loginAsUser, loginAsPremium, logout} = authSlice.actions;
export default authSlice.reducer;