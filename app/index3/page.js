
import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home3/About"
import Banner from "@/components/sections/home3/Banner"
import Blog from "@/components/sections/home3/Blog"
import Testimonial from "@/components/sections/home3/Testimonial"
import Feature from "@/components/sections/home3/Feature"
import Team from "@/components/sections/home3/Team"
import Donate from "@/components/sections/home3/Donate"
import Cta from "@/components/sections/home3/Cta"
export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={3}>
                <Banner />
                <Feature />
                <About />
                <Donate />
                <Testimonial />
                <Team/>
                <Cta/>
                <Blog />
                
            </Layout>
        </>
    )
}