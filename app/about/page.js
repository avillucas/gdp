'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"


export default function Home() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="Nosotros">



                {/*Donate One Start */}
                <section className="donate-one">
                    <div className="container">
                        <div className="row">
                            <h2 className="section-title__title title-animation"> Quienes Somos</h2>
                            <p> Nuestra organización está dedicada al rescate, rehabilitación y reubicación de perros y gatos en situación de abandono. Con un equipo apasionado de voluntarios y profesionales, nos esforzamos por brindar una segunda oportunidad a estos animales que han sufrido maltrato o negligencia. A través de programas de atención médica, alimentación adecuada y un entorno seguro en nuestra guardería, trabajamos para restaurar la salud y el bienestar de cada animal que llega a nosotros.</p>
                            <p>Además de rescatar, promovemos la adopción responsable, asegurando que cada animal encuentre un hogar amoroso y adecuado. Mantenemos un contacto continuo con los adoptantes, brindándoles apoyo y orientación a lo largo de la vida del animal. Nuestra misión es crear un cambio positivo en la comunidad, educando sobre el bienestar animal y fomentando la adopción, mientras trabajamos incansablemente para salvar vidas y empoderar a los animales que más lo necesitan.</p>
                        </div>
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                                <div className="donate-one__single">
                                    <div className="donate-one__single-bg"
                                        style={{ backgroundImage: ' url(assets/images/backgrounds/donate-one-single-bg.jpg)' }} >
                                    </div>
                                    <h3 className="donate-one__title">Alimentos</h3>
                                    <p className="donate-one__text">
                                        Ayudanos donando alimentos para animales.Aceptamos arroz partido, alimento balanceado para perros y gatos.
                                    </p>
                                    <div className="donate-one__btn-box">
                                        <Link href="contact" className="donate-one__btn thm-btn">Contactanos<span><i className="icon-arrow-right"></i></span></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
                                <div className="donate-one__single donate-one__single-2">
                                    <div className="donate-one__single-bg"
                                        style={{ backgroundImage: ' url(assets/images/backgrounds/donate-one-single-bg-two.jpg)' }} >
                                    </div>
                                    <h3 className="donate-one__title">Ropa de abrigo</h3>
                                    <p className="donate-one__text">
                                        Aceptamos ropa de abrigo, telas, abrigos de cama, cuchas o cualquier material que pueda brindarle comodidad a nuestras mascotas.
                                    </p>
                                    <div className="donate-one__btn-box">
                                        <Link href="contact" className="donate-one__btn thm-btn">Contactanos<span><i className="icon-arrow-right"></i></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <h2 className="section-title__title title-animation"> Ayudanos donando</h2>
                        </div>
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                                <div className="donate-one__single">
                                    <div className="donate-one__single-bg"
                                        style={{ backgroundImage: ' url(assets/images/backgrounds/donate-one-single-bg.jpg)' }} >
                                    </div>
                                    <h3 className="donate-one__title">Accesorios para mascotas</h3>
                                    <p className="donate-one__text">
                                        Collares, pecheras, juguetes, correas, mantas, cuchas, comederos y bebederos.
                                    </p>
                                    <div className="donate-one__btn-box">
                                        <Link href="contact" className="donate-one__btn thm-btn">Contactanos<span><i className="icon-arrow-right"></i></span></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
                                <div className="donate-one__single donate-one__single-2">
                                    <div className="donate-one__single-bg"
                                        style={{ backgroundImage: ' url(assets/images/backgrounds/donate-one-single-bg-two.jpg)' }} >
                                    </div>
                                    <h3 className="donate-one__title">Medicamentos</h3>
                                    <p className="donate-one__text">
                                        Medicamentos, antiparasitarios, vitaminas, productos de limpieza y desinfección.
                                        <br />Algunos medicamentos de uso humano nos pueden servir para nuestras mascotas.

                                    </p>
                                    <div className="donate-one__btn-box">
                                        <Link href="contact" className="donate-one__btn thm-btn">Contactanos<span><i className="icon-arrow-right"></i></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Donate One End */}



            </Layout>
        </>
    )
}


