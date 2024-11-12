import React, { StrictMode, lazy } from 'react';
import ReactDOM from 'react-dom/client';
const App = lazy(() => import('./App'));
import Loader from './components/Loader/Loader';

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Loader>
            <App />
        </Loader>
    </StrictMode>
);
