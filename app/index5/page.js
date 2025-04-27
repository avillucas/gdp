
import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home5/Banner"
import Blog from "@/components/sections/home5/Blog"
import Cta from "@/components/sections/home5/Cta"
import Mission from "@/components/sections/home5/Mission"
import Donation from "@/components/sections/home5/Donation"
import Who from "@/components/sections/home5/Who"
import Country from "@/components/sections/home5/Country"
export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={3}>
                <Banner />
                <Cta />
                <Mission />
                <Donation />
                <Who />
                <Blog />
                <Country />
            </Layout>
        </>
    )
}