import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"


function Navbar() {

    const [isMobileActive, setIsMobileActive] = React.useState(true)

    const handleClick = () => {
        setIsMobileActive(prevState => !prevState)
    }

    return (
        <nav>
            <a href="#">L</a>


            {/* max-[768px]:hidden */}
            <section className='section-nav'>
                {/* ul has id navbar */}
                <ul>
                    <li>
                        <a href="#">link1as</a>
                    </li>
                    <li>
                        <a href="#">link2adasdas</a>
                    </li>
                    <li>
                        <a href="#">link3</a>
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


