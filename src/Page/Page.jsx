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
                <h1 className="first-header">first header first header</h1>
                <h1 className="second-header">seconde header seconde headersr</h1>
                <h1 className="third-header">third header third header</h1>
                </div>
                <div className="paragr">
                    <div className="small-title">helo</div>
                    <p className="p">here paragragh Lorem ipsum   consectetur adipisicing elit. Eius sint hic ullam accusantium eaque magni in facilis, nemo odio delectus modi  ab sapiente veniam earum ea.  Fugit, odi here paragragh Lorem ipsum   consectetur adipisicing elit. Eius sint hic ullam accusantium eaque magni in facilis, nemo odio delectus modi  ab sapiente veniam earum ea.  Fugit, odit.</p>
                </div>
            </div>
        </div>



        <div className="first-img">
            {/* <img src="" alt="" /> */}
        </div>

        <div className="first-container">
            <h1 className="first-cont-h1"><span>leter</span> and other talks</h1>
           <div className="first-container-mix">
           <p className="first-cont-p">Lorem ipsum  sit amet consectetur adipisicing elit. Sit quos,  rerum non, alias quasi unde,Lorem ipsum  sit amet consectetur adipisicing elit. Sit quos,  rerum non, alias quasi undeLorem ipsum  sit amet consectetur adipisicing elit. </p>
           <div className="first-cont-img"></div>
           </div>
           <div className="second-cont-img"></div>
        </div>

        <div className="second-container">
            <h1 className="second-cont-h1">this is na h1</h1>
            <div className="second-cont-paragraghs">
                <p className="second-container-para-1">this paragraph number one this paragraph number one this paragraph number one </p>
                <p className="second-container-para-2">and this is paragragh number two and this is paragragh number two and this is paragragh number two</p>
            </div>
            {/* <button className="button"></button> */}
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