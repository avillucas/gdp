import Link from "next/link"
import { useContext } from "react";
import { AuthContext } from '../../context/AuthContext';

export default function Menu() {
    // const router = useRouter()
    const { authToken, logout, user, abilities } = useContext(AuthContext);
    return (
        <>
            {authToken ?
                abilities == 'admin' ? (
                    <ul className="main-menu__list">
                        <li> <Link href="dashboard">Portada</Link></li>
                        <li> <Link href="/pets">Mascotas</Link></li>
                        <li> <Link href="/adoption-requests">Evaluar Solicitudes </Link></li>
                        <li> <Link href="/adoption-offer">Ofertas de adopción </Link></li>
                    </ul>) : (
                    <ul className="main-menu__list">
                        <li> <Link href="/dashboard">Portada</Link></li>
                        <li> <Link href="/mi-adoption-requests">Solicitudes adopción</Link></li>
                    </ul>) :
                <></>
            }
        </>
    )
}
