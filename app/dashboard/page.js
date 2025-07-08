'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link";
export default function Dashboard() {
console.log("Dashboard page loaded");
    return (
        <>
            <Layout headerStyle={1} footerStyle={2} >
            {/*Dashboard Page Start*/}
            <section className="dashboard">
               
            </section>
            {/*Dashboard Page End*/}
            </Layout>
        </>
    )
}