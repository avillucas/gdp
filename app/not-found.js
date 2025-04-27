import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Error404() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Página no encontrada">
            <section className="error-page">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="error-page__inner">
                                <div className="error-page__title-box">
                                    <h2 className="error-page__title">404</h2>
                                </div>
                                <h3 className="error-page__tagline">Perdón, ¸no encontramos esta pagina</h3>
                                <p className="error-page__text">La página que busca no existe.</p>
                                <Link href="/" className="thm-btn error-page__btn">Volver a la portada<span><i
                                            className="icon-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </Layout>
        </>
    )
}
