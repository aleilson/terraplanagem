import React from 'react'
import bannerImg from '../../assets/images/banner-2.jpeg'

import './styles.scss'

export function Banner(props) {
    return (
        <section className="banner" id='terraplanagemscroll'>
            <div className="container">
                <h2 className='banner__title'>{props.title}</h2>

                <div className="banner__box">
                    <img src={bannerImg} alt="Terraplanagem maquina" className="banner__box--img" />

                    <div className="banner__box--description">
                        <span className="banner__box--description-text">
                            {props.paragraph}
                        </span>
                        <span className="banner__box--description-text">
                            {props.paragraphSecond}
                        </span>

                        <span className="banner__box--description-text">
                            {props.paragraphThird}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}