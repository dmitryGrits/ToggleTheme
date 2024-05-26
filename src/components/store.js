import { configureStore } from "@reduxjs/toolkit";
import {initialState} from "./ToggleTheme";


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE_THEME":
            return {
                ...state,
                theme: state.theme === "light" ? "dark" : "light"
            };
        default:
            return state;
    }
};

const store = configureStore({
    reducer: reducer,
});

export default store;