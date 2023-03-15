import React, { useEffect } from 'react'
import "./style.scss"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export default function Page() {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() =>{
        gsap.to(".page-bg", {clipPath:"polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", opacity:1, duration:1.3 })
        gsap.to(".navbar", {delay:1.3, opacity:1, y:10 })
        gsap.to(".first-header", {delay:2, opacity:1, y:10 })
        gsap.to(".second-header", {delay:2.8, opacity:1, y:10 })
        gsap.to(".third-header", {delay:3.5, opacity:1, y:10 })
        gsap.to(".small-title", {delay:4.5, opacity:1})
        gsap.to(".p", {delay:5, duration:1.2 ,opacity:1, clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" })
        gsap.to(".first-img", { clipPath:" polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", scrollTrigger:{
            trigger:".first-img",

        } })
        gsap.to(".italic", { opacity:1, delay:1.1, scrollTrigger:{
            trigger:".italic"
        } })
        gsap.to(".first-cont-img", { duration:1.1, clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration:1.1, scrollTrigger:{
            trigger:".first-cont-img"
        } })
        gsap.to(".second-cont-img", {duration:1.2, clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" , scrollTrigger:{
            trigger:".second-cont-img"
        } })
        gsap.to(".second-cont-h1", { opacity:1, y:10, scrollTrigger:{
            trigger:".second-cont-h1"
        } })
        gsap.to(".h1-cara", {delay:1.6, duration:1.2, opacity:1, clipPath:"polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", scrollTrigger:{
            trigger:".h1-cara"
        } })

        

    }
    )
  return (
    <>
    <div className="page">
        <div className="page-bg">
            <div className="navbar">
                <h1 className="logo">SOMESTUFF</h1>
                <ul className="ul">
                    <li className="li">HOME</li>
                    <li className="li">ABOUT</li>
                    <li className="li">MORE</li>
                    <li className="li">CONTACT</li>
                </ul>
            </div>
            <div className="header">
                <div className="titles">
                <h1 className="first-header">DESIGN IS NOT  </h1>
                <h1 className="second-header">a single object or dimension,</h1>
                <h1 className="third-header">DESIGN IS MESSY AND WEIRD.</h1>
                </div>
                <div className="paragr">
                    <div className="small-title">helo,</div>
                    <p className="p">Welcome to our company, where design is more than just a profession - it's a passion. We believe that every product we create should be a masterpiece of design and engineering, crafted with care and attention to detail. We strive to make products that are not only functional but also beautiful, with a focus on user experience and user interface design.</p>
                </div>
            </div>
        </div>



        <div className="first-img">
            {/* <img src="" alt="" /> */}
        </div>

        <div className="first-container">
            <h1 className="first-cont-h1"><span className='italic'>The silent</span> ambassador of your brand.</h1>
           <div className="first-container-mix">
           <p className="first-cont-p">Our passion for design is reflected in everything we do, from the initial concept to the final product. We take pride in creating products that are intuitive, efficient, and visually appealing. </p>
           <div className="first-cont-img"></div>
           </div>
           <div className="second-cont-img"></div>
        </div>

        <div className="second-container">
            <h1 className="second-cont-h1">How we roll.</h1>
            <div className="second-cont-paragraghs">
                <p className="second-container-para-1">We work closely with our clients to understand their needs and goals, and then use our design expertise to turn their vision into reality,</p>
                <p className="second-container-para-2"> we believe that good design should be accessible to everyone, not just the elite. We aim to create products that are not only affordable but also of the highest quality. We are constantly pushing the boundaries of design and innovation, exploring new technologies and techniques to create products that are truly unique.</p>
            </div>
            {/* <button className="button"></button> */}
            <div className="h1-cara">
            <h1 className='all-h1 h1-1'>Good design is obvious,</h1>
            <h1 className='all-h1 h1-2'>great design is transparent and,</h1>
            <h1 className='all-h1 h1-3'>it is not decoration. It's communication. </h1>
            </div>
        </div>
    </div>

    </>
  )
}
/*
 What i want to learn from this project:
make nice connected animated landing page.
use clip path.
use deffrent font faly.
smooth scrooling.
enfinit scroll.
page overlap.

*/