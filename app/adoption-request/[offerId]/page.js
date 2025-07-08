
'use client'
import Layout from "@/components/layout/Layout"
import useScreenHooks from "./useScreenHooks";
import { useParams } from "next/navigation";
import Link from "next/link";
export default function Home() {
    const offerId = useParams().offerId;
    const {
        formRef,
        offer,
        address,
        setAddress,
        phone,
        setPhone,
        application,
        setApplication,
        isLoading,
        errors,
        handleSubmit
    } = useScreenHooks(offerId);
    return (
        <>
            <Layout headerStyle={1}  >
                {/*Volunteer Page Start*/}
                <section className="become-volinteer">
                    {!isLoading && !errors && offer && (
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-5">
                                    <div className="become-volinteer__left">
                                        <div className="become-volinteer__img">
                                            <img src={offer.pet.photo_url} alt={offer.pet.name} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-7">
                                    <div className="become-volinteer__right">
                                        <div className="section-title text-left sec-title-animation animation-style2">
                                            <div className="section-title__tagline-box">
                                                <span className="section-title__tagline">{offer.pet.name}</span>
                                            </div>
                                            <h2 className="section-title__title title-animation">{offer.title}</h2>
                                        </div>
                                        <p className="become-volinteer__text-1">{offer.headline}</p>
                                        <p className="become-volinteer__text-2">
                                            Tamaño: {offer.pet.size}<br />
                                            Tipo: {offer.pet.type}<br />
                                            Edad: {offer.pet.age} meses <br />
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="become-volinteer__bottom">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="become-volinteer__bottom-title-box">
                                            <h2 className="become-volinteer__bottom-left-title">Adopta a {offer.pet.name}</h2>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6">
                                        <p className="become-volinteer__bottom-text">Completa  el formulario para solicitar la adopción. GDP evaluará tu solicitud y verás reflejado el estado en <Link href="my-adoption-request">Solicitudes de adopcion</Link>.</p>
                                    </div>
                                </div>
                                <div className="become-volinteer__bottom-left">
                                    <form className="contact-form-validated become-volinteer__form"
                                        method="post" ref={formRef} onSubmit={handleSubmit}  >
                                        <input type="hidden" name="petId" value={offer.pet.id} />
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6">
                                                <div className="col-xl-12">
                                                    <div className="become-volinteer__input-box">
                                                        <input
                                                            type="text"
                                                            name="direccion"
                                                            placeholder="Dirección"
                                                            className="form-control"
                                                            id="direccion"
                                                            value={address ?? ""}
                                                            onChange={(e) => setAddress(e.target.value)}
                                                            required="" />

                                                    </div>
                                                </div>
                                                <div className="col-xl-12">
                                                    <div className="become-volinteer__input-box">
                                                        <input
                                                            type="text"
                                                            name="telefono"
                                                            placeholder="Teléfono"
                                                            className="form-control"
                                                            id="telefono"
                                                            value={phone ?? ""}
                                                            onChange={(e) => setPhone(e.target.value)}
                                                            required="" />

                                                    </div>

                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6">
                                                <div className="become-volinteer__input-box text-message-box">
                                                    <textarea defaultValue={application ?? ""} required onChange={(e) => setApplication(e.target.value)} name="solicitud" placeholder="Contanos como es el lugar donde viviria y porque deberiamos elegirte">
                                                    </textarea>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="become-volinteer__btn-box">
                                                    <button type="submit" className="thm-btn become-volinteer__btn">Solicitar<span><i className="icon-arrow-right"></i></span></button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="result"></div>
                                </div>
                            </div>
                        </div>)}
                </section>
                {/*Volunteer Page End*/}

            </Layout >
        </>
    )
}