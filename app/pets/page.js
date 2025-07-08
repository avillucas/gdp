'use client'
import Layout from "@/components/layout/Layout"
import useScreenHooks from "./useScreenHooks";
export default function Home() {
  const {
    pets,
    isLoading,
    errors,
    handleDelete,
    handleCreate,
    handleDetail,
    handleEdit,
  } = useScreenHooks();

  return (
    <>
      <Layout headerStyle={2} footerStyle={2} >
        {/*Account Start*/}
        <section >
          {!isLoading && !errors && (
            <div className="container">
              <div className="row">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                  <h1 className="h2">Mascotas</h1>
                  <div className="btn-toolbar mb-2 mb-md-0">
                    <button
                      onClick={(e) => {
                        handleCreate(e);
                      }}
                      type="button"
                      className="thm-btn become-volinteer__btn"
                    >
                      Agregar mascota
                    </button>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table table-striped table-sm">
                    <thead>
                      <tr>
                        <th>Nombre</th>
                        <th>Edad</th>
                        <th>Tipo</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.isArray(pets) && pets.length === 0 ? (
                        <tr>
                          <td colSpan={4}>No hay mascotas disponibles.</td>
                        </tr>
                      ) : Array.isArray(pets) ? (
                        pets.map((pet) => (
                          <tr key={pet.id}>
                            <td>{pet.name}</td>
                            <td>{pet.age}</td>
                            <td>{pet.type}</td>
                            <td>
                              <button
                                className="thm-btn become-volinteer__btn"
                                onClick={(e) => {
                                  handleEdit(e, pet.id);
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
                          <td colSpan={4}>No hay mascotas disponibles.</td>
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


