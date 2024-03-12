import React, { useContext, useReducer } from 'react';

const initialState = {
    isLoggedIn: false,
    user: null,
    loading: false,
    error: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return { ...state, loading: true };
        case 'LOGIN_SUCCESS':
            return { ...state, loading: false, isLoggedIn: true, user: action.payload };
        case 'LOGIN_FAILURE':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthContext Provider');
    }

    return context;
};
