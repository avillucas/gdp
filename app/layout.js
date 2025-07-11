'use client'
import "@/node_modules/react-modal-video/css/modal-video.css"
import "public/assets/css/style.css"
import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { dmSans, libreBaskerville } from '@/lib/font'
import { AuthProvider } from '../context/AuthContext';
import { SpinnerProvider } from '../context/SpinnerContext';
export const metadata = {
    title: 'Guardines de Patitas',
    description: 'Rescatamos vidas, construimos hogares',
}

export default function RootLayout({ children }) {
    return (
        <html lang="es" className={` ${libreBaskerville.variable}`}>
            <body>
                <AuthProvider>
                    <SpinnerProvider>
                        {children}
                    </SpinnerProvider>
                </AuthProvider>
            </body>
        </html>
    )
}
