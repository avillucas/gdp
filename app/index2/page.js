
import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home2/About"
import Banner from "@/components/sections/home2/Banner"
import Blog from "@/components/sections/home2/Blog"
import Services from "@/components/sections/home2/Services"
import Feature from "@/components/sections/home2/Feature"
import Donate from "@/components/sections/home2/Donate"
import Counter from "@/components/elements/Counter"
import Donation from "@/components/sections/home2/Donation"
import Video from "@/components/sections/home2/Video"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={2}>
                <Banner />
                <About />
                <Feature />
                <Donate />
                <Donation />
                <Services />
                <Video />
                <About />
                <Blog />
            </Layout>
        </>
    )
}