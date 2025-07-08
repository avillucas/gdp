import Link from "next/link"

export default function Footer1() {
    return (
        <>
           
           <footer className="site-footer">
            <div className="site-footer__top">
                <div className="container">
                    <div className="site-footer__top-inner">
                        <div className="row justify-content-between">
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                <div className="footer-widget__about">
                                    <div className="footer-widget__about-logo">
                                        <Link href="/"><img src="/assets/images/resources/logo-2.png" alt=""/></Link>
                                    </div>
                                    <p className="footer-widget__about-text">Rescatamos vidas, construimos hogares</p>
                                    <div className="site-footer__social">
                                        <Link href="#"><i className="icon-facebook"></i></Link>
                                        <Link href="#"><i className="icon-twitter"></i></Link>
                                        <Link href="#"><i className="icon-instagram"></i></Link>
                                        <Link href="#"><i className="icon-pintarest"></i></Link>
                                    </div>
                                </div>
                            </div>
                          
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                                <div className="footer-widget__contact">
                                    <h3 className="footer-widget__title">Información de contacto</h3>
                                    <ul className="footer-widget__contact-list list-unstyled">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-call"></span>
                                            </div>
                                            <p><Link href="tel:+541191112345678">+54 911 1234 5678</Link></p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-envelope"></span>
                                            </div>
                                            <p><Link href="mailto:contacto@guardianesdepatitas.com<">contacto@guardianesdepatitas.com</Link></p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-pin"></span>
                                            </div>
                                            <p>Calle falsa 123<br/> Gerli, Buenos aires</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </footer>
        
        </>
    )
}
