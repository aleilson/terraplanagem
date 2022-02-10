import React from 'react'
import { AiOutlineWhatsApp } from "react-icons/ai";

import './styles.scss'


export function Contact() {
    return (
        <section className='contact' id='contactscroll'>
            <div className="mask">
                <div className="container">
                    <h2 className="contact__title">Entre em contato agora mesmo!</h2>

                    <span className="contact__description">Acesse nosso canal de atendimento abaixo e receba as informações que precisa. Teremos prazer em atender você!</span>

                    <div className="contact__box">
                        <AiOutlineWhatsApp fontSize={60} />
                        <span>Atendimento de segunda-feira á sábado <br /> das 08h00 ás 17h30</span>
                        <a 
                            className='whatslink' 
                            href='https://api.whatsapp.com/send?phone=5511948311633&text=Ol%C3%A1%20Ale%20Terraplanagem%2C%20vi%20seu%20site%20e%20gostaria%20de%20ter%20maiores%20informa%C3%A7%C3%B5es.'
                        >
                            Solicitar orçamento!
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}