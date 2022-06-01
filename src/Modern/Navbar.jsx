import React, { useState } from 'react'

import {Link} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faMoon as Fa1 } from '@fortawesome/free-solid-svg-icons'
import { faMoon as Fa2 } from '@fortawesome/fontawesome-free-regular'


function Navbar() {

    const [color,setColor] = useState(false)

    const handleTheme = () => {
        if (color) {
            document.documentElement.style.setProperty("--all-bgcolors","#484848")
            document.documentElement.style.setProperty("--all-textcolors","white")
            document.documentElement.style.setProperty('--banner-img',"black")
        } else {
            document.documentElement.style.setProperty("--all-bgcolors","white")
            document.documentElement.style.setProperty("--all-textcolors","black")
            document.documentElement.style.setProperty('--banner-img',"rgb(189, 189, 189)")

        }
        setColor(!color)
    }

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            Robotics
                        </Link>
                    </li>
                    <li>
                        <Link to="/modern">
                            Modern Tech
                        </Link>
                    </li>
                    <li>
                        <Link to="/web">
                            Web Designs
                        </Link>
                    </li>
                </ul>
                <div className="lay-icons" onClick={e => handleTheme()}>
                    {/* <FontAwesomeIcon icon={faCoffee} /> */}
                    {
                        color ? <>
                        <FontAwesomeIcon icon={Fa1} />
                        </> : 
                        <>
                        <FontAwesomeIcon icon={Fa2} />
                        </>
                    }

                </div>
            </nav>
        </header>
    )
}

export default Navbar