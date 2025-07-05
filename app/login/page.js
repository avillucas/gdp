'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"


export default function Home() {
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
                                        <input type="text" placeholder="Usuario" /> 
                                    </div>
                                    <div className="account__form-input-box">
                                        <input type="password" placeholder="Contraseña"/>
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


