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
                    <Link href="pets">Mascotas</Link>
                </ul> :
                <ul className="main-menu__list"></ul>
                }
        </>
    )
}
