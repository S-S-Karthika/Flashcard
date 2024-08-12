// Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <p>Admin: Karthika | Contact: karthikasenthil2004@gmail.com | © 2024 Your Company</p>
        </footer>
    );
};

const footerStyle = {
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '10px 0',
};

export default Footer;
