import React from 'react'
import { Link } from 'react-router-dom'
import Pages from '../../pages'

export default class Navbar extends React.Component {
    pages = new Pages();

    render() {
        return (
            <nav>
                <ul>
                    {
                        Object.keys(this.pages.routes).map((path) => {
                            return(<li key={path}>
                                <Link to={path}>{path.split('/')[path.split('/').length - 1] ===
                                    ''
                                    ? 'Home'
                                    : (path.split('/')[
                                          path.split('/').length - 1
                                    ]).charAt(0).toUpperCase() +
                                        (path.split('/')[
                                            path.split('/').length - 1
                                        ]).slice(1)}</Link>
                            </li>)
                        })
                    }
                </ul>
            </nav>
        )
    }
}