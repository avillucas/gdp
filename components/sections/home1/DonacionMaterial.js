import Link from "next/link"
export default function DonacionMaterial() {
    return (
        <>
       
       {/*Donate One Start */}
       <section className="donate-one pdt">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                        <div className="donate-one__single">
                            <h3 className="donate-one__title"><Link href="donation-details">Medicamentos de Humanos</Link>
                            </h3>
                            <p className="donate-one__text">
                                Cefalexina en comprimidos de 500mg – 1g o suspensión<br/>
                                Rumiclamox 250mg y 500mg<br/>
                                Metronidazol en comprimidos 500 mg o suspensión<br/>
                                Complejo vitamínico del Grupo B (B1, B6, B12) en comprimidos o inyectable<br/>
                                Vitamina B12 en cápsulas o comprimidos<br/>
                                Tramadol en comprimidos o inyectable<br/>
                                Prednisolona 4, 8 y 40 mg en comprimidos<br/>
                                Acemuk comprimidos, jarabe<br/>
                                Doxiciclina comprimidos
                            </p>
                            <div className="donate-one__btn-box">
                                <Link href="donation-details" className="donate-one__btn thm-btn">Donate Now<span><i
                                            className="icon-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
                        <div className="donate-one__single donate-one__single-2">
                            <h3 className="donate-one__title"><Link href="become-volunteer">Medicamentos de Veterinaria</Link></h3>
                            <p className="donate-one__text">
                                Zaleas<br/>
                                Pañales adultos G, XG y XXG<br/>
                                Sueros de solución fisiológica, solución ringer lactato, dextrosa, manitol<br/>
                                Cateteres 20, 22 y 24 G.<br/>
                                Alcohol, pervinox, clorhexidina, agua oxigenada<br/>
                                Guantes de látex<br/>
                                Vendas tipo cambric, coban<br/>
                                Gasas<br/>
                                Jeringas 1, 3 y 5ml.<br/>
                                Tela adhesiva
                            </p>
                            <div className="donate-one__btn-box">
                                <Link href="become-volunteer" className="donate-one__btn thm-btn">Join Now<span><i
                                            className="icon-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                        <div className="donate-one__single">
                            <h3 className="donate-one__title"><Link href="donation-details">Insumos de Enfermería</Link>
                            </h3>
                            <p className="donate-one__text">
                                Zaleas<br/>
                                Pañales adultos G, XG y XXG<br/>
                                Sueros de solución fisiológica, solución ringer lactato, dextrosa, manitol<br/>
                                Cateteres 20, 22 y 24 G.<br/>
                                Alcohol, pervinox, clorhexidina, agua oxigenada<br/>
                                Guantes de látex<br/>
                                Vendas tipo cambric, coban<br/>
                                Gasas<br/>
                                Jeringas 1, 3 y 5ml.<br/>
                                Tela adhesiva
                            </p>
                            <div className="donate-one__btn-box">
                                <Link href="donation-details" className="donate-one__btn thm-btn">Comunicate con nosotros<span><i
                                            className="icon-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
                        <div className="donate-one__single donate-one__single-2">
                            <h3 className="donate-one__title"><Link href="become-volunteer">Voluntariado</Link></h3>
                            <p className="donate-one__text">
                                Sumate a nuestro equipo de voluntarios para ayudarnos en las tareas de limpieza, cuidado, mantenimiento, rescate y muchas actividades que ayudan día a día a nuestra mascotas a estar mejor 
                            </p>
                            <div className="donate-one__btn-box">
                                <Link href="become-volunteer" className="donate-one__btn thm-btn">Sumate<span><i
                                            className="icon-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Donate One End */}
           
        </>
    )
}
