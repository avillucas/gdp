'use client'
import Link from "next/link"
import { useState } from "react"

export default function DonacionaMonetaria() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
        {/*Donation One Start */}
        <section className="donation-one" id="donaciones">
            <div className="donation-one__wrapper">
                <div className="donation-one__left">
                    <div className="donation-one__left-bg"
                        style={{ backgroundImage: ' url(assets/images/backgrounds/donation-one-left-bg.jpg)' }} ></div>
                </div>
                <div className="donation-one__right">
                    <div className="donation-one__content-box">
                        <div className="section-title-two text-left sec-title-animation animation-style2">
                            <div className="section-title-two__tagline-box">
                                <span className="section-title-two__tagline">Doná con Mercado Pago</span>
                            </div>
                            <h2 className="section-title-two__title title-animation">Tu ayuda es importante <br/> para ellos</h2>
                        </div>
                        <div className="donation-one__donate-box">
                            <div className="donate-amount wow fadeInUp" data-wow-delay=".5s">
                                <button className={activeIndex == 1 ? "active amount-btn" : "amount-btn"} onClick={() => handleOnClick(1)}>$500</button>
                                <button className={activeIndex == 2 ? "active amount-btn" : "amount-btn"} onClick={() => handleOnClick(2)}>$1000</button>
                                <button className={activeIndex == 3 ? "active amount-btn" : "amount-btn"} onClick={() => handleOnClick(3)}>$2000</button>
                                <button className={activeIndex == 4 ? "active amount-btn" : "amount-btn"} onClick={() => handleOnClick(4)}>$5000</button>
                                <button className={activeIndex == 5 ? "active amount-btn" : "amount-btn"} onClick={() => handleOnClick(5)}>Elegí el monto</button>
                                <button className={activeIndex == 6 ? "active amount-btn" : "amount-btn"} onClick={() => handleOnClick(6)}>Dona mensualmente</button>
                                <button className={activeIndex == 7 ? "active amount-btn" : "amount-btn"} onClick={() => handleOnClick(7)}>Dona castración</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Donation One End */}
        </>
    )
}
