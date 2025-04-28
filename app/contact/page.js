
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
        <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Contacto">
        {/*Contact One Start*/}
        <section className="contact-one">
            <div className="container">
                <div className="contact-one__inner">
                    <div className="section-title text-left sec-title-animation animation-style2">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline">Contactanos</span>
                        </div>
                        <h2 className="section-title__title title-animation">Envianos tus dudas o donaciones 
                        </h2>
                    </div>
                    <form className="contact-form-validated contact-one__form"
                        method="post" >
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                                <h4 className="contact-one__input-title">Nombre</h4>
                                <div className="contact-one__input-box">
                                    <div className="contact-one__input-icon">
                                        <span className="icon-user"></span>
                                    </div>
                                    <input type="text" name="name" placeholder="Name" required=""/>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <h4 className="contact-one__input-title">Correo electrónico</h4>
                                <div className="contact-one__input-box">
                                    <div className="contact-one__input-icon">
                                        <span className="icon-pin"></span>
                                    </div>
                                    <input type="email" name="email" placeholder="Email Address" required=""/>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <h4 className="contact-one__input-title">Telefono</h4>
                                <div className="contact-one__input-box">
                                    <div className="contact-one__input-icon">
                                        <span className="icon-call"></span>
                                    </div>
                                    <input type="text" name="Phone" placeholder="your phone..." required=""/>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <h4 className="contact-one__input-title">Mensaje</h4>
                                <div className="contact-one__input-box text-message-box">
                                    <div className="contact-one__input-icon">
                                        <span className="icon-envelope"></span>
                                    </div>
                                    <textarea name="message" placeholder="Escribinos tu mensaje.."></textarea>
                                </div>
                                <div className="contact-one__btn-box">
                                    <button type="submit" className="thm-btn contact-one__btn">Enviar<span><i
                                                className="icon-arrow-right"></i></span></button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="result"></div>
                </div>
            </div>
        </section>
        {/*Contact One End*/}

        {/*Contact Two Start*/}
        <section className="contact-two">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="contact-two__left">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
                                className="contact-two__google-map"></iframe>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="contact-two__right">
                            <ul className="contact-two__contact-list list-unstyled">
                                <li>
                                    <div className="icon">
                                        <span className="icon-pin-two"></span>
                                    </div>
                                    <div className="content">
                                        <h4>Dirección</h4>
                                        <p>Calle falsa 123, Gerli</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-envelope"></span>
                                    </div>
                                    <div className="content">
                                        <h4>Correo electrónico</h4>
                                        <p><Link href="mailto:contacto@guardianesdepatitas.com">contacto@guardianesdepatitas.com</Link></p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-call"></span>
                                    </div>
                                    <div className="content">
                                        <h4>Teléfono</h4>
                                        <p><Link href="tel:+5491112345678">+54 911 1234 5678</Link></p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Contact Two End*/}

        </Layout>
        </>
    )
}