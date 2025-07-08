import Layout from "@/components/layout/Layout"
import Novedades from "@/components/sections/home1/Novedades"
import Buscados from "@/components/sections/home1/Buscados"
import Adoptables from "@/components/adoptables/Adoptables"
import Causas from "@/components/sections/home1/Causas"
import DonacionMaterial from "@/components/sections/home1/DonacionMaterial"
import DonacionaMonetaria from "@/components/sections/home1/DonacionMonetaria"

export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Novedades />
                <Buscados />
                <DonacionMaterial />
                <Causas/>
                <DonacionaMonetaria />
                <Adoptables/>
            </Layout>

        </>
    )
}