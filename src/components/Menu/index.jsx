import React, { useState } from 'react'
import { AiOutlineWhatsApp, AiOutlineMenu } from "react-icons/ai";

import './styles.scss'


export function Menu() {
    const [headerChange, setHeaderChange] = useState(false);
    const [navbarChange, setNavbarChange] = useState(false);

    function handleOpenMenu() {
        setHeaderChange(!headerChange) 
        setNavbarChange(!navbarChange)

        const hash = window.location.hash
    }

    return (
        <header 
            id='homescroll' 
            style={{ height: `${headerChange ? '100%' : ''}` }}
        >
            <div className="container">
                <h1 className="logo">
                    ALE
                    <span>Terraplanagem</span>
                </h1>
                <nav 
                    className='menu'
                    style={{ display: `${navbarChange ? 'block' : ''}` }}
                >
                    <ul className='menu__list'>
                        <li className='menu__option'>
                            <a className='menu__option-link' href="#terraplanagemscroll">Terraplanagem</a>
                        </li>
                        <li className='menu__option'>
                            <a className='menu__option-link' href="#wearescroll">Quem somos</a>
                        </li>
                        <li className='menu__option'>
                            <a className='menu__option-link' href="#contactscroll">Contato</a>
                        </li>
                    </ul>
                </nav>
                <a 
                    className='whatslink' 
                    href='https://api.whatsapp.com/send?phone=5511948311633&text=Ol%C3%A1%20Ale%20Terraplanagem%2C%20vi%20seu%20site%20e%20gostaria%20de%20ter%20maiores%20informa%C3%A7%C3%B5es.'
                >
                    <AiOutlineWhatsApp fontSize={25} /> +55 11 94831-1633
                </a>
                <button className="menu__mobile" onClick={handleOpenMenu}>
                    <AiOutlineMenu fontSize={30} />
                </button>
            </div>
        </header>
    )
}