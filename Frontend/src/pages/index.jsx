import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));
const Contact = lazy(() => import('./Contact'));

import Navbar from '../components/Navbar/Navbar';
import Loader from '../components/Loader/Loader';

export default class Pages extends React.Component {
    routes = {
        '/': <Home />,
        '/about': <About />,
        '/contact': <Contact />,
    };

    render() {
        return (
            <>
                <Navbar />
                <Loader>
                    <Routes>
                        {Object.entries(this.routes)?.map(
                            ([path, component]) => (
                                <Route
                                    path={path}
                                    key={path}
                                    element={component}
                                />
                            )
                        )}
                        <Route
                            path='*'
                            element={<h1>Not Found</h1>}
                        />
                    </Routes>
                </Loader>
            </>
        );
    }
}
