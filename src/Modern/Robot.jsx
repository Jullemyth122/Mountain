import React, { useEffect } from 'react'
import img from '../modernimg/robot1.png'
import img2 from '../modernimg/robot2.png'
import img3 from '../modernimg/robotred.png'
import img4 from '../modernimg/robot3.png'
import img5 from '../modernimg/robot4.png'
import imgRobo from '../modernimg/robot2.jpg'
import imgRobo2 from '../modernimg/robot3.jpg'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import CSSRulePlugin from 'gsap/CSSRulePlugin'
import { Bounce, Elastic, Expo, SlowMo } from 'gsap/all'
// import gsap from 'gsap'
function Robot() {
  
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger,CSSRulePlugin)

        const tl = gsap.timeline()

        const opener = gsap.timeline()

        const circles = document.querySelectorAll('.banner .circle')
        const bannerImg = document.querySelector('.imgbanner')

        const robotBox = document.querySelectorAll('.robot-box')
        const robotBoxImg = document.querySelectorAll('.robot-box .imgbox')
        const robotContainer = document.querySelectorAll('.robot-colors')
        // #bdbdbd
        gsap.to(bannerImg,{
            "--banner-img":"#000",
            scrollTrigger:{
                trigger:bannerImg,
                start:"top top",
                scrub:true,
                // markers:true
            }
        })

        gsap.to(robotBox,{
            duration:2,
            "--color-bot":"100%",
            ease:"none",
            scrollTrigger: {
                trigger:robotContainer,
                start:"top center",
                toggleActions:"play none none none",
                // markers:true,
            }
        })

        gsap.fromTo(robotBoxImg,{
            transform:"rotate(90deg)",
            right:"-100%",
        },{
            duration:2,
            transform:"rotate(0deg)",
            right:"0%",
            ease:Expo.easeOut,
            scrollTrigger: {
                trigger:robotContainer,
                start:"top center",
                toggleActions:"play none none none",
                // markers:true,
            }
        })
        gsap.fromTo(bannerImg,{
            height:"0%"
        },{
            height:"100%",
            duration:3,
            ease: "none"
        })
        circles.forEach((elem,i) => {
            opener.fromTo(elem,{
                opacity:"0",
                height:"0",
            },{
                opacity:"1",
                // duration:1,
                height:"400px",
                ease: SlowMo.ease.config(0.7,0.7, false)
            })
        })


        const footerAnimation = document.querySelector('footer')

        // Blink first
        gsap.to(footerAnimation,{
            keyframes: {"--opacity--bar":[0,1,0,1,0,1]},
            duration:2,
            ease:"none",
            scrollTrigger:{
              trigger:footerAnimation,
            //   markers:true,
              start:"top center"
            }
        })
        gsap.to(footerAnimation,{
            keyframes:{"--move-item":['0%','100%',]},
            "--opacity-bar":"0",
            duration:2,
            delay:2,
            ease:"none",
            scrollTrigger:{
              trigger:footerAnimation,
            //   markers:true,
              start:"top center"
            }
        })
        // 
        

        const cursorCircle = document.querySelectorAll('.cursorCircle')

        circles.forEach((elem,i) => {
            elem.addEventListener("mousemove", function s(e) {
                var rect = elem.getBoundingClientRect()
                var x = e.clientX - rect.left; 
                var y = e.clientY - rect.top;
                console.log(cursorCircle[i])
                cursorCircle[i].style.top = y + "px"
                cursorCircle[i].style.left = x + "px"
                cursorCircle[i].style.opacity = "1"
                // console.log(x,y)
            })
            elem.addEventListener("mouseleave",() => {
                cursorCircle[i].style.opacity = "0"
            })
        })


        const mouseCursor = document.querySelector('.cursor')
        const container = document.querySelector('.container')
        container.addEventListener("mousemove",cursorImg_)
        function cursorImg_(e) {
            var rect = container.getBoundingClientRect();
            var x = e.clientX ; //x position within the element.
            var y = e.clientY - rect.top;  //y position within the element.
            mouseCursor.style.top = y + "px"
            mouseCursor.style.left = x + "px"            
        }

        container.addEventListener("click", () => {
            mouseCursor.classList.add('expand')
            setTimeout(() => {
                mouseCursor.classList.remove("expand")
            },500)
        })

    },[])

    return (
        <div className='container'>
            <div className="cursor">
                <div className="cursor-inside"></div>
            </div>
            <div className="top">
                <div className="img">
                    <div className="boximg">
                        <div className="imgbanner"></div>
                    </div>
                </div>
                <div className="banner">
                    <div className="circle">
                        <div className="cursorCircle"></div>
                        <h3>
                            <span className='t'>
                                ROBOT - 1 
                            </span>
                        </h3> 
                    </div> 
                    <div className="circle">
                        <div className="cursorCircle"></div>
                        <h3>
                            <span className='t'>
                                ROBOT - 2 
                            </span>
                        </h3> 
                    </div> z
                    <div className="circle">
                        <div className="cursorCircle"></div>
                        <h3>
                            <span className='t'>
                                ROBOT - 3 
                            </span>
                        </h3> 
                    </div> 
                </div>
            </div>

            <div className="robot-colors">
                <div className="robot-box">
                    <div className="text">
                        <h2>
                            RED - ROBOT
                        </h2>
                    </div>
                    <div className="imgbox">
                        <img src={img3} alt="" />
                    </div>
                </div>
                <div className="robot-box">
                    <div className="text">
                        <h2>
                            YELLOw - ROBOT
                        </h2>
                    </div>
                    <div className="imgbox">
                        <img src={img2} alt="" />
                    </div>
                </div>
                <div className="robot-box">
                    <div className="text">
                        <h2>
                            BLUE - ROBOT
                        </h2>
                    </div>
                    <div className="imgbox">
                        <img src={img4} alt="" />
                    </div>
                </div>
                <div className="robot-box">
                    <div className="text">
                        <h2>
                            VIOLET - ROBOT
                        </h2>
                    </div>
                    <div className="imgbox">
                        <img src={img5} alt="" />
                    </div>
                </div>
            </div>

            <footer>
                <div className="left-f">
                    <div className="top">
                        <div className="text">
                            <h1>
                                LAZY ROBOCAP - 1
                            </h1>
                        </div>
                        <div className="imgbot">
                            <img src={imgRobo} alt="" />
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="text">
                            <h1>
                                LAZY ROBOCAP - 1
                            </h1>
                        </div>
                        <div className="imgbot">
                            <img src={imgRobo2} alt="" />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Robot