import React from 'react'

import bannerImg from '../../assets/images/banner-2.jpeg'

import './styles.scss'

export function Banner() {
    return (
        <section className="banner" id='terraplanagemscroll'>
            <div className="container">
                <h2 className='banner__title'>Terraplanagem</h2>

                <div className="banner__box">
                    <img src={bannerImg} alt="Terraplanagem maquina" className="banner__box--img" />

                    <div className="banner__box--description">
                        <span className="banner__box--description-text">
                            Com uma equipe especializada, frota adequada para atender todas as adequações específica para deixar seu terreno pronto, nossos equipamentos oferecem a vantagem da utilização de conchas para terraplenagem e com rompedores para as demolições.
                            <br /> As substituições destes implementos (concha e rompedor) são realizadas na própria obra em poucos minutos, com isso conseguimos atender as necessidades de cada cliente.
                        </span>

                        <span className="banner__box--description-text">
                            Demolição é o ato de se destruir de forma deliberada alguma construção a fim de dar outro destino ao espaço antes ocupado por ela, seja qual for sua necessidade de demolição.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}