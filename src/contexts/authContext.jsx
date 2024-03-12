import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext () ;
export const useAuth = () => useContext (AuthContext);

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(!! localStorage.getItem('userid'));

    const login = () => {
    // Perform login actions, set user ID in localStorage, update isLoggedIn state
    localStorage.setItem('userId','user_id _value_here');
    setIsLoggedIn (true);
    }

    const logout = async () => {
        // Perform logout actions, remove user ID from localStorage, update isLoggedIn state localStorage. removeItem( 'userId');
        setIsLoggedIn (false) ;
    };

    return (
        <AuthContext Provider value={{isLoggedIn,login,logout}}>
            {children}
        </AuthContext>
    );
}