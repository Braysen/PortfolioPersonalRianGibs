import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

export default function Header() {
    return (
        <>
            <a href="# " className="scrolltop" id="scroll-top">
                <i className="scrolltop__icon">
                    <ExpandLessIcon/>
                </i>
            </a>
            <header className="l-header" id="header">
                <nav className="nav bd-container">
                    <a href="# " className="nav__logo">Rian Gibs</a>

                    <div className="nav__menu" id="nav-menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="#home" className="nav__link active-link">Home</a>
                            </li>
                            <li className="nav__item">
                                <a href="#about" className="nav__link">About</a>
                            </li>
                            <li className="nav__item">
                                <a href="#services" className="nav__link">Services</a>
                            </li>
                            <li className="nav__item">
                                <a href="#portfolio" className="nav__link">Portfolio</a>
                            </li>
                            <li className="nav__item">
                                <a href="#contact" className="nav__link">Contactme</a>
                            </li>
                        </ul>
                    </div>

                    <div className="nav__toggle" id="nav-toggle">
                        <MenuIcon/>
                    </div>
                </nav>
            </header>
        </>
    )
}
