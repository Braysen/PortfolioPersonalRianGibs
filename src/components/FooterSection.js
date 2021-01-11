import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';

export default function FooterSection() {
    return (
        <footer className="footer">
            <div className="footer__container bd-container">
                <h1 className="footer__title">Rian Gibs</h1>
                <p className="footer__description">I am Rian Gibs and this is my personal website, consult me here.</p>

                <div className="footer__social">
                    <a href="# " className="footer__link">
                        <i>
                            <LinkedInIcon/>
                        </i>
                    </a>
                    <a href="# " className="footer__link">
                        <i>
                            <GitHubIcon/>
                        </i>
                    </a>
                    <a href="# " className="footer__link">
                        <i>
                            <FacebookIcon/>
                        </i>
                    </a>
                </div>

                <p className="footer__copy">&#169; 2021 JBraToc. All right reserved.</p>
            </div>
        </footer>
    )
}
