import Link from "next/link"
export default function Causas() {
    return (
        <>
        {/*Found One Start */}
        <section className="found-one">
            <div className="found-one__bg">
                <div className="found-one__shape-1 float-bob-y">
                    <img src="assets/images/shapes/found-one-shape-1.png" alt=""/>
                </div>
            </div>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                  
                    <h2 className="section-title__title title-animation">Vos podes <br/> <span>Apadrinar</span> una mascota
                    </h2>
                </div>
                <div className="row">
                    {/*Found One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="found-one__single">
                            <div className="found-one__img-box">
                                <div className="found-one__img">
                                    <img src="assets/images/apadrinar/img_heridas-gatos-curar-art.jpg" alt=""/>
                                    <img src="assets/images/apadrinar/64f057a5fe4b3cbdb01f0a61_648b61a7a0caa6c18034f980_chatabces.webp" alt=""/>
                                </div>
                            </div>
                            <div className="found-one__content">
                                <h4 className="found-one__title"><Link href="donation-details">Rambo</Link></h4>
                                <p className="found-one__text">Es un Gato callejero que necesita tu ayuda para su tratamiento </p>
              
                                <div className="found-one__progress">
                                    <div className="bar">
                                        <div className="bar-inner count-bar" data-percent="75%" style={{ width: '75%' }}>
                                        </div>
                                    </div>
                                </div>
                                <div className="found-one__btn-box">
                                    <Link href="donation-details" className="found-one__btn thm-btn">¡¡Apadrinalo ahora!!<span><i
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
                                    <img src="assets/images/apadrinar/images.jpeg" alt=""/>
                                    <img src="assets/images/apadrinar/1972630.webp" alt=""/>
                                </div>
                            </div>
                            <div className="found-one__content">
                                <h4 className="found-one__title"><Link href="donation-details">Hetelviro</Link></h4>
                                <p className="found-one__text">Lo encontramos en la calle desnutrinutrido, necesita una operación </p>

                                <div className="found-one__progress">
                                    <div className="bar">
                                        <div className="bar-inner count-bar" data-percent="75%" style={{ width: '75%' }}>
                                        </div>
                                    </div>
                                </div>
                                <div className="found-one__btn-box">
                                    <Link href="donation-details" className="found-one__btn thm-btn">¡¡Apadrinalo ahora!!<span><i
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
                                    <img src="assets/images/apadrinar/adoptar-a-un-perro-es-un-verdadero-acto-de-amor-y-en-buenos-aires-hay-muchos-lugares-para-encontrarse-con-una-mascota-foto-pexels-helenawlt-WVPVLPMC7KBGMC3PLL55V42CAI.jpg" alt=""/>
                                    <img src="assets/images/apadrinar/por-que-adoptar-perros-es-mejor-que-comprar.webp" alt=""/>
                                </div>
                            </div>
                            <div className="found-one__content">
                                <h4 className="found-one__title"><Link href="donation-details">Champpion</Link></h4>
                                <p className="found-one__text">Champion es muy alegre y quiere precisa que lo cuides y vengas a visitar</p>
                  
                                <div className="found-one__btn-box">
                                    <Link href="donation-details" className="found-one__btn thm-btn">¡¡Apadrinalos ahora!!<span><i
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