import Link from "next/link"
import { useContext } from "react";
import { AuthContext } from '../../context/AuthContext';

export default function Menu() {
    // const router = useRouter()
    const { authToken, logout, user } = useContext(AuthContext);
    return (
        <>
            {authToken ?
                <ul className="main-menu__list"> 
                   <li> <Link href="dashboard">Portada</Link></li>
                   <li> <Link href="pets">Mascotas</Link></li>
                   <li> <Link href="adoption-requests">Solicitudes</Link></li>
                </ul> :
                <ul className="main-menu__list"></ul>
                }
        </>
    )
}
