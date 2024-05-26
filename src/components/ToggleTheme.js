import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export const initialState = {theme: "light"}

export default function ToggleTheme() {
    const theme = useSelector(state => state.theme);
    const dispatch = useDispatch();

    const toggleTheme = () => {
        dispatch({ type: 'TOGGLE_THEME' });
    }


    return (
        <div>
            <h1>Theme: {theme}</h1>
            <button onClick={toggleTheme}>Switch theme</button>
        </div>
    );
}