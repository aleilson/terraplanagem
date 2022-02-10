import React from 'react'
import { AiOutlineWhatsApp } from "react-icons/ai";

import './styles.scss'


export function Menu() {
    return (
        <header id='homescroll'>
            <div className="container">
                <h1 className="logo">
                    ALE
                    <span>Terraplanagem</span>
                </h1>
                <nav className='menu'>
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
            </div>
        </header>
    )
}