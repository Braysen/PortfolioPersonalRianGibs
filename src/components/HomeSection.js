import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import logo from '../resources/images/home.jpg'

export default function HomeSection() {
    return (
        <section className="home" id="home">
            <div className="home__container bd-container bd-grid">
                <div className="home__data">
                    <span className="home__greetings">Hello, My name is</span>
                    <h1 className="home__name">Rian Gibs</h1>
                    <span className="home__profession">Backend Developer</span>
                    <a download="" href="#cv" className="button button-light">Download Cv</a>
                </div>
                <div className="home__social">
                    <a href="# " className="home__social-icon">
                        <i><FacebookIcon/></i>
                    </a>
                    <a href="# " className="home__social-icon">
                        <i><LinkedInIcon/></i>
                    </a>
                    <a href="# " className="home__social-icon">
                        <i><GitHubIcon/></i>
                    </a>
                </div>
                <div className="home__img">
                    <img src={logo} alt=""/>
                </div>
            </div>
        </section>
    )
}
