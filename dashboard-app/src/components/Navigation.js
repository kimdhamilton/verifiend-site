import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
const Navigation = () => {
    return (
        <Router>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="https://github.com/kimdhamilton/verifiend">Github</Link>
                    </li>
                </ul>
        </Router>
    );
};
export default Navigation;

//<Link to="/">Home</Link>