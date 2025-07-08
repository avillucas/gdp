'use client'
import Layout from "@/components/layout/Layout"
import Adoptables from "@/components/sections/home1/Adoptables"
import { useContext } from "react";
import { AuthContext } from '../../context/AuthContext';
export default function Dashboard() {
    const { abilities } = useContext(AuthContext);
    const isAdmin = (abilities && abilities[0] && abilities[0] == 'admin');
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
                        {isAdmin ?
                        <div className="row">
                            <div className="col-md-12">
                                <div className="dashboard__content-box">
                                    <p>Desde aquí podrás gestionar todas las funcionalidades de la aplicación.</p>
                                    <p>Utiliza el menú superior para navegar entre las diferentes secciones.</p>
                                </div>
                            </div>
                        </div>
                        :
                        <div className="row">
                            <div className="col-md-12">
                                <Adoptables />
                            </div>
                        </div>}
                    </div>
                </section>
                {/*Dashboard Page End*/}
            </Layout>
        </>
    )
}