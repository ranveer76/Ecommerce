import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './pages/'

export default function App() {
    return (
        <div>
            <Router
                future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true,
                }}
            >
                <Routes />
            </Router>
        </div>
    );
}