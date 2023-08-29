import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"
import logo from '../logo.svg'

function Navbar() {

    const [isMobileActive, setIsMobileActive] = React.useState(true)

    const handleClick = () => {
        setIsMobileActive(prevState => !prevState)
    }

    return (
        <nav id='anchor'>
            <img className='logo' src={logo} alt="logo" />

            <section className={`section-nav ${isMobileActive ? 'active' : ''}`}>
                <ul>
                    <li>
                        <a href="#anchor">Lorem</a>
                    </li>
                    <li>
                        <a href="#anchor">Ipsum</a>
                    </li>
                    <li>
                        <a href="#anchor">Dollor</a>
                    </li>
                </ul>
            </section>

            {/* mobile */}
            <section onClick={handleClick} className='section-mobile'>
                {isMobileActive ?
                    <GiHamburgerMenu className='icon' />
                    : <AiOutlineClose className='icon' />
                }
            </section>
        </nav>
    )
}

export default Navbar


