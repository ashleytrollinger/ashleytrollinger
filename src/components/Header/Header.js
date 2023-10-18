import React from 'react';
import AshleyTrollinger from '../../images/AshleyTrollinger.png';

import './Header.css';

function Header(){
    return(
        <>
        <header>
            <div id='name-png'>
                <img src={AshleyTrollinger} alt='Ashley Trollinger' />
            </div>

        </header>

    </>
    )
}

export default Header;