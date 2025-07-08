'use client'
import Layout from "@/components/layout/Layout"
import useScreenHooks from "./useScreenHooks";
import Link from "next/link";
import { useParams } from 'next/navigation'
export default function Home() {
  const petId = useParams().petId; 
  const {
       isLoading,
    errors,
    raza,
    setRaza,
    nombre,
    setNombre,
    edad,
    setEdad,
    tamanio,
    setTamanio,
    tipo,
    setTipo,
    tamanios,
    tipos,
    handleSubmit,
    formRef,
  } = useScreenHooks(petId);
  return (
    <>
      <Layout headerStyle={2} >
        {/*Account Start*/}
         <section >
          {!isLoading && !errors && (
            <div className="container">
              <div className="row">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                  <h1 className="h2">Editar mascota</h1>
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

              <div className="row">
                <div className="become-volinteer__bottom-left"></div>
                <form ref={formRef} onSubmit={handleSubmit} className="contact-form-validated become-volinteer__form" >
                               <input type="hidden" name="id" value={petId} />
                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <div className="col-xl-12">
                        <div className="become-volinteer__input-box">
                          <input
                            type="text"
                            name="name"
                            placeholder="Nombre"
                            className="form-control"
                            id="name"
                            aria-describedby="petNameValue"
                            value={nombre ?? ""}
                            onChange={(e) => setNombre(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="become-volinteer__input-box">
                          <input
                            type="number"
                            name="age"
                            min="1"
                            max="150"
                            className="form-control"
                            placeholder="Edad en meses"
                            id="petAge"
                            aria-describedby="petAgeValue"
                            value={edad ?? ""}
                            onChange={(e) => setEdad(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="become-volinteer__input-box">
                          <select
                            className="form-select"
                            name="size"
                            aria-label="mediano"
                            value={tamanio ?? ""}
                            onChange={(e) => setTamanio(e.target.value)}
                          >
                            <option value="">Seleccione el tamaño</option>
                            {tamanios.map((tamanio) => (
                              <option key={tamanio.value} value={tamanio.value}>
                                {tamanio.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="col-xl-12">
                        <div className="become-volinteer__input-box">
                          <input
                            type="text"
                            name="breed"
                            placeholder="Raza"
                            className="form-control"
                            id="petRaza"
                            aria-describedby="petRazaValue"
                            value={raza ?? ""}
                            onChange={(e) => setRaza(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="become-volinteer__input-box">
                          <select
                            className="form-select"
                            aria-label="Tipo"
                            name="type"
                            value={tipo ?? ""}
                            onChange={(e) => setTipo(e.target.value)}
                          >
                            <option>Tipo</option>
                            {tipos.map((tipo) => (
                              <option key={tipo.value} value={tipo.value}>
                                {tipo.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="become-volinteer__btn-box">
                        <button type="submit" className="thm-btn become-volinteer__btn">Editar Mascota<span><i className="icon-arrow-right"></i></span></button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )}
        </section>
        {/*Account End*/}

      </Layout>
    </>
  )
}


