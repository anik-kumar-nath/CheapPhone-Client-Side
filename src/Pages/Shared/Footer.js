import React from 'react';
import logo from './CheapPhone.png'

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-gray-300 text-black rounded">
            <div>
                <div className="avatar">
                    <div className="w-20 rounded-full">
                        <img src={logo} alt='logo' />
                    </div>
                </div>
                <p className="font-bold">
                    CheapPhone <br />Providing reasonable price phone Buy and Sell Service.
                </p>
                <small>Copyright © 2022 - All right reserved</small>
            </div>
        </footer>
    );
};

export default Footer;