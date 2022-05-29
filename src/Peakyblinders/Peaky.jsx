import React, { useEffect } from 'react'
import img1 from '../images/p1.jpg'
import img2 from '../images/p2.jpg'
import img3 from '../images/p3.jpg'
import img4 from '../images/p4.jpg'
import img5 from '../images/p5.jpg'
import img6 from '../images/p6.jpg'
import gun from '../images/gun.png'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import CSSRulePlugin from 'gsap/CSSRulePlugin'
function Peaky() {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger,CSSRulePlugin)

        const imgDirect = document.querySelectorAll('.grid-layout-left .img')
        const imgDirect2 = document.querySelectorAll('.grid-layout-right .img')
        
        const textDirect = document.querySelectorAll('.grid-layout-left .text-layout')
        const textDirect2 = document.querySelectorAll('.grid-layout-right .text-layout')

        textDirect.forEach((elem,i) => {
            gsap.to(
                elem,{
                    duration:1,
                    ease:"none",
                    "--right-text":"100%",
                    "--color-right":"#fff",
                    "--color-right-line":"#FFFF00",
                    scrollTrigger:{
                        trigger:elem,
                        start:"center 60%",
                        toggleActions:"play none none none",
                        // markers:true
                    }
                }
            )
        })
        textDirect2.forEach((elem,i) => {
            gsap.to(
                elem,{
                    duration:1,
                    ease:"none",
                    "--left-text":"100%",
                    "--color-left":"#fff",
                    "--color-left-line":"#FFFF00",
                    scrollTrigger:{
                        trigger:elem,
                        start:"center 60%",
                        toggleActions:"play none none none",
                        // markers:true
                    }
                }
            )
        })

        imgDirect.forEach((elem,i) => {
            gsap.to(elem,{
                duration:1,
                ease:"none", 
                "--right":"100%",
                scrollTrigger:{
                    trigger:elem,
                    start:"center 60%",
                    // end:"center center",
                    toggleActions:"play none none none",
                    // markers:true
                }
            }) 
        })


        imgDirect2.forEach((elem,i) => {
            gsap.to(elem,{
                duration:1,
                ease:"none",
                "--left":"100%",
                scrollTrigger:{
                    trigger:elem,
                    start:"center 60%",
                    toggleActions:"play none none none",
                    // markers:true
                }
            }) 
        })
    
    },[])

    return (
        <div className='container'>
            <div className="grid-layout-left">
                <div className="img"><img src={img1} alt="" /></div>
                <div className="text-layout">
                    <div className="text">
                        Peaky Blinders
                    </div>
                    <div className="text">
                        Peaky Blinders
                    </div>
                    <div className="text">
                        Peaky Blinders
                    </div>
                    <div className="text">
                        Peaky Blinders
                    </div>
                </div>
            </div>
            <div className="grid-layout-right">
                <div className="text-layout">
                    <div className="text">
                        Peaky Blinders
                    </div>
                    <div className="text">
                        Peaky Blinders
                    </div>
                    <div className="text">
                        Peaky Blinders
                    </div>
                    <div className="text">
                        Peaky Blinders
                    </div>
                </div>
                <div className="img"><img src={img2} alt="" /></div>
            </div>
            <div className="grid-layout-left">
                <div className="img"><img src={img3} alt="" /></div>
                <div className="text-layout">
                    <div className="text">
                        Peaky Blinders
                    </div>
                    <div className="text">
                        Peaky Blinders
                    </div>
                    <div className="text">
                        Peaky Blinders
                    </div>
                    <div className="text">
                        Peaky Blinders
                    </div>
                </div>
            </div>
            <div className="grid-layout-right">
                <div className="text-layout">
                    <div className="text">
                        Peaky Blinders
                    </div>
                    <div className="text">
                        Peaky Blinders
                    </div>
                    <div className="text">
                        Peaky Blinders
                    </div>
                    <div className="text">
                        Peaky Blinders
                    </div>
                </div>
                <div className="img"><img src={img4} alt="" /></div>
            </div>
            <div className="grid-layout-left">
                <div className="img"><img src={img5} alt="" /></div>
                <div className="text-layout">
                    <div className="text">
                        Peaky Blinders
                    </div>
                    <div className="text">
                        Peaky Blinders
                    </div>
                    <div className="text">
                        Peaky Blinders
                    </div>
                    <div className="text">
                        Peaky Blinders
                    </div>
                </div>
            </div>
            <div className="grid-layout-right">
                <div className="text-layout">
                    <div className="text">
                        Peaky Blinders
                    </div>
                    <div className="text">
                        Peaky Blinders
                    </div>
                    <div className="text">
                        Peaky Blinders
                    </div>
                    <div className="text">
                        Peaky Blinders
                    </div>
                </div>
                <div className="img"><img src={img6} alt="" /></div>
            </div>
        </div>
    )
}

export default Peaky