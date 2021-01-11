import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import ChatIcon from '@material-ui/icons/Chat';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TelegramIcon from '@material-ui/icons/Telegram';

export default function ContactSection() {
    return (
        <section className="contact section bd-container" id="contact">
            <span className="section-subtitle">For projects</span>
            <h2 className="section-title">Contact Me</h2>

            <div className="contact__container bd-grid">
                <div className="contact__content bd-grid">
                    <div className="contact__box">
                        <i className="contact__icon">
                            <HomeIcon/>
                        </i>
                        <h3 className="contact__title">Location</h3>
                        <span>Av. Las torres calle las margaritas 256</span>
                    </div>

                    <div className="contact__box">
                        <i className="contact__icon">
                            <PhoneIcon/>
                        </i>
                        <h3 className="contact__title">Phone</h3>
                        <span>+51 973726387</span>
                    </div>

                    <div className="contact__box">
                        <i className="contact__icon">
                            <EmailIcon/>
                        </i>
                        <h3 className="contact__title">Location</h3>
                        <span>btorrejoncerna@gmail.com</span>
                    </div>

                    <div className="contact__box">
                        <i className="contact__icon">
                            <ChatIcon/>
                        </i>
                        <h3 className="contact__title">Chat</h3>
                        <div>
                            <a href="# " className="contact__social">
                                <i>
                                    <WhatsAppIcon/>
                                </i>
                            </a>
                            <a href="# " className="contact__social">
                                <i>
                                    <TelegramIcon/>
                                </i>
                            </a>
                        </div>
                    </div>
                </div>

                <form action="" className="contact__form">
                    <div className="contact__inputs">
                        <input type="text" className="contact__input" placeholder="Name"/>
                        <input type="email" className="contact__input" placeholder="Email"/>
                    </div>

                    <div className="contact__inputs">
                        <input type="text" className="contact__input" placeholder="Project"/>
                        <input type="number" className="contact__input" placeholder="Number"/>
                    </div>

                    <textarea name="" id="" cols="30" rows="7" className="contact__input" placeholder="Message"/>

                    <input type="submit" className="button contact__button" value="Send Message"/>
                </form>
            </div>
        </section>
    )
}
