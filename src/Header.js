import React, { useEffect } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import { RiApps2Line } from "react-icons/ri";
import { Link, useLocation } from 'react-router-dom';
import './styles/Header.css';


const Header = () => {
    const location = useLocation();

    useEffect(() => {
        const header = document.getElementById('header');
        const navMenu = document.getElementById('nav-menu');
        const navToggle = document.getElementById('nav-toggle');
        const navClose = document.getElementById('nav-close');

        if (!header) return;

        const handleToggleClick = () => {
            if (navMenu) navMenu.classList.add('show-menu');
        };

        const handleCloseClick = () => {
            if (navMenu) navMenu.classList.remove('show-menu');
        };

        const bgHeader = () => {
            if (window.scrollY >= 50) {
                header.classList.add('bg-header');
            } else {
                header.classList.remove('bg-header');
            }
        };

        if (location.pathname === '/') {
            header.classList.remove('header-pages');
        } else {
            header.classList.add('header-pages');
        }

        if (navToggle) {
            navToggle.addEventListener('click', handleToggleClick);
        }

        if (navClose) {
            navClose.addEventListener('click', handleCloseClick);
        }

        window.addEventListener('scroll', bgHeader);

        // Cleanup event listeners on unmount
        return () => {
            if (navToggle) {
                navToggle.removeEventListener('click', handleToggleClick);
            }
            if (navClose) {
                navClose.removeEventListener('click', handleCloseClick);
            }
            window.removeEventListener('scroll', bgHeader);
            if (navMenu) {
                navMenu.classList.remove('show-menu');
            }
        };
    }, [location]);

    return (
        <header className="header header-pages" id="header">
            <nav className="nav container">
                <Link to="/" className="nav__logo">Algerian In Ottawa</Link>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link to="/" className="nav__link">Home</Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/about" className="nav__link">About me</Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/portfolio" className="nav__link">Portfolio</Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/contact" className="button">Contact Me</Link>
                        </li>
                    </ul>

                    <div className="nav__close" id="nav-close">
                        <IoCloseSharp className="ri-close-line" />
                    </div>
                </div>

                <div className="nav__actions">
                    <div className="nav__toggle" id="nav-toggle">
                        <RiApps2Line className="ri-apps-2-line" />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
