import React from 'react'
import logo1 from '../resources/images/work1.jpg'
import logo2 from '../resources/images/work2.jpg'
import logo3 from '../resources/images/work3.jpg'
import logo4 from '../resources/images/work4.jpg'
import logo5 from '../resources/images/work5.jpg'
import logo6 from '../resources/images/work6.jpg'

export default function PortfolioSection() {
    return (
        <section className="portfolio section bd-container" id="portfolio">
            <span className="section-subtitle">My recent works</span>
            <h2 className="section-title">Portfolio</h2>

            <div className="portfolio__nav">
                <span className="portfolio__item active-portfolio" data-filter="all">All</span>
                <span className="portfolio__item" data-filter=".web">Web</span>
                <span className="portfolio__item" data-filter=".mobile">Mobile</span>
                <span className="portfolio__item" data-filter=".game">Game</span>
            </div>

            <div className="portfolio__container bd-grid">
                <div className="portfolio__content mix mobile">
                    <a href="# "><img src={logo1} alt="" className="portfolio__img"/></a>
                    <div className="portfolio__data">
                        <span className="portfolio__subtitle">Mobile Development</span>
                        <a href="# "><h2 className="portfolio__title">New mobile application of work done for a client.</h2></a>
                        <a href="# " className="button button-link">View Details</a>
                    </div>
                </div>

                <div className="portfolio__content mix mobile">
                    <a href="# "><img src={logo2} alt="" className="portfolio__img"/></a>
                    <div className="portfolio__data">
                        <span className="portfolio__subtitle">Mobile Development</span>
                        <a href="# "><h2 className="portfolio__title">New mobile application of work done for a client.</h2></a>
                        <a href="# " className="button button-link">View Details</a>
                    </div>
                </div>

                <div className="portfolio__content mix web">
                    <a href="# "><img src={logo3} alt="" className="portfolio__img"/></a>
                    <div className="portfolio__data">
                        <span className="portfolio__subtitle">Web Development</span>
                        <a href="# "><h2 className="portfolio__title">New mobile application of work done for a client.</h2></a>
                        <a href="# " className="button button-link">View Details</a>
                    </div>
                </div>

                <div className="portfolio__content mix web">
                    <a href="# "><img src={logo4} alt="" className="portfolio__img"/></a>
                    <div className="portfolio__data">
                        <span className="portfolio__subtitle">Web Development</span>
                        <a href="# "><h2 className="portfolio__title">New mobile application of work done for a client.</h2></a>
                        <a href="# " className="button button-link">View Details</a>
                    </div>
                </div>

                <div className="portfolio__content mix game">
                    <a href="# "><img src={logo5} alt="" className="portfolio__img"/></a>
                    <div className="portfolio__data">
                        <span className="portfolio__subtitle">Game Development</span>
                        <a href="# "><h2 className="portfolio__title">New mobile application of work done for a client.</h2></a>
                        <a href="# " className="button button-link">View Details</a>
                    </div>
                </div>

                <div className="portfolio__content mix game">
                    <a href="# "><img src={logo6} alt="" className="portfolio__img"/></a>
                    <div className="portfolio__data">
                        <span className="portfolio__subtitle">Game Development</span>
                        <a href="# "><h2 className="portfolio__title">New mobile application of work done for a client.</h2></a>
                        <a href="# " className="button button-link">View Details</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
