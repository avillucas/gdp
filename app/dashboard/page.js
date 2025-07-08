'use client'
import Layout from "@/components/layout/Layout"
export default function Dashboard() {
    return (
        <>
            <Layout headerStyle={1}  >
                {/*Dashboard Page Start*/}
                <section className="dashboard">
                    <div className="container">
                        <div className="row">
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                <h1 className="h2">¡¡Bienvenido al administrador!!</h1>

                            </div>

                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="dashboard__content-box">
                                    <p>Desde aquí podrás gestionar todas las funcionalidades de la aplicación.</p>
                                    <p>Utiliza el menú superior para navegar entre las diferentes secciones.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Dashboard Page End*/}
            </Layout>
        </>
    )
}