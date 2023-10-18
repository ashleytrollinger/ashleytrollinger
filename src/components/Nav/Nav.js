import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/Works">
                        Works
                    </Link>
                </li>
                <li>
                    <Link to="/Resume">
                        Resume
                    </Link>
                </li>
                <li>
                    <Link to="/Contact">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;