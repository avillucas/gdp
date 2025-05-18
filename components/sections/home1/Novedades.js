'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },



}


export default function Novedades() {
    return (
        <>
        <section className="main-slider">
            <Swiper {...swiperOptions} className="main-slider__carousel">
                <SwiperSlide>
                <div className="swiper-slide">
                        <div className="image-layer"
                            style={{ backgroundImage: ' url(assets/images/slider/portada-1.png)' }}>
                        </div>
                        <div className="image-layer__left-gradient"
                            style={{ backgroundImage: ' urlassets/images/slider/portada-1.png)' }}></div>
                        <div className="container">
                            <div className="main-slider-content">
                                <div className="main-slider-content__inner">
                                    <div className="sub-title">
                                    <h4>Compartí con nosotros</h4>
                                    </div>
                                    <div className="big-title">
                                        <h2>
                                            Soñamos con un mundo <br/>sin animales en la calle
                                        </h2>
                                    </div>
                                    <div className="btn-box">
                                        <a href="https://wa.me/15551234567?text=Quiero%20sumarme%20como%20voluntario%20" className="thm-btn">
                                           Sumate
                                            <span>
                                                <i className="icon-arrow-right"></i>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="swiper-slide">
                        <div className="image-layer"
                            style={{ backgroundImage: ' url(assets/images/slider/portada-2.png)' }}>
                        </div>
                        <div className="image-layer__left-gradient"
                            style={{ backgroundImage: ' url(assets/images/slider/portada-2.png)' }}></div>
                        <div className="container">
                            <div className="main-slider-content">
                                <div className="main-slider-content__inner">
                                    <div className="sub-title">
                                    <h4> Viste una mascota perdida</h4>
                                    </div>
                                    <div className="big-title">
                                        <h2>
                                            Nuestra misión es ayudar  <br/>animales en situación de calle
                                        </h2>
                                    </div>
                                    <div className="btn-box">
                                    <a href="https://wa.me/15551234567?text=Encontr%C3%A9%20una%20mascota%20en%20la%20calle%20y%20creo%20que%20esta%20perdido%2C%20pueden%20ayudarme%20" className="thm-btn">
                                          Avisanos
                                            <span>
                                                <i className="icon-arrow-right"></i>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="swiper-slide">
                        <div className="image-layer"
                            style={{ backgroundImage: ' url(assets/images/slider/portada-3.png)' }}>
                        </div>
                        <div className="image-layer__left-gradient"
                            style={{ backgroundImage: ' url(assets/images/slider/portada-3.png)' }}></div>
                        <div className="container">
                            <div className="main-slider-content">
                                <div className="main-slider-content__inner">
                                    <div className="sub-title">
                                        <h4>Guardianes de patitas</h4>
                                    </div>
                                    <div className="big-title">
                                        <h2>
                                            Tu donación salva vidas
                                        </h2>
                                    </div>
                                    <div className="btn-box">
                                    <a href="#donaciones" className="thm-btn">
                                           Doná
                                            <span>
                                                <i className="icon-arrow-right"></i>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <ul className="banner-slider-nav-four">
                <li className="banner-slider-control-four banner-slider-button-prev h1p"
                    aria-label="Previous slide">
                    <span><i className="icon-arrow-right-two" aria-hidden="true"></i></span>
                </li>
                <li className="banner-slider-control-four banner-slider-button-next h1n" aria-label="Next slide">
                    <span><i className="icon-arrow-right-two" aria-hidden="true"></i></span>
                </li>
            </ul>
            </Swiper>
        </section>
        {/*Main Sllider Start */}
        
        </>
    )
}
