import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"


function Navbar() {

    const [isMobileActive, setIsMobileActive] = React.useState(false)

    return (
        <nav className='flex items-center justify-between bg-slate-200 py-5 px-10 shadow-lg'>
            <a href="#">L</a>


            <section>
                <ul className='flex items-center justify-center gap-10'>
                    <li className='list-none py-3 px-6 bg-slate-300'>
                        <a className='no-underline hover:text-red-500' href="#">link1</a>
                    </li>
                    <li className='list-none py-3 px-6 bg-slate-300'>
                        <a className='no-underline hover:text-red-500' href="#">link1</a>
                    </li>
                </ul>
            </section>

            {/* mobile */}
            <section>

                {isMobileActive ?
                    <GiHamburgerMenu className='text-3xl hover:bg-red-400 hover:cursor-pointer' />
                    : <AiOutlineClose className='text-3xl hover:bg-red-400 hover:cursor-pointer' />
                }

            </section>
        </nav>
    )
}

export default Navbar
