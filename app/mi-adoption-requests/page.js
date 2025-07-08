
'use client'
import Layout from "@/components/layout/Layout"
import useScreenHooks from "./useScreenHooks";
export default function Home() {
    const petId = useParams().petId;
    const {
        formRef,
        adoptionRequests,
        isLoading,
        errors,
        handleSubmit
    } = useScreenHooks(petId);
    return (
        <>
            <Layout headerStyle={1}  >
                {/*Volunteer Page Start*/}
                <section className="become-volinteer">
                    <div className="container">
                        {!isLoading && !errors && (
                            <div className="row">
                                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                    <h1 className="h2">Mis solicitudes de adopción</h1>
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-striped table-sm">
                                        <thead>
                                            <tr>
                                                <th>Mascota</th>
                                                <th>Estado</th>
                                                <th>fecha solicitud</th>
                                                <th>Motivo</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Array.isArray(adoptionRequests) && adoptionRequests.length === 0 ? (
                                                <tr>
                                                    <td colSpan={4}>No hay solicitudes realizadas.</td>
                                                </tr>
                                            ) : Array.isArray(adoptionRequests) ? (
                                                adoptionRequests.map((adoptionRequest) => (
                                                    <tr key={adoptionRequest.id}>
                                                        <td>{adoptionRequest.pet.name}</td>
                                                        <td>{adoptionRequest.status}</td>
                                                        <td>{adoptionRequest.createdAt}</td>
                                                        <td>{adoptionRequest.reason}</td>
                                                        <td>
                                                            <button
                                                                className="thm-btn become-volinteer__btn"
                                                                onClick={(e) => {
                                                                    handleApprove(e, adoptionRequest.id);
                                                                }}
                                                            >
                                                                Aprobar
                                                            </button>
                                                            <button
                                                                className="thm-btn become-volinteer__btn"
                                                                onClick={(e) => {
                                                                    handleReject(e, adoptionRequest.pet.id);
                                                                }}
                                                            >
                                                                Rechazar
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan={5}>No hay solicitudes de adopción realizadas.</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                    </div>
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
                                <input type="hidden" name="petId" value={petId} />
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
                </div >
            </section >
            {/*Volunteer Page End*/}
        </Layout >
        </>
    )
}