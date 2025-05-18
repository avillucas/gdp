import Link from "next/link"
export default function Causas() {
    return (
        <>
        {/*Found One Start */}
        <section className="found-one">
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">Ayudalos</span>
                    </div>
                    <h2 className="section-title__title title-animation"><span>Juntos podemos Salvar sus vidas</span>
                    </h2>
                </div>
                <div className="row">
                    {/*Found One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="found-one__single">
                            <div className="found-one__img-box">
                                <div className="found-one__img">
                                    <img src="assets/images/causas/pirata-1.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="found-one__content">
                                <h4 className="found-one__title"><Link href="https://link.mercadopago.com.ar/proyecto4patass">Pirata</Link></h4>
                                <p className="found-one__text">Sufrio una amputación y reacudamos para su silla de Ruedas ajustable para patas traseras</p>
                                <div className="found-one__goals">
                                    <div className="found-one__raised">
                                        <p>Acumulado</p>
                                        <span>$40.075</span>
                                    </div>
                                    <div className="found-one__raised">
                                        <p>Objetivo</p>
                                        <span>$160.302</span>
                                    </div>
                                </div>
                                <div className="found-one__progress">
                                    <div className="bar">
                                        <div className="bar-inner count-bar" data-percent="25%" style={{ width: '25%' }}>
                                        </div>
                                    </div>
                                </div>
                                <div className="found-one__btn-box">
                                    <Link href="https://link.mercadopago.com.ar/proyecto4patas" className="found-one__btn thm-btn">¡Doná Ahora!<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Found One Single End*/}
                    {/*Found One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                        <div className="found-one__single">
                            <div className="found-one__img-box">
                                <div className="found-one__img">
                                    <img src="assets/images/causas/ceniza-1.jpg" alt=""/>
                                    <img src="assets/images/causas/ceniza-2.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="found-one__content">
                                <h4 className="found-one__title"><Link href="https://link.mercadopago.com.ar/proyecto4patas">Ceniza</Link></h4>
                                <p className="found-one__text">Necesita un marcapasos por un problema congenito del corazón</p>
                                <div className="found-one__goals">
                                    <div className="found-one__raised">
                                        <p>Acumulado</p>
                                        <span>$650.002</span>
                                    </div>
                                    <div className="found-one__raised">
                                        <p>Objetivo</p>
                                        <span>$1.300.030</span>
                                    </div>
                                </div>
                                <div className="found-one__progress">
                                    <div className="bar">
                                        <div className="bar-inner count-bar" data-percent="50%" style={{ width: '50%' }}>
                                        </div>
                                    </div>
                                </div>
                                <div className="found-one__btn-box">
                                    <Link href="https://link.mercadopago.com.ar/proyecto4patas" className="found-one__btn thm-btn">¡Doná Ahora!<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Found One Single End*/}
                    {/*Found One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
                        <div className="found-one__single">
                            <div className="found-one__img-box">
                                <div className="found-one__img">
                                    <img src="assets/images/causas/roque-1.jpg" alt=""/>
                                    <img src="assets/images/causas/roque-2.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="found-one__content">
                                <h4 className="found-one__title"><Link href="https://link.mercadopago.com.ar/proyecto4patas">Roque</Link></h4>
                                <p className="found-one__text"> Necesita una cirugía plastica reconstructiva de la cabidad ocular a causa de un tumor </p>
                                <div className="found-one__goals">
                                    <div className="found-one__raised">
                                        <p>Acumulado</p>
                                        <span>$2.265.003</span>
                                    </div>
                                    <div className="found-one__raised">
                                        <p>Objetivo</p>
                                        <span>$3.020.000</span>
                                    </div>
                                </div>
                                <div className="found-one__progress">
                                    <div className="bar">
                                        <div className="bar-inner count-bar" data-percent="75%" style={{ width: '75%' }}>
                                        </div>
                                    </div>
                                </div>
                                <div className="found-one__btn-box">
                                    <Link href="https://link.mercadopago.com.ar/proyecto4patas" className="found-one__btn thm-btn">¡Doná Ahora!<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Found One Single End*/}
                </div>
            </div>
        </section>
        {/*Found One End */}
       
        </>
     )
}