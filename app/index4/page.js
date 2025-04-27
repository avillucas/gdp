
import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home4/About"
import Banner from "@/components/sections/home4/Banner"
import Blog from "@/components/sections/home4/Blog"
import Slogan from "@/components/sections/home4/Slogan"
import Mission from "@/components/sections/home4/Mission"
import Donation from "@/components/sections/home4/Donation"
import Who from "@/components/sections/home4/Who"
import Country from "@/components/sections/home4/Country"
export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={3}>
                <Banner />
                <About />
                <Slogan />
                <Mission />
                <Donation />
                <Who />
                <Blog />
                <Country />
            </Layout>
        </>
    )
}