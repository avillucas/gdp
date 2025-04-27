import Link from "next/link"
export default function Blog() {
    return (
        <>
        
        {/*Blog Two Start */}
        <section className="blog-two">
            <div className="container">
                <div className="section-title-two text-center sec-title-animation animation-style1">
                    <div className="section-title-two__tagline-box">
                        <span className="section-title-two__tagline">News And Blogs</span>
                    </div>
                    <h2 className="section-title-two__title title-animation">Recent <span>News
                            <img src="assets/images/shapes/section-title-shape.png" alt=""/>
                        </span> And Articles </h2>
                </div>
                <div className="row">
                    {/*Blog Two Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
                        <div className="blog-two__single">
                            <div className="blog-two__img-box">
                                <div className="blog-two__img">
                                    <img src="assets/images/blog/blog-2-1.jpg" alt="@@title" />
                                    <img src="assets/images/blog/blog-2-1.jpg" alt="@@title" />
                                    <Link href="blog-details" className="blog-two__link"><span className="sr-only"></span></Link>
                                </div>
                            </div>
                            <div className="blog-two__content">
                                <ul className="blog-two__meta list-unstyled">
                                    <li>
                                        <Link href="blog-details"><span className="icon-user"></span>Admin</Link>
                                    </li>
                                    <li>
                                        <Link href="blog-details"><span className="icon-comment"></span>Comment</Link>
                                    </li>
                                </ul>
                                <h3 className="blog-two__title"><Link href="blog-details">Caring for the Elderly and
                                        Vulnerable Strategy </Link></h3>
                                <p className="blog-two__text">Charity and Donation is a category that involves giving
                                    financial</p>
                                <div className="blog-two__btn-box">
                                    <Link href="donation-details" className="blog-two__btn thm-btn">rEAD mORe<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Blog Two Single End*/}
                    {/*Blog Two Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInDown" data-wow-delay="200ms">
                        <div className="blog-two__single">
                            <div className="blog-two__img-box">
                                <div className="blog-two__img">
                                    <img src="assets/images/blog/blog-2-2.jpg" alt="@@title" />
                                    <img src="assets/images/blog/blog-2-2.jpg" alt="@@title" />
                                    <Link href="blog-details" className="blog-two__link"><span className="sr-only"></span></Link>
                                </div>
                            </div>
                            <div className="blog-two__content">
                                <ul className="blog-two__meta list-unstyled">
                                    <li>
                                        <Link href="blog-details"><span className="icon-user"></span>Admin</Link>
                                    </li>
                                    <li>
                                        <Link href="blog-details"><span className="icon-comment"></span>Comment</Link>
                                    </li>
                                </ul>
                                <h3 className="blog-two__title"><Link href="blog-details">Our Goal Is Help The Poor Child
                                        Around The World</Link></h3>
                                <p className="blog-two__text">Charity and Donation is a category that involves giving
                                    financial</p>
                                <div className="blog-two__btn-box">
                                    <Link href="donation-details" className="blog-two__btn thm-btn">rEAD mORe<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Blog Two Single End*/}
                    {/*Blog Two Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
                        <div className="blog-two__single">
                            <div className="blog-two__img-box">
                                <div className="blog-two__img">
                                    <img src="assets/images/blog/blog-2-3.jpg" alt="@@title" />
                                    <img src="assets/images/blog/blog-2-3.jpg" alt="@@title" />
                                    <Link href="blog-details" className="blog-two__link"><span className="sr-only"></span></Link>
                                </div>
                            </div>
                            <div className="blog-two__content">
                                <ul className="blog-two__meta list-unstyled">
                                    <li>
                                        <Link href="blog-details"><span className="icon-user"></span>Admin</Link>
                                    </li>
                                    <li>
                                        <Link href="blog-details"><span className="icon-comment"></span>Comment</Link>
                                    </li>
                                </ul>
                                <h3 className="blog-two__title"><Link href="blog-details">Education For Poor Children Is A
                                        Must Now</Link></h3>
                                <p className="blog-two__text">Charity and Donation is a category that involves giving
                                    financial</p>
                                <div className="blog-two__btn-box">
                                    <Link href="donation-details" className="blog-two__btn thm-btn">rEAD mORe<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Blog Two Single End*/}
                </div>
            </div>
        </section>
        {/*Blog Two End */}
       
        </>
    )
}
