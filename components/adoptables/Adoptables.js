'use client'
import Link from "next/link"
import { useEffect, useState } from "react";
import { ApiService } from "./api";
export default function Adoptables() {
    const [adoptionOffers, setAdoptionOffers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        const fetchAdoptionOffers = async () => {
            try {
                setIsLoading(true);
                const offers = await ApiService.getAdoptionOffers();
                setAdoptionOffers(offers);
                setErrors(null);
            } catch (error) {
                console.error("Error fetching adoption offers:", error);
                setErrors(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchAdoptionOffers();
    }, []);

    return (
        <>
            {/**Event One Start */}
            <section className="event-one">
                {isLoading && (
                    <div className="container">
                        <div className="text-center">
                            <p>Cargando mascotas...</p>
                        </div>
                    </div>
                )}

                {errors && (
                    <div className="container">
                        <div className="text-center">
                            <p>Error al cargar las mascotas: {errors}</p>
                        </div>
                    </div>
                )}

                {!isLoading && !errors && (
                    <div className="container">
                        <div className="section-title text-center sec-title-animation animation-style1">
                            <div className="section-title__tagline-box">
                                <span className="section-title__tagline">Rescatados</span>
                            </div>
                            <h2 className="section-title__title title-animation">Adoptá a una de nuestros  <br />amigos caninos</h2>
                        </div>
                        <div className="row">
                            {Array.isArray(adoptionOffers) && adoptionOffers.length === 0 ? (
                                <div className="col-12 text-center">
                                    <p>No hay mascotas disponibles para adopción en este momento.</p>
                                </div>
                            ) : (
                                Array.isArray(adoptionOffers) && adoptionOffers.map((offer) => (
                                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms" key={offer.id}>
                                        <div className="event-one__single">
                                            <div className="event-one__img-box">
                                                <div className="event-one__img">
                                                    <img src="assets/images/adopcion/beto-1.jpg" alt={offer.pet?.name || 'Mascota'} />
                                                </div>
                                                <div className="event-one__date">
                                                    <p>{offer.title}</p>
                                                </div>
                                            </div>
                                            <div className="event-one__content">
                                                <h4 className="event-one__title">
                                                    <Link href={`/adoption-request/${offer.id}`}>
                                                        {offer.pet?.name || 'Mascota sin nombre'}
                                                    </Link>
                                                </h4>
                                                <p className="event-one__text">{offer.description}</p>
                                                <div className="event-one__btn-box">
                                                    <Link href={`/adoption-request/${offer.id}`} className="event-one__btn thm-btn">
                                                        Adoptame<span><i className="icon-arrow-right"></i></span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                )}
            </section>
            {/**Event One End */}
        </>
    )
}
