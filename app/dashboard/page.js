'use client'
import Layout from "@/components/layout/Layout"
export default function Dashboard() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={2} >
                {/*Dashboard Page Start*/}
                <section className="dashboard">
                    <h1> Bienvenido al administrador!!</h1>
                </section>
                {/*Dashboard Page End*/}
            </Layout>
        </>
    )
}