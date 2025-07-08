import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
import { useContext, useState } from "react";
import { AuthContext } from '../../../context/AuthContext';

export default function Header1({ scroll, handlePopup, handleMobileMenu }) {
    const { authToken, logout, user } = useContext(AuthContext);
    const handleLogout = (e) => {
        logout(e);
         window.history.replaceState(null, '', "/login");
    };

    return (
        <>
            <header className="main-header">
                <div className="main-menu__top">
                    <div className="container">
                        <div className="main-menu__top-inner">
                            <ul className="list-unstyled main-menu__contact-list">
                                <li>
                                    <div className="icon">
                                        <i className="icon-envelope"></i>
                                    </div>
                                    <div className="text">
                                        <p><Link href="mailto:example@gamil.com">contacto@guardianesdepatitas.com</Link>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="icon-pin-two"></i>
                                    </div>
                                    <div className="text">
                                        <p>Calle falsa 132, Gerli</p>
                                    </div>
                                </li>
                            </ul>
                            {authToken ?
                                <div className="main-menu__top-right">
                                    <div className="main-menu__social-box">
                                        <p className="main-menu__social-title"> {user.name}</p>
                                        <div className="main-menu__social">
                                            <form onSubmit={handleLogout} className="d-inline">
                                                <button type="submit" className="logout-button">
                                                    Cerrar sesión
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div> :
                                <div className="main-menu__top-right">
                                    <div className="main-menu__login-box">
                                        <Link href="/login">Acceder</Link>
                                        <Link href="/Registrarse">Registrarse</Link>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>

                <nav className="main-menu">
                    <div className="main-menu__wrapper">
                        <div className="container">
                            <div className="main-menu__wrapper-inner">
                                <div className="main-menu__left">
                                    <div className="main-menu__logo">
                                        <Link href="/"><img src="/assets/images/resources/logo-1.png" alt="" /></Link>
                                    </div>
                                    <div className="main-menu__main-menu-box">
                                        <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                        <Menu />
                                    </div>
                                </div>
                                <div className="main-menu__right">
                                    <div className="main-menu__call">
                                        <div className="main-menu__call-icon">
                                            <i className="icon-call"></i>
                                        </div>
                                        <div className="main-menu__call-content">
                                            <p className="main-menu__call-sub-title">Contactanos</p>
                                            <h5 className="main-menu__call-number"><Link href="tel:+5491112345678">+54 911 1234 5678</Link></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            <div className={`stricky-header stricked-menu main-menu ${scroll ? "stricky-fixed" : ""}`}>
                <div className="sticky-header__content">
                    <nav className="main-menu">
                        <div className="main-menu__wrapper">
                            <div className="container">
                                <div className="main-menu__wrapper-inner">
                                    <div className="main-menu__left">
                                        <div className="main-menu__logo">
                                            <Link href="/"><img src="/assets/images/resources/logo-1.png" alt="" /></Link>
                                        </div>
                                        <div className="main-menu__main-menu-box">
                                            <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                            <Menu />
                                        </div>
                                    </div>
                                    <div className="main-menu__right">
                                        <div className="main-menu__call">
                                            <div className="main-menu__call-icon">
                                                <i className="icon-call"></i>
                                            </div>
                                            <div className="main-menu__call-content">
                                                <p className="main-menu__call-sub-title">Llamanos</p>
                                                <h5 className="main-menu__call-number"><Link href="tel:5491112345678">54 911 1234 5678</Link></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>{/*.sticky-header__content */}
            </div>{/*.stricky-header */}
            <MobileMenu handleMobileMenu={handleMobileMenu} />

        </>
    )
}
