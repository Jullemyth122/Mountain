import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import img from '../hikingimg/mountain.jpg'
import img2 from '../hikingimg/mountain2.jpg'
import img3 from '../hikingimg/mountain3.jfif'
import img4 from '../hikingimg/mountain4.jfif'
import img5 from '../hikingimg/mountain5.jpg'

import sou1 from '../hikingimg/sou.jfif'
import sou2 from '../hikingimg/sou2.jpg'
import sou3 from '../hikingimg/sou3.jpg'
import sou4 from '../hikingimg/sou4.jpg'

import a from '../hikingimg/area.jfif'
import a2 from '../hikingimg/area2.jpg'
import a3 from '../hikingimg/area3.jfif'
import a4 from '../hikingimg/area4.jfif'
import a5 from '../hikingimg/area5.jfif'

function Hiking() {
    
    const [topicindex,settopicIndex] = useState(0)
    const [topicindex2,settopicIndex2] = useState(0)
    const [topicindex3,settopicIndex3] = useState(0)
    const value_length = 3

    const handlePrev = e => {
        
        settopicIndex((prevIndex) =>
            prevIndex === 0 ? value_length - 1 : prevIndex - 1
        );

        const landslideIMG = document.querySelectorAll('.lay-grid:nth-child(1) .slider .slideImg')
        landslideIMG.forEach((elem,i) => {
            gsap.fromTo(
                `.lay-grid:nth-child(1) .slider .slideImg:nth-child(${i+2}) .landslide`,
                1,
                {opacity:'1'},
                // {width:"0%",duration:1},
                {opacity:"0",
                    stagger:{
                        each:0.05,
                        from:"end"
                    },
                }
            )
        })

    }
    
    const handleNext = e => {
        settopicIndex((prevIndex) => 
        prevIndex === value_length - 1 ? 0 : prevIndex + 1
        )
        const landslideIMG = document.querySelectorAll('.lay-grid:nth-child(1) .slider .slideImg')
        landslideIMG.forEach((elem,i) => {
            gsap.fromTo(
                `.lay-grid:nth-child(1) .slider .slideImg:nth-child(${i+2}) .landslide`,
                1,
                {opacity:'1'},
                // {width:"0%",duration:1},
                {opacity:"0",
                    stagger:{
                        each:0.05,
                        from:"left"
                    },
                }
            )
        })
    }
    

    const handlePrevNext = e => {
        if (e == "prev") {
            settopicIndex2((prevIndex) => 
                prevIndex === 0 ? value_length - 1 : prevIndex - 1
            )
            const landslideIMG = document.querySelectorAll('.lay-grid:nth-child(2) .slider .slideImg')
            landslideIMG.forEach((elem,i) => {
                gsap.fromTo(
                    `.lay-grid:nth-child(2) .slider .slideImg:nth-child(${i+2}) .landslide`,
                    1,
                    {opacity:'1'},
                    // {width:"0%",duration:1},
                    {opacity:"0",
                        stagger:{
                            each:0.05,
                            from:"end"
                        },
                    }
                )
            })
            
        } else {
            settopicIndex2((prevIndex) => 
            prevIndex === value_length - 1 ? 0 : prevIndex + 1
            )
            const landslideIMG = document.querySelectorAll('.lay-grid:nth-child(2) .slider .slideImg')
            landslideIMG.forEach((elem,i) => {
                gsap.fromTo(
                    `.lay-grid:nth-child(2) .slider .slideImg:nth-child(${i+2}) .landslide`,
                    1,
                    {opacity:'1'},
                    // {width:"0%",duration:1},
                    {opacity:"0",
                        stagger:{
                            each:0.05,
                            from:"left"
                        },
                    }
                )
            })
        }
    }
    const handlePrevNext2 = e => {
        if (e == "prev") {
            settopicIndex3((prevIndex) => 
                prevIndex === 0 ? value_length - 1 : prevIndex - 1
            )
            const landslideIMG = document.querySelectorAll('.lay-grid:nth-child(3) .slider .slideImg')
            landslideIMG.forEach((elem,i) => {
                gsap.fromTo(
                    `.lay-grid:nth-child(3) .slider .slideImg:nth-child(${i+2}) .landslide`,
                    1,
                    {opacity:'1'},
                    // {width:"0%",duration:1},
                    {opacity:"0",
                        stagger:{
                            each:0.05,
                            from:"left"
                        },
                    }
                )
            })
        } else {
            settopicIndex3((prevIndex) => 
            prevIndex === value_length - 1 ? 0 : prevIndex + 1
            )
            const landslideIMG = document.querySelectorAll('.lay-grid:nth-child(3) .slider .slideImg')
            landslideIMG.forEach((elem,i) => {
                gsap.fromTo(
                    `.lay-grid:nth-child(3) .slider .slideImg:nth-child(${i+2}) .landslide`,
                    1,
                    {opacity:'1'},
                    // {width:"0%",duration:1},
                    {opacity:"0",
                        stagger:{
                            each:0.05,
                            from:"end"
                        },
                    }
                )
            })
        }
    }

    useEffect(() => {

        const mq = window.matchMedia('(max-width: 600px)')

        if (mq.matches) {
            console.log("MATCH")
        } else {
            const imgContainer = document.querySelectorAll('.circle')
    
            const cursorIntro = document.querySelector('.cursor')
            const cursorHead = document.querySelector('.cursorHead')
            const headerContainer = document.querySelector('.container .header')
    
            headerContainer.addEventListener("mousemove",function s(e) {
                var rect = headerContainer.getBoundingClientRect()
                var x = e.clientX - rect.left; //x position within the element.
                var y = e.clientY - rect.top; 
                cursorHead.style.left = x + "px"
                cursorHead.style.top = y + "px"
            })
    
            window.addEventListener("mousemove",function s(e) {
                cursorIntro.style.top = e.pageY + "px"
                cursorIntro.style.left = e.pageX + "px"
            })
    
            
    
            imgContainer.forEach((elem,i) => {
                // elem.addEventListener("mousemove",function s(e) {
                //     var rect = elem.getBoundingClientRect()
                //     var x = e.clientX - rect.left; //x position within the element.
                //     var y = e.clientY - rect.top; 
                //     cursorHead.style.left = x + "px"
                //     cursorHead.style.top = y + "px"
                // })
                elem.addEventListener("mouseleave",() => {
                    cursorHead.innerHTML = "HIKING"
                    cursorHead.style.opacity = "0"
                })
                elem.addEventListener("mousemove",() => {
                    const createElement = document.createElement("h5")
                    createElement.innerText = elem.dataset.name
                    cursorHead.innerHTML = elem.dataset.name
                    console.log(elem.dataset.name)
                    cursorHead.style.opacity = "1"
                })
            })
        }


    },[])


    return (
        <div className='container'>
            <div className="cursor">
                HIKING
            </div>
            <div className="banner">
                <div className="header">
                    <div className="cursorHead"></div>
                    <div className="circle" data-name="Pulag" >
                        <div className="title">
                            Mt. Pulag
                        </div>
                        <img src={img} alt="" />
                    </div>
                    <div className="circle" data-name="Hadji" >
                        <div className="title">
                            Mt. Ewan
                        </div>
                        <img src={img2} alt="" />
                    </div>
                    <div className="circle" data-name="Rijahi" >
                        <div className="title">
                            Mt. Pogi
                        </div>
                        <img src={img3} alt="" />
                    </div>
                </div>
            </div>


            <div className="grid-body">
                <div className="lay-grid">
                    <div className="prevnext">  
                        <h3 onClick={e => handlePrev()}> prev </h3>
                        <h3 onClick={e => handleNext()}> next </h3>
                    </div>
                    <div className="slider">
                        <div className="title"> Mountain </div>
                        <div className="slideImg">
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                            <div className="slideWrapper" 
                            style={{ transform: `translate3d(${-topicindex * 100}%, 0, 0)` }}
                            >
                                <div className="slideItem">
                                    <img src={img2} alt="" />
                                    <div className="text"></div>
                                </div>
                                <div className="slideItem">
                                    <img src={img} alt="" />
                                    <div className="text"></div>
                                </div>
                                <div className="slideItem">
                                    <img src={img3} alt="" />
                                    <div className="text"></div>
                                </div>
                            </div>
                        </div>
                        <div className="slideImg">
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                            <div className="slideWrapper"
                            style={{ transform: `translate3d(${-topicindex * 100}%, 0, 0)` }}
                            >
                                <div className="slideItem">
                                    <img src={img4} alt="" />
                                    <div className="text"></div>
                                </div>
                                <div className="slideItem">
                                    <img src={img3} alt="" />
                                    <div className="text"></div>
                                </div>
                                <div className="slideItem">
                                    <img src={img} alt="" />
                                    <div className="text"></div>
                                </div>
                            </div>
                        </div>
                        <div className="slideImg">
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                            <div className="slideWrapper"
                            style={{ transform: `translate3d(${-topicindex * 100}%, 0, 0)` }}
                            >
                                <div className="slideItem">
                                    <img src={img5} alt="" />
                                    <div className="text"></div>
                                </div>
                                <div className="slideItem">
                                    <img src={img4} alt="" />
                                    <div className="text"></div>
                                </div>
                                <div className="slideItem">
                                    <img src={img3} alt="" />
                                    <div className="text"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lay-grid">
                    <div className="prevnext">  
                        <h3 onClick={e => handlePrevNext("prev")}> prev </h3>
                        <h3 onClick={e => handlePrevNext("next")}> next </h3>
                    </div>
                    <div className="slider">
                        <div className="title"> Souvenir </div>
                        <div className="slideImg">
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                            <div className="slideWrapper"
                            style={{ transform: `translate3d(${-topicindex2 * 100}%, 0, 0)` }}
                            >
                                <div className="slideItem">
                                    <img src={sou1} alt="" />
                                    <div className="text"></div>
                                </div>
                                <div className="slideItem">
                                    <img src={sou2} alt="" />
                                    <div className="text"></div>
                                </div>
                                <div className="slideItem">
                                    <img src={sou3} alt="" />
                                    <div className="text"></div>
                                </div>
                            </div>
                        </div>
                        <div className="slideImg">
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                            <div className="slideWrapper"
                            style={{ transform: `translate3d(${-topicindex2 * 100}%, 0, 0)` }}
                            >
                                <div className="slideItem">
                                    <img src={sou3} alt="" />
                                    <div className="text"></div>
                                </div>
                                <div className="slideItem">
                                    <img src={sou2} alt="" />
                                    <div className="text"></div>
                                </div>
                                <div className="slideItem">
                                    <img src={sou4} alt="" />
                                    <div className="text"></div>
                                </div>
                            </div>
                        </div>
                        <div className="slideImg">
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                            <div className="slideWrapper"
                            style={{ transform: `translate3d(${-topicindex2 * 100}%, 0, 0)` }}
                            >
                                <div className="slideItem">
                                    <img src={sou4} alt="" />
                                    <div className="text"></div>
                                </div>
                                <div className="slideItem">
                                    <img src={sou3} alt="" />
                                    <div className="text"></div>
                                </div>
                                <div className="slideItem">
                                    <img src={sou1} alt="" />
                                    <div className="text"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lay-grid">
                    <div className="prevnext">  
                        <h3 onClick={e => handlePrevNext2("prev")}> prev </h3>
                        <h3 onClick={e => handlePrevNext2("next")}> next </h3>
                    </div>
                    <div className="slider">
                        <div className="title"> Area </div>
                        <div className="slideImg">
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                            <div className="slideWrapper"
                            style={{ transform: `translate3d(${-topicindex3 * 100}%, 0, 0)` }}
                            >
                                <div className="slideItem">
                                    <img src={a} alt="" />
                                    <div className="text"></div>
                                </div>
                                <div className="slideItem">
                                    <img src={a2} alt="" />
                                    <div className="text"></div>
                                </div>
                                <div className="slideItem">
                                    <img src={a3} alt="" />
                                    <div className="text"></div>
                                </div>
                            </div>
                        </div>
                        <div className="slideImg">
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                            <div className="slideWrapper"
                            style={{ transform: `translate3d(${-topicindex3 * 100}%, 0, 0)` }}
                            >
                                <div className="slideItem">
                                    <img src={a5} alt="" />
                                    <div className="text"></div>
                                </div>
                                <div className="slideItem">
                                    <img src={a4} alt="" />
                                    <div className="text"></div>
                                </div>
                                <div className="slideItem">
                                    <img src={a} alt="" />
                                    <div className="text"></div>
                                </div>
                            </div>
                        </div>
                        <div className="slideImg">
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                                <div class="landslide" id='landslide' ></div>
                            <div className="slideWrapper"
                            style={{ transform: `translate3d(${-topicindex3 * 100}%, 0, 0)` }}
                            >
                                <div className="slideItem">
                                    <img src={a3} alt="" />
                                    <div className="text"></div>
                                </div>
                                <div className="slideItem">
                                    <img src={a} alt="" />
                                    <div className="text"></div>
                                </div>
                                <div className="slideItem">
                                    <img src={a5} alt="" />
                                    <div className="text"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hiking