import React from 'react'
import { AiOutlineWhatsApp } from "react-icons/ai";

import './styles.scss'

export function Contact(props) {
    return (
        <section className='contact' id='contactscroll'>
            <div className="mask">
                <div className="container">
                    <h2 className="contact__title">{props.title}</h2>

                    <span className="contact__description">{props.paragraph}</span>

                    <div className="contact__box">
                        <AiOutlineWhatsApp fontSize={60} />
                        <span>{props.paragraphSecond}<br /> {props.paragraphThird}</span>
                        <a 
                            className='whatslink' 
                            href={props.urlCTA}
                        >
                           {props.textCallToAction}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}