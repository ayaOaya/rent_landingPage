import React from 'react'
import "./style.scss"

export default function Page() {
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