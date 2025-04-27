import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()


    return (
        <>
            <ul className="main-menu__list">
             
                <li>
                    <Link href="about">Nosotros</Link>
                </li>
                <li>
                    <Link href="contact">Contacto</Link>
                </li>
            </ul>
        </>
    )
}
