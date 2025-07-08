'use client'
import Link from "next/link"
export default function Adoptables() {
    return (
        <>

        {/**Event One Start */}
        <section className="event-one">
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">Rescatados</span>
                    </div>
                    <h2 className="section-title__title title-animation">Adoptá a una de nuestros  <br/>amigos caninos</h2>
                </div>
                <div className="row">
                    {/**Event One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="event-one__single">
                            <div className="event-one__img-box">
                                <div className="event-one__img">
                                    <img src="assets/images/adopcion/beto-1.jpg" alt=""/>
                                </div>
                                <div className="event-one__date">
                                    <p>Cariñoso</p>
                                </div>
                            </div>
                            <div className="event-one__content">
                                <h4 className="event-one__title"><Link href="/adoption-request">Beto</Link></h4>
                                <p className="event-one__text">Es un cocker spaniel rescatado de las vias del tren, es super amistodo, esta educado</p>
                                <div className="event-one__btn-box">
                                    <Link href="/adoption-request" className="event-one__btn thm-btn">Adoptame<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/**Event One Single End*/}
                    {/**Event One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                        <div className="event-one__single">
                            <div className="event-one__img-box">
                                <div className="event-one__img">
                                    <img src="assets/images/adopcion/corbata-1.jpg" alt=""/>
                                </div>
                                <div className="event-one__date">
                                    <p>Jugueton</p>
                                </div>
                            </div>
                            <div className="event-one__content">
                                <h4 className="event-one__title"><Link href="https://wa.me/15551234567?text=Quiero%20adoptar%20a%20Corbata">Corbata</Link></h4>
                                <p className="event-one__text">Es juguetón y se lleva bien con otros animales. Tiene 3 años </p>
                                <div className="event-one__btn-box">
                                    <Link href="https://wa.me/15551234567?text=Quiero%20adoptar%20a%20Corbata" className="event-one__btn thm-btn">Adoptame<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/**Event One Single End*/}
                    {/**Event One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="100ms">
                        <div className="event-one__single">
                            <div className="event-one__img-box">
                                <div className="event-one__img">
                                    <img src="assets/images/adopcion/venus-1.jpg" alt=""/>
                                </div>
                                <div className="event-one__date">
                                    <p>Guardiana</p>
                                </div>
                            </div>
                            <div className="event-one__content">
                                <h4 className="event-one__title"><Link href="https://wa.me/15551234567?text=Quiero%20adoptar%20a%20Venus">Venus</Link></h4>
                                <p className="event-one__text">Es guardiana, esta castrada y es muy activa. Tiene 4 años</p>
                                <div className="event-one__btn-box">
                                    <Link href="https://wa.me/15551234567?text=Quiero%20adoptar%20a%20Venus" className="event-one__btn thm-btn">Adoptame<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/**Event One Single End*/}
                </div>
            </div>
        </section>
        {/**Event One End */}
    
            

        </>
    )
}
