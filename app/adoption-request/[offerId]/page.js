
'use client'
import Layout from "@/components/layout/Layout"
import useScreenHooks from "./useScreenHooks";
import { useParams } from "next/navigation";
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
        adoptionRequests,
        isLoading,
        errors,
        handleSubmit
    } = useScreenHooks(offerId);
    return (
        <>
            <Layout headerStyle={1}  >
                {/*Volunteer Page Start*/}
                <section className="become-volinteer">
                    <div className="container">
                        {!isLoading && !errors && (
                            <div className="row">
                                <div className="col-xl-6 col-lg-5">
                                    <div className="become-volinteer__left">
                                        <div className="become-volinteer__img">
                                            <img src={offer.pet.phototUrl} alt={offer.pet.name} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-7">
                                    <div className="become-volinteer__right">
                                        <div className="section-title text-left sec-title-animation animation-style2">
                                            <div className="section-title__tagline-box">
                                                <span className="section-title__tagline">What we Do</span>
                                            </div>
                                            <h2 className="section-title__title title-animation">We Need Your Help</h2>
                                        </div>
                                        <p className="become-volinteer__text-1">There are many variations of passages of Lorem Ipsum
                                            available, but the
                                            majority have suffered alteration in some form, by injected humour, or ran
                                            domised words which don't look even slightly believable.</p>
                                        <p className="become-volinteer__text-2">Lorem ipsum dolor sit amet, consec tetur adipiscing
                                            elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                                            suspendisse ultrices gravida. Risus commodo viverra maecenas</p>
                                        <p className="become-volinteer__text-3">When you work with us, you deal directly with the
                                            marketing
                                            superstars who are capable of both providing strategic advice
                                            and executing the plan. It’s a model we’re really proud of and
                                            produces amazing results.</p>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className="become-volinteer__bottom">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6">
                                    <div className="become-volinteer__bottom-title-box">
                                        <h2 className="become-volinteer__bottom-left-title">Fill Form and Beacame
                                            Volonteer</h2>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <p className="become-volinteer__bottom-text">who are capable of both providing strategic advice
                                        and executing the plan. It’s a model we’re really proud of and
                                        produces amazing results.</p>
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
                                    </div>
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="become-volinteer__input-box text-message-box">
                                            <textarea required onChange={(e) => setApplication(e.target.value)} name="solicitud" placeholder="Contanos como es el lugar donde viviria y porque deberiamos elegirte">
                                                {application ?? ""}
                                            </textarea>
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="become-volinteer__btn-box">
                                            <button type="submit" className="thm-btn become-volinteer__btn">Solicitar<span><i className="icon-arrow-right"></i></span></button>
                                        </div>
                                    </div>
                                </form>
                                <div className="result"></div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Volunteer Page End*/}

            </Layout >
        </>
    )
}