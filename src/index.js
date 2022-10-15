import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import ScrollToTop from './components/helpers/ScrollToTop';
import GlobalStyles from '~/components/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalStyles>
            <Router>
                <ScrollToTop />
                <AuthProvider>
                    <App />
                </AuthProvider>
            </Router>
        </GlobalStyles>
    </React.StrictMode>,
);
