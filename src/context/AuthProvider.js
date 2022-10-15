import { useState, createContext, useEffect } from 'react';
import PreferenceKeys from '~/utils/PreferenceKeys';

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [isAuth, setIsAuth] = useState(!!localStorage.getItem(PreferenceKeys.login));

    useEffect(() => {
        console.log('Login successfully ', isAuth);
    }, [isAuth]);

    return <AuthContext.Provider value={{ isAuth, setIsAuth }}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };
