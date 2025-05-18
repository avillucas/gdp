import Link from "next/link"
export default function DonacionMaterial() {
    return (
        <>
       
       {/*Donate One Start */}
       <section className="donate-one pdt">
            <div className="container">
                 <div className="section-title text-center sec-title-animation animation-style1">
                    <h2 className="section-title__title title-animation">Tambien podes colaborar</h2>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-4 wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                        <div className="donate-one__single">
                            <h3 className="donate-one__title"><Link href="https://wa.me/15551234567?text=Quiero%20hacer%20una%20donaci%C3%B3n">Medicamentos de Humanos</Link>
                            </h3>
                            <p className="donate-one__text">
                                Cefalexina en comprimidos de 500mg – 1g o suspensión<br/>
                                Rumiclamox 250mg y 500mg<br/>
                                Metronidazol en comprimidos 500 mg o suspensión<br/>
                                Complejo vitamínico del Grupo B (B1, B6, B12) en comprimidos o inyectable<br/>
                                Vitamina B12 en cápsulas o comprimidos<br/>
                                Tramadol en comprimidos o inyectable<br/>
                                Prednisolona 4, 8 y 40 mg 
                            </p>
                            <div className="donate-one__btn-box">
                                <Link href="https://wa.me/15551234567?text=Quiero%20hacer%20una%20donaci%C3%B3n" className="donate-one__btn thm-btn">¡Dona Ahora!<span><i
                                            className="icon-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
                        <div className="donate-one__single donate-one__single-2">
                            <h3 className="donate-one__title"><Link href="https://wa.me/15551234567?text=Quiero%20hacer%20una%20donaci%C3%B3n">Medicamentos de Veterinaria</Link></h3>
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
                                <Link href="https://wa.me/15551234567?text=Quiero%20hacer%20una%20donaci%C3%B3n" className="donate-one__btn thm-btn">¡Dona Ahora!<span><i
                                            className="icon-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                        <div className="donate-one__single">
                            <h3 className="donate-one__title"><Link href="https://wa.me/15551234567?text=Quiero%20hacer%20una%20donaci%C3%B3n">Insumos de Enfermería</Link>
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
                                <Link href="https://wa.me/15551234567?text=Quiero%20hacer%20una%20donaci%C3%B3n" className="donate-one__btn thm-btn">¡Dona Ahora!<span><i
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
