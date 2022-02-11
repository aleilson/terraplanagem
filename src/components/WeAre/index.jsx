import React from 'react'

import './styles.scss'

import escavadeiraImg from '../../assets/images/escavadeira.png';
import miniCarregadeiraImg from '../../assets/images/mincarrega.png';
import miniEscavadeiraImg from '../../assets/images/minescava.png';
import retroImg from '../../assets/images/retroescavadeira.png';

export function WeAre(props) {
    return (
        <section className='weare' id='wearescroll'>
            <div className="container">
               <h2 className="weare__title">{props.title}</h2>

                <span className="weare__description">
                    {props.paragraph}
                </span>

               <div className="weare__box">
                   <div className="weare__box--item">
                    <img src={escavadeiraImg} alt="Escavadeira maquina" />
                   </div>

                   <div className="weare__box--item">
                    <img src={miniCarregadeiraImg} alt="Mini Carregadeira maquina" />
                   </div>
                   
                   <div className="weare__box--item">
                    <img src={miniEscavadeiraImg} alt="Mini Escavadeira maquina" />
                   </div>

                   <div className="weare__box--item">
                    <img src={retroImg} alt="Retroescavadeira maquina" />
                   </div>
               </div>
            </div>
        </section>
    )
}