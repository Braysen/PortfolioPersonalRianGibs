import React from 'react'
import ChatIcon from '@material-ui/icons/Chat';

export default function ProjectSection() {
    return (
        <section className="project section bd-container">
            <div className="project__container bd-grid">
                <div className="project__data">
                    <i className="project__icon">
                        <ChatIcon/>
                    </i>

                    <div>
                        <h2 className="project__title">Project in mind</h2>
                        <p className="project__description">
                            Hire me to carry out the following projects.
                        </p> 
                    </div>

                    <div>
                        <a href="# " className="button button-white">Hire me</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
