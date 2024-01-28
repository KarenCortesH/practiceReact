//Archivo de configuracion de mi almacen  mi redux
//Store
import { configureStore, createSlice } from "@reduxjs/toolkit";

let userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        status: ''
    },
    reducers: {
        signIn: (state, action) => {
            state.user = action.payload;
        },
        logOut: (state) => {
            state.user = null;
        }
    }
});

//Voy a exportar un par de acciones a las que hare el dipatch
export const { signIn, logOut } = userSlice.actions;

export const store = configureStore({
    reducer: {
        user: userSlice.reducer
    }
})

