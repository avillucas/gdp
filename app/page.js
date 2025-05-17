import Layout from "@/components/layout/Layout"
import Novedades from "@/components/sections/home1/Novedades"
import Buscados from "@/components/sections/home1/Buscados"
import DonacionesMonetarias from "@/components/sections/home1/DonacionesMonetarias"
import Adoptables from "@/components/sections/home1/Adoptables"
import Causas from "@/components/sections/home1/Causas"
import DonacionMaterial from "@/components/sections/home1/DonacionMaterial"

export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Novedades />
                <Buscados />
                <DonacionMaterial />
                <Causas/>
                <DonacionesMonetarias />
                <Adoptables/>
            </Layout>

        </>
    )
}