import React, { useState } from 'react'
import { AiOutlineWhatsApp, AiOutlineMenu } from "react-icons/ai";

import './styles.scss'


export function Menu(props) {
    const [headerChange, setHeaderChange] = useState(false);
    const [navbarChange, setNavbarChange] = useState(false);

    function handleOpenMenu() {
        setHeaderChange(!headerChange) 
        setNavbarChange(!navbarChange)
    }

    return (
        <header 
            id='homescroll' 
            style={{ 
                height: `${headerChange ? '100%' : ''}`, 
                backgroundColor: `${headerChange ? '#ffca08cc' : ''}` 
            }}
        >
            <div className="container">
                <h1 className="logo">
                    {props.title}
                    <span>{props.subtitle}</span>
                </h1>
                <nav 
                    className='menu'
                    style={{ display: `${navbarChange ? 'block' : ''}` }}
                >
                    <ul className='menu__list'>
                        {
                            props.menuLinks.map(link => (
                                <li className='menu__option' key={link.title}>
                                    <a className='menu__option-link' href={`${link.path}`}>{link.title}</a>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <a 
                    className='whatslink' 
                    href={props.urlWhats}
                >
                    <AiOutlineWhatsApp fontSize={25} /> {props.numberPhone}
                </a>
                <button 
                    className="menu__mobile" 
                    onClick={handleOpenMenu}
                >
                    <AiOutlineMenu fontSize={30} />
                </button>
            </div>
        </header>
    )
}