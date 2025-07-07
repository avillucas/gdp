'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import { ApiService } from "./api";
import { AuthContext } from '../../context/AuthContext.js';
import { useContext, useState } from "react";


export default function Home() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(AuthContext);

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await ApiService.login({ email, password });
            login(response.token, response.user);
            window.history.replaceState(null, '', "/dashboard");
        } catch (error) {
            console.error("Error on login:", error);
        }
    }
    return (
        <>
            <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="Cuenta">
                {/*Account Start*/}
                <section className="account">
                    <div className="container">
                        <div className="account__main-tab-box tabs-box">
                            <ul className="tab-buttons clearfix list-unstyled">
                                <li className="tab-btn "><Link href="/login#login"><span>Ingresar</span></Link></li>
                                <li className="tab-btn active-btn "><span>Registrarse</span></li>
                            </ul>
                            <div className="tabs-content">

                                {/*tab*/}
                                <div className="tab active-tab" id="register">
                                    <div className="account__main-tab-inner">
                                        <form className="account__form" onSubmit={handleSubmit}>
                                            <div className="account__form-input-box">
                                                <input
                                                    type="text"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    id="inputName"
                                                    placeholder="Nombre"
                                                    required
                                                />
                                            </div>
                                            <div className="account__form-input-box">
                                                <input
                                                    type="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    id="inputEmail"
                                                    placeholder="Email"
                                                    required
                                                />
                                            </div>
                                            <div className="account__form-input-box">
                                                <input
                                                    type="password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    id="inputPassword"
                                                    placeholder="Repetir Contraseña"
                                                    required
                                                />
                                            </div>
                                            <div className="account__form-btn-box">
                                                <button type="submit" className="thm-btn account__form-btn">Registrarse<span><i
                                                    className="icon-arrow-right"></i></span></button>
                                            </div>
                                            <div className="account__form-forgot-password">
                                                <Link href="/login#login">¿Ya tiene cuenta?</Link>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                {/*tab*/}
                            </div>
                        </div>
                    </div>
                </section>
                {/*Account End*/}

            </Layout>
        </>
    )
}


