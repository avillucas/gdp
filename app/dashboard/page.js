'use client'
import Layout from "@/components/layout/Layout"
export default function Dashboard() {
console.log("Dashboard page loaded");
    return (
        <>
            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Dashboard">
            {/*Dashboard Page Start*/}
            <section className="dashboard">
            </section>
            {/*Dashboard Page End*/}
            </Layout>
        </>
    )
}