import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import img from '../techimg/plane1.jpg'
import img2 from '../techimg/jet2.jpg'
import img3 from '../techimg/jet3.jpg'
import { Power2 } from 'gsap/all'
function Tech() {
  
    const list = ["JETSKI","FIGHTER","LION"]
    
    const [index,setIndex] = useState(0)

    const handleSetIndex = e => {
        setIndex(e)
        gsap.fromTo('.slider-big .slider .hide',{
            translateX:'-100%',
        },{
            translateX:"0%",
            ease:Power2.easeInOut,
            duration:2,
        })
        gsap.fromTo('.slider-med .slider .hide',{
            translateX:'100%',
        },{
            translateX:"0%",
            ease:Power2.easeInOut,
            duration:2,
        })

        gsap.fromTo('.slider-small .slider .hide',{
            translateX:'-100%',
        },{
            translateX:"0%",
            ease:Power2.easeInOut,
            duration:2,
        })
        gsap.fromTo('.sliderTitle .item .hide',{
            translateY:'100%',
        },{
            translateY:"0",
            ease:Power2.easeInOut,
            duration:2,  
        })
        gsap.fromTo('.sliderNumberBottom .hide h1',{
            translateY:"-100%",
        },{
            translateY:"0%",
            ease:Power2.easeInOut,
            duration:1,
        })
    
    }

    useEffect(() => {

    },[])

    return (
        <div className='container'>
            
            <div className="sliderNumberOption">
                {list.map((item,idx) => {
                    return(
                        <div 
                            className={`opt${index === idx ? " active" : ""}`}
                            onClick={e => handleSetIndex(idx)}
                            key={idx}
                        >
                            {idx}
                        </div>
                    )
                })}
            </div>
            
            <div className="sliderTitle">
                <div className="sliderWrapper"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                >
                    {list.map((item,idx) => {
                        return(
                            <div className="item">
                                <div className="hide">
                                    <h1> {item} </h1>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="sliderNumberBottom">
                
                <div className="hide">
                    <h1>
                        {index + 1} 
                    </h1>
                </div> 
                <h3> / </h3>
                <h3> 
                    {list.length}
                </h3> 
            </div>

            <div className="slider-big">
                <div className="sliderWrapper"
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                >
                    <div className="slider">
                        <div className="hide">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div className="slider">
                        <div className="hide">
                            <img src={img2} alt="" />
                        </div>
                    </div>
                    <div className="slider">
                        <div className="hide">
                            <img src={img3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="slider-med">
                <div className="sliderWrapper"
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                >
                    <div className="slider">
                        <div className="hide">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div className="slider">
                        <div className="hide">
                            <img src={img2} alt="" />
                        </div>
                    </div>
                    <div className="slider">
                        <div className="hide">
                            <img src={img3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="slider-small">
                <div className="sliderWrapper"
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                >
                    <div className="slider">
                        <div className="hide">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div className="slider">
                        <div className="hide">
                            <img src={img2} alt="" />
                        </div>
                    </div>
                    <div className="slider">
                        <div className="hide">
                            <img src={img3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tech