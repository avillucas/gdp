import Link from "next/link"


export default function Buscados() {
    return (
        <>
        {/*Blog One Start */}
        <section className="blog-one">
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">¿Los viste?</span>
                    </div>
                    <h2 className="section-title__title title-animation">Ayudalos a reencontrarse <br/>con sus familias</h2>
                </div>
                <div className="row">
                    {/*Blog One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="blog-one__single">
                            <div className="blog-one__img-box">
                                <div className="blog-one__img">
                                    <img src="assets/images/buscados/bianca-1.jpg" alt=""/>
                                </div>
                                <div className="blog-one__date">
                                    <p>20<span><br/>feb</span></p>
                                </div>
                            </div>
                            <div className="blog-one__content">
                                <h4 className="blog-one__title"><Link href="https://wa.me/15551234567?text=Hola.%2C%20Vi%20a%20Bianca%20en%20la%20zona%20de%20....">Se perdió en la zona de plaza Alsina, reconoce su nombre, ofrecemos recompensa </Link></h4>
                                <div className="blog-one__btn-box">
                                    <Link href="https://wa.me/15551234567?text=Hola.%2C%20Vi%20a%20Bianca%20en%20la%20zona%20de%20...." className="blog-one__btn thm-btn">Sabes algo, ¡Avisanos!<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Blog One Single End*/}
                    {/*Blog One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                        <div className="blog-one__single">
                            <div className="blog-one__img-box">
                                <div className="blog-one__img">
                                    <img src="assets/images/buscados/henry-1.jpg" alt=""/>
                                </div>
                                <div className="blog-one__date">
                                    <p>15<span><br/>Nov</span></p>
                                </div>
                            </div>
                            <div className="blog-one__content">
                                <h4 className="blog-one__title"><Link href="https://wa.me/15551234567?text=Hola.%2C%20Vi%20a%Henry%20en%20la%20zona%20de%20....">Henry se escapó asustado por la última tormenta en la ciudad Zona Monroe y Olazába</Link></h4>
                                <div className="blog-one__btn-box">
                                    <Link href="https://wa.me/15551234567?text=Hola.%2C%20Vi%20a%Henry%20en%20la%20zona%20de%20...." className="blog-one__btn thm-btn">Sabes algo, ¡Avisanos!<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Blog One Single End*/}
                    {/*Blog One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
                        <div className="blog-one__single">
                            <div className="blog-one__img-box">
                                <div className="blog-one__img">
                                    <img src="assets/images/buscados/joaco-1.jpg" alt=""/>
                                </div>
                                <div className="blog-one__date">
                                    <p>25<span><br/>Jun</span></p>
                                </div>
                            </div>
                            <div className="blog-one__content">
                                <h4 className="blog-one__title"><Link href="https://wa.me/15551234567?text=Hola.%2C%20Vi%20a%20Joaco%20en%20la%20zona%20de%20....">Joaco se perdió en plaza Armenia, tenía su collar rojo. Lo espera su hermano humano con TEA</Link></h4>
                                <div className="blog-one__btn-box">
                                    <Link href="https://wa.me/15551234567?text=Hola.%2C%20Vi%20a%20Joaco%20en%20la%20zona%20de%20...." className="blog-one__btn thm-btn">Sabes algo, ¡Avisanos!<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Blog One Single End*/}
                </div>
            </div>
        </section>
        {/*Blog One End */}
        </>
    )
}
