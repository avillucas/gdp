'use client'
import Link from "next/link"
import { useEffect, useState } from "react";
import { ApiService } from "./api";
export default function Adoptables() {
    const [adoptionOffers, setAdoptionOffers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errors, setErrors] = useState(null);
  const fetchAdoptionOffers = async () => {
            try {
                setIsLoading(true);
                const offers = await ApiService.getAdoptionOffers();
                console.log(offers);
                setAdoptionOffers(offers.data);
                setErrors(null);
            } catch (error) {
                console.error("Error fetching adoption offers:", error);
                setErrors(error.message);
            } finally {
                setIsLoading(false);
            }
        };
    useEffect(() => {
      

        fetchAdoptionOffers();
    }, []);

    return (
        <>
            {/**Event One Start */}

            {!isLoading && !errors && Array.isArray(adoptionOffers) && adoptionOffers.length !== 0 && (
                <section className="event-one">
                    <div className="container">
                        <div className="section-title text-center sec-title-animation animation-style1">
                            <div className="section-title__tagline-box">
                                <span className="section-title__tagline">Rescatados</span>
                            </div>
                            <h2 className="section-title__title title-animation">Adoptá a una de nuestros  <br />amigos caninos</h2>
                        </div>
                        <div className="row">
                            {adoptionOffers.map((offer) => (
                                <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms" key={offer.id}>
                                    <div className="event-one__single">
                                        <div className="event-one__img-box">
                                            <div className="event-one__img">
                                                <img src={offer.pet?.photo_url || 'assets/images/adopcion/beto-1.jpg'} alt={offer.pet?.name || 'Mascota'} />
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
                                            <p className="event-one__text">{offer.headline}</p>
                                            <div className="event-one__btn-box">
                                                <Link href={`/adoption-request/${offer.id}`} className="event-one__btn thm-btn">
                                                    Adoptame<span><i className="icon-arrow-right"></i></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/**Event One End */}
        </>
    )
}
