// Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="social-links">
                <a href="YOUR_SOCIAL_LINK_1"><i className="fab fa-twitter"></i></a>
                <a href="YOUR_SOCIAL_LINK_2"><i className="fab fa-instagram"></i></a>
                {/* Add more social links as needed */}
            </div>
        </footer>
    );
}

export default Footer;
