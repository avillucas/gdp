'use client'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
export default function Video() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
        {/*Video One Start */}
        <section className="video-one">
            <div className="container">
                <div className="video-one__inner wow fadeInUp" data-wow-delay="300ms">
                    <div className="video-one__bg"
                        style={{ backgroundImage: ' url(assets/images/backgrounds/video-one-bg.jpg)' }} ></div>
                    <div className="video-one__video-link">
                        <a className="video-popup" onClick={() => setOpen(true)}>
                            <div className="video-one__video-icon">
                                <span className="icon-play"></span>
                                <i className="ripple"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        {/*Video One End */}
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} />
        
        </>
    )
}
