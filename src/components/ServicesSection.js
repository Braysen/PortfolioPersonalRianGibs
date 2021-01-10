import React from 'react'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import WebIcon from '@material-ui/icons/Web';
import GamesIcon from '@material-ui/icons/Games';

export default function ServicesSection() {
    return (
        <section className="services section bd-container" id="services">
            <span className="section-subtitle">What i offer</span>
            <h2 className="section-title">Services</h2>

            <div className="services__container bd-grid">
                <div className="services__data">
                    <i className="services__icon">
                        <PhoneAndroidIcon/>
                    </i>
                    <h3 className="services__title">
                        Mobile application Development 
                    </h3>
                    <p className="services__description">
                        Services that I offer and work, with years of experience in the work area.
                    </p>
                    <a href="# " className="button">Know More</a>
                </div>

                <div className="services__data">
                    <i className="services__icon">
                        <WebIcon/>
                    </i>
                    <h3 className="services__title">
                        Web Application Development  
                    </h3>
                    <p className="services__description">
                        Services that I offer and work, with years of experience in the work area.
                    </p>
                    <a href="# " className="button">Know More</a>
                </div>

                <div className="services__data">
                    <i className="services__icon">
                        <GamesIcon/>
                    </i>
                    <h3 className="services__title">
                        Game Development
                    </h3>
                    <p className="services__description">
                        Services that I offer and work, with years of experience in the work area.
                    </p>
                    <a href="# " className="button">Know More</a>
                </div>
            </div>
        </section>
    )
}
