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


export default function Banner() {
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
                                    <h4>Guardianes de patitas</h4>
                                    </div>
                                    <div className="big-title">
                                        <h2>
                                            Rescatamos vidas, <br/>construimos hogares
                                        </h2>
                                    </div>
                                    <div className="btn-box">
                                        <a href="contact" className="thm-btn">
                                           Contactanos
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
                                    <h4>Guardianes de patitas</h4>
                                    </div>
                                    <div className="big-title">
                                        <h2>
                                            Ayudanos con tu <br/>donación
                                        </h2>
                                    </div>
                                    <div className="btn-box">
                                    <a href="contact" className="thm-btn">
                                           Contactanos
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
                                            Buscamos hogares <br/>para nuestros rescatados
                                        </h2>
                                    </div>
                                    <div className="btn-box">
                                    <a href="contact" className="thm-btn">
                                           Contactanos
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
