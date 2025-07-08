'use client'
import Layout from "@/components/layout/Layout"
import useScreenHooks from "./useScreenHooks";
import Link from "next/link";
export default function Home() {

  const {
    errors,
    formRef,
    titulo,
    setTitulo,
    bajada,
    mascotaId,
    setMascotaId,
    isLoading,
    show,
    hide,
    setBajada,
    handleSubmit,
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
                  <h1 className="h2">Agregar Oferta de adopción</h1>
                  <div className="btn-toolbar mb-2 mb-md-0">
                    <Link
                      href="/pets"
                      className="thm-btn become-volinteer__btn"
                    >
                      Volver al listado
                    </Link>
                  </div>
                </div>
              </div>
              <div className="become-volinteer__bottom">
                <div className="become-volinteer__bottom-left"></div>
                <form ref={formRef} onSubmit={handleSubmit} className="contact-form-validated become-volinteer__form" >
                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <div className="col-xl-12">
                        <div className="become-volinteer__input-box">
                          <input
                            type="text"
                            name="name"
                            placeholder="Titulo"
                            className="form-control"
                            id="name"
                            aria-describedby="Titulo"
                            value={titulo ?? ""}
                            onChange={(e) => setTitulo(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-xl-12">
                        <div className="become-volinteer__input-box"> <input
                          type="text"
                          name="name"
                          placeholder="Bajada"
                          className="form-control"
                          id="name"
                          aria-describedby="Bajada"
                          value={bajada ?? ""}
                          onChange={(e) => setBajada(e.target.value)}
                        /></div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="col-xl-12">
                        <div className="become-volinteer__input-box"> <input
                          type="number"
                          name="name"
                          placeholder="Id de la mascota"
                          className="form-control"
                          id="name"
                          aria-describedby="petId"
                          value={mascotaId ?? ""}
                          onChange={(e) => setMascotaId(e.target.value)}
                        />
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="become-volinteer__btn-box">
                        <button type="submit" className="thm-btn become-volinteer__btn">Crear Oferta<span><i className="icon-arrow-right"></i></span></button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div >
          )
          }
        </section >
        {/*Account End*/}

      </Layout >
    </>
  )
}


