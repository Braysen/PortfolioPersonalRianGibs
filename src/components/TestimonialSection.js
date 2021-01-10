import React from 'react'
import logo from '../resources/images/testimonial1.jpg'
import logo1 from '../resources/images/testimonial2.jpg'
import logo2 from '../resources/images/testimonial3.jpg'

export default function TestimonialSection() {
    return (
        <section className="testimonial section bd-container">
            <span className="section-subtitle">My client saying</span>
            <h2 className="section-title">Testimonial</h2>

            <div className="testimonial__container swiper-container">
                <div className="swiper-wrapper">
                    <div className="testimonial__content swiper-slide">
                        <img src={logo} alt="" className="testimonial__img"/>
                        <h3 className="testimonial__title">Nik Holly</h3>
                        <span className="testimonial__client">Client</span>
                        <p className="testimonial__description">This company does a very good service</p>
                    </div>

                    <div className="testimonial__content swiper-slide">
                        <img src={logo1} alt="" className="testimonial__img"/>
                        <h3 className="testimonial__title">Sara Mill</h3>
                        <span className="testimonial__client">Client</span>
                        <p className="testimonial__description">This company does a very good service</p>
                    </div>

                    <div className="testimonial__content swiper-slide">
                        <img src={logo2} alt="" className="testimonial__img"/>
                        <h3 className="testimonial__title">Clay Mitchell</h3>
                        <span className="testimonial__client">Client</span>
                        <p className="testimonial__description">This company does a very good service</p>
                    </div>
                </div>

                <div className="swiper-pagination"></div>
            </div>
        </section>
    )
}
