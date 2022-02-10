import React from 'react'

import './styles.scss'

import escavadeiraImg from '../../assets/images/escavadeira.png';
import miniCarregadeiraImg from '../../assets/images/mincarrega.png';
import miniEscavadeiraImg from '../../assets/images/minescava.png';
import retroImg from '../../assets/images/retroescavadeira.png';

export function WeAre() {
    return (
        <section className='weare' id='wearescroll'>
            <div className="container">
               <h2 className="weare__title">Quem somos</h2>

                <span className="weare__description">
                    Somos especilialistas quando se fala em Terraplanagem, Demolição e compromisso, desde 2004 trazendo soluções e compromentimento aos nossos clientes, a ideia da terraplanagem surgiu quando notamos que nossas entregas virou um diferencial em relação a prazo e solucões na área da demolição e planiar terrenos de forma caseira, feito um investimento para aquisição de maquinas especiliazadas e profissionais nos tornamos a ALE Terraplanagem, desde então nosso compromentimento é fazer a sua obra ser a melhor.
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