import React, { useEffect } from 'react'
import "./style.scss"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export default function About() {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.to(".about-h1", { opacity: 1, duration: 1, delay: 1 })
        gsap.to(".containe", { opacity: 1, duration: 1.1, delay: 1.5 })
        gsap.to(".more-grid", {
            opacity: 1, clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 1, scrollTrigger: {
                trigger: ".more-grid"
            }
        })
    })

    return (
        <>

            <div className="about">
                <h1 className='about-h1'>ABOUT</h1>

                <div className="architect">
                    <div className="containe">
                        <div className="bg-all">
                            <a href="/">
                                <div className="bg-img1 img"></div>
                            </a>
                        </div>

                        <div className="bg-all">
                            <a href="/">
                                <div className="bg-img2 img"></div>
                            </a>
                        </div>
                        <div className="bg-all">
                            <a href="/">
                                <div className="bg-img3 img"></div>
                            </a>
                        </div>

                        <div className="bg-all">
                            <a href="/">
                                <div className="bg-img4 img"></div>
                            </a>
                        </div>


                        <div className="bg-all">
                            <a href="/">
                                <div className="bg-img5 img"></div>
                            </a>
                        </div>


                        <div className="bg-all">
                            <a href="/">
                                <div className="bg-img6 img"></div>
                            </a>
                        </div>


                        <div className="bg-all">
                            <a href="/">
                                <div className="bg-img7 img"></div>
                            </a>
                        </div>

                        <div className="bg-all">
                            <a href="/">
                                <div className="bg-img8 img"></div>
                            </a>
                        </div>
                    </div>


                    <div className="more">
                        <div className="more-grid">
                            <p className="more1">About</p>
                            <p className="more2">Lorem, ipsum  sit amet consectetur adipisicing elit. Aut recusandae optio quaerat magnam sed eum deleniti. Sit quam consequatur asperiores nemo necessitatibus maiores eos, ea sequi et iure. In, sapiente Lorem, ipsum  sit amet consectetur adipisicing elit. Nesciunt commodi accusamus culpa rem vel eos sed nulla, cum ullam, magnam ab impedit similique quis consequatur molestias repellendus reiciendis aspernatur .</p>
                        </div>
                    </div>



                </div>
            </div>

        </>
    )
}
