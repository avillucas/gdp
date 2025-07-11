
'use client'
import Layout from "@/components/layout/Layout"
import useScreenHooks from "./useScreenHooks";
export default function Home() {
    const {
        formRef,
        adoptionRequests,
        isLoading,
        errors,
        handleSubmit
    } = useScreenHooks();
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
                                                <th>Fecha Actualización</th>
                                                <th>Información</th>
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
                                                        <td>{adoptionRequest.updated_at.substring(0, 10)}</td>
                                                        {adoptionRequest.status == 'approved' ? <td><span>Un administrador contactara por telefono para coordinar el retiro </span></td> : ''}
                                                        {adoptionRequest.status == 'rejected' ? (adoptionRequest.reject_reason ?<td><span>Motivo de rechazo: {adoptionRequest.reject_reason}</span></td> :<td><span>No se proporcionó un motivo de rechazo</span></td>) : ''}
                                                        {adoptionRequest.status == 'pending' ? <td><span>Esta siendo revisada por un administrador</span></td> : ''}
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
                </section >
                {/*Volunteer Page End*/}
            </Layout >
        </>
    )
}