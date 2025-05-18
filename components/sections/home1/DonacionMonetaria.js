'use client'
import Link from "next/link"
import { useState } from "react"

export default function DonacionaMonetaria() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index, url) => {
        setActiveIndex(index)
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    return (
        <>
            {/*Donation One Start */}
            <section className="donation-one" id="donaciones">
                <div className="donation-one__wrapper">
                    <div className="donation-one__left">
                        <div className="donation-one__content-box">
                            <div className="section-title-two text-left sec-title-animation animation-style2">
                                <div className="section-title-two__tagline-box">
                                    <span className="section-title-two__tagline">Doná vía </span>
                                </div>
                                <h2 className="section-title-two__title title-animation">Transferencia Bancaria</h2>
                            </div>
                            <div className="donate-amount wow fadeInUp" data-wow-delay=".5s">
                               <p>
                                    <strong>Banco Provincia</strong><br />
                                    <strong>Alias:</strong> PROYECTO-4-PATAS
                                    <strong>CBU:</strong> 0140059501500205063480 <br />
                                    <strong>Asociación Civil Guardianes de patitas</strong> <br />
                                    <strong>Cuenta Corriente en pesos</strong> Nº 50634/8<br />
                                    <strong>CUIT:</strong> 30-71080554-3
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="donation-one__right">
                        <div className="donation-one__content-box">
                            <div className="section-title-two text-left sec-title-animation animation-style2">
                                <div className="section-title-two__tagline-box">
                                    <span className="section-title-two__tagline">Doná vía </span>
                                </div>
                                <h2 className="section-title-two__title title-animation">Mercado Pago</h2>
                            </div>
                            <div className="donation-one__donate-box">
                                <div className="donate-amount wow fadeInUp" data-wow-delay=".5s">
                              <p>
                                    <button className={activeIndex == 1 ? "active amount-btn" : "amount-btn"} onClick={() => handleOnClick(1, 'https://mpago.la/2cyGLuR')}>$500</button>
                                    <button className={activeIndex == 2 ? "active amount-btn" : "amount-btn"} onClick={() => handleOnClick(2, 'https://mpago.la/2yVr2i8')}>$1000</button>
                                    <button className={activeIndex == 3 ? "active amount-btn" : "amount-btn"} onClick={() => handleOnClick(3, 'https://mpago.la/1ve9GJp')}>$2000</button>
                                    <button className={activeIndex == 4 ? "active amount-btn" : "amount-btn"} onClick={() => handleOnClick(4, 'https://mpago.la/2EhY261')}>$5000</button>
                         <br /> 
                                    <button className={activeIndex == 5 ? "active amount-btn" : "amount-btn"} onClick={() => handleOnClick(5, 'https://mpago.la/proyecto4patas')}>Elegí el monto</button>
                                    <button className={activeIndex == 6 ? "active amount-btn" : "amount-btn"} onClick={() => handleOnClick(6, 'https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=820e1c345f0e4fb9aeee09d1287b5251')}>Dona mensualmente</button>
                                    <button className={activeIndex == 7 ? "active amount-btn" : "amount-btn"} onClick={() => handleOnClick(7, 'https://mpago.la/15bcFVu')}>Dona castración</button>
                               </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            {/*Donation One End */}
        </>
    )
}
