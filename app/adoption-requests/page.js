'use client'
import Layout from "@/components/layout/Layout"
import useScreenHooks from "./useScreenHooks";
export default function Home() {
  const {
    adoptionRequests,
    isLoading,
    errors,
    handleReject,
    handleApprove
  } = useScreenHooks();

  return (
    <>
      <Layout headerStyle={2}  >
        {/*Account Start*/}
        <section >
          {!isLoading && !errors && (
            <div className="container">
              <div className="row">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                  <h1 className="h2">Solicitudes de adopción</h1>
                </div>
                <div className="table-responsive">
                  <table className="table table-striped table-sm">
                    <thead>
                      <tr>
                        <th>Mascota</th>
                        <th>Usuario</th>
                        <th>Estado</th>
                        <th>Fecha actualización</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.isArray(adoptionRequests) && adoptionRequests.length === 0 ? (
                        <tr>
                          <td colSpan={4}>No hay solicitudes disponibles.</td>
                        </tr>
                      ) : Array.isArray(adoptionRequests) ? (
                        adoptionRequests.map((adoptionRequest) => (
                          <tr key={adoptionRequest.id}>
                            <td>{adoptionRequest.pet.name}</td>
                            <td>{adoptionRequest.user.name}</td>
                            <td>{adoptionRequest.status}</td>
                            <td>{adoptionRequest.updated_at.substring(0, 10)}</td>
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
                                  handleReject(e, adoptionRequest.id);
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
            </div>
          )}
        </section>
        {/*Account End*/}

      </Layout>
    </>
  )
}


