'use client'
import Layout from "@/components/layout/Layout"
import useScreenHooks from "./useScreenHooks";

export default function Home() {

    const { email, password, setEmail, setPassword, handleSubmit } =
        useScreenHooks();
    return (
        <>
            <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="Cuenta">
                {/*Account Start*/}
                <section className="account">
                    <div className="container">
                        <div className="account__main-tab-box tabs-box">
                            <ul className="tab-buttons clearfix list-unstyled">
                                <li data-tab="#login" className="tab-btn active-btn"><span>Ingresar</span></li>
                                <li data-tab="#register" className="tab-btn "><span>Registrarse</span></li>
                            </ul>
                            <div className="tabs-content">
                                {/*tab*/}
                                <div className="tab" id="login">
                                    <div className="account__main-tab-inner">
                                        <form className="account__form">
                                            <div className="account__form-input-box">
                                                <input
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


