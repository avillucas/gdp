'use client'
import Layout from "@/components/layout/Layout"
import useScreenHooks from "./useScreenHooks";
export default function Home() {
  const {
    offers,
    isLoading,
    errors,
    handdlePublish,
    handleDraft,
    handleEdit,
    handleDelete,
    handleCreate,
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
                  <h1 className="h2">Ofertas de adopcion</h1>
                  <div className="btn-toolbar mb-2 mb-md-0">
                    <button
                      onClick={(e) => {
                        handleCreate(e);
                      }}
                      type="button"
                      className="thm-btn become-volinteer__btn"
                    >
                      Agregar oferta
                    </button>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table table-striped table-sm">
                    <thead>
                      <tr>
                        <th>Mascota</th>
                        <th>Titulo</th>
                        <th>Bajada</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.isArray(offers) && offers.length === 0 ? (
                        <tr>
                          <td colSpan={5}>No hay ofertas disponibles.</td>
                        </tr>
                      ) : Array.isArray(offers) ? (
                        offers.map((offer) => (
                          <tr key={offer.id}>
                            <td>{offer.pet.name}</td>
                            <td>{offer.title}</td>
                            <td>{offer.headline}</td>
                            <td>{offer.status}</td>
                            <td>
                              {offer.status === 'draft' ? (
                                <button
                                  className="thm-btn become-volinteer__btn"
                                  onClick={(e) => {
                                    handdlePublish(e, offer.id);
                                  }}
                                >
                                  Publicar
                                </button>
                              ) : (
                                <button
                                  className="thm-btn become-volinteer__btn"
                                  onClick={(e) => {
                                    handleDraft(e, offer.id);
                                  }}
                                >
                                  Borrador
                                </button>
                              )}
                              <button
                                className="thm-btn become-volinteer__btn"
                                onClick={(e) => {
                                  handleEdit(e, offer.id);
                                }}
                              >
                                Editar
                              </button>
                              <button
                                className="thm-btn become-volinteer__btn"
                                onClick={(e) => {
                                  handleDelete(e, pet.id);
                                }}
                              >
                                Borrar
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={5}>No hay ofertas  disponibles.</td>
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


