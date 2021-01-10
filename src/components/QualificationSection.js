import React from 'react'
import WorkIcon from '@material-ui/icons/Work';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import BookIcon from '@material-ui/icons/Book';

export default function Qualification() {
    return (
        <section className="qualification section bd-container">
            <span className="section-subtitle">Experience and Education</span>
            <h2 className="section-title">Qualification</h2>

            <div className="qualification__container bd-grid">

                <div className="qualification__content">
                    <h2 className="qualification__title">
                        <i className="qualification__title-icon">
                            <WorkIcon/>
                        </i>
                        Work Experience
                    </h2>

                    <div className="bd-grid">
                        <div className="qualification__data">
                            <h3 className="qualification__area"> Junior Back End Developer</h3>

                            <div className="qualification__box">
                                <span className="qualification__work">
                                    <i className="qualification__icon">
                                        <WorkIcon/>
                                    </i>
                                    Adobe - New York
                                </span>

                                <span className="qualification__work">
                                    <i className="qualification__icon">
                                        <CalendarTodayIcon/>
                                    </i>
                                    Jan 2019 - Aug 2019
                                </span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <h3 className="qualification__area">Database Administrator</h3>

                            <div className="qualification__box">
                                <span className="qualification__work">
                                    <i className="qualification__icon">
                                        <WorkIcon/>
                                    </i>
                                    SQL Server - Sao Paulo
                                </span>

                                <span className="qualification__work">
                                    <i className="qualification__icon">
                                        <CalendarTodayIcon/>
                                    </i>
                                    Oct 2019 - Dec 2019
                                </span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <h3 className="qualification__area"> Programmer Analyst</h3>

                            <div className="qualification__box">
                                <span className="qualification__work">
                                    <i className="qualification__icon">
                                        <WorkIcon/>
                                    </i>
                                    Everis - Santiago de Chile
                                </span>

                                <span className="qualification__work">
                                    <i className="qualification__icon">
                                        <CalendarTodayIcon/>
                                    </i>
                                    Jan 2020 - May 2020
                                </span>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="qualification__content">
                    <h2 className="qualification__title">
                        <i className="qualification__title-icon">
                            <BookIcon/>
                        </i>
                        Education
                    </h2>

                    <div className="bd-grid">
                        <div className="qualification__data">
                            <h3 className="qualification__area">Software Engineer</h3>

                            <div className="qualification__box">
                                <span className="qualification__work">
                                    <i className="qualification__icon">
                                        <BookIcon/>
                                    </i>
                                    UTP - Lima
                                </span>

                                <span className="qualification__work">
                                    <i className="qualification__icon">
                                        <CalendarTodayIcon/>
                                    </i>
                                    Jan 2013 - Aug 2018
                                </span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <h3 className="qualification__area">Master in web developer</h3>

                            <div className="qualification__box">
                                <span className="qualification__work">
                                    <i className="qualification__icon">
                                        <BookIcon/>
                                    </i>
                                    Inacap - Santiago de Chile
                                </span>

                                <span className="qualification__work">
                                    <i className="qualification__icon">
                                        <CalendarTodayIcon/>
                                    </i>
                                    Jan 2019 - Aug 2021
                                </span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}
