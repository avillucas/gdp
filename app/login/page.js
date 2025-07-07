'use client'
import Layout from "@/components/layout/Layout"
import { ApiService } from "./api";
import { AuthContext } from '../../context/AuthContext.js';
import { useContext, useState } from "react";
import Link from "next/link";
export default function Home() {
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
                                <li className="tab-btn active-btn"><span>Ingresar</span></li>
                                <li className="tab-btn "><Link href="/register#register"><span>Registrarse</span></Link></li>
                            </ul>
                            <div className="tabs-content">
                                {/*tab*/}
                                <div className="tab active-tab" id="login">
                                    <div className="account__main-tab-inner">
                                        <form className="account__form" onSubmit={handleSubmit}>
                                            <div className="account__form-input-box">
                                                <input
                                                    id="inputEmail"
                                                    name="email"
                                                    required
                                                    autoFocus
                                                    type="email"
                                                    placeholder="Correo eléctronico"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    autoComplete="username"
                                                />
                                            </div>
                                            <div className="account__form-input-box">
                                                <input
                                                    type="password"
                                                    name="password"
                                                    id="inputPassword"
                                                    placeholder="Contraseña"
                                                    required
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    autoComplete="current-password"
                                                />
                                            </div>
                                            <div className="account__form-btn-box">
                                                <button type="submit" className="thm-btn account__form-btn"> <span></span>Ingresar Ahora</button>
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


