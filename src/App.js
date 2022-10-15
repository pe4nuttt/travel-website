import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';

import Layout from '~/components/Layout';
import Home from '~/pages/Home';
import Services from '~/pages/Services';
import Trips from '~/pages/Trips';
import SignUp from '~/pages/SignUp';
import PrivateRoute from '~/routes/PrivateRoute';
import { privateRoutes, publicRoutes } from './routes';
// import Navbar from './components/Navbar';
// import Home from '../src/pages/Home';
// import Services from '../src/pages/Services';
// import Trips from '../src/pages/Trips';
// import SignUp from '../src/pages/SignUp';
// import Footer from './components/Footer';
// import Form from './components/Signup/Form';
// import FormLogIn from './components/LogIn';
import { AuthContext } from '~/context/AuthProvider';

function App() {
    const navigate = useNavigate();

    const { isAuth, setIsAuth } = useContext(AuthContext);

    useEffect(() => {
        window.scrollTo(0, 0);
        console.log('scroll to top');
    });

    return (
        <>
            <Routes>
                {publicRoutes.map((route) => {
                    const Page = route.component;

                    return (
                        <Route
                            key={route.id}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}

                {privateRoutes.map((route) => {
                    const Page = route.component;
                    return (
                        <Route
                            key={route.id}
                            path={route.path}
                            element={
                                <PrivateRoute>
                                    <Layout>
                                        <Page />
                                    </Layout>
                                </PrivateRoute>
                            }
                        />
                    );
                })}
            </Routes>
        </>
    );
}

export default App;
