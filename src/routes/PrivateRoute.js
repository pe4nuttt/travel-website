import { Navigate, useLocation } from 'react-router-dom';
import { useContext, useEffect } from 'react';

import { AuthContext } from '~/context/AuthProvider';

function PrivateRoute({ children }) {
    const { isAuth } = useContext(AuthContext);
    const prevLocation = useLocation();

    return isAuth ? children : <Navigate replace to={`/sign-up?redirectTo=${prevLocation.pathname}`} />;
}

export default PrivateRoute;
