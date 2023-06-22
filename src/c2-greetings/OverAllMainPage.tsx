import React from 'react';
import s from './OverAllMainPage.module.scss'
import styleConteiner from './../common/style/Conteiner.module.css'
import oficeImg from './../assets/image/header-bg.jpg'

const backImage = {
    color: 'blue',
    backgroundImage: `url(${oficeImg})`,
};

export const OverAllMainPage = () => {

    return (
        <div className={s.overAllBlock} style={backImage}>
            <div className={`${styleConteiner.container} ${s.container}`}>
                <div className={s.text}>
                    <h1>Hello!</h1>
                    <h3>I'm Tagaeva Nargiza</h3>
                    <p>Frontend Developer</p>
                </div>


            </div>
        </div>
    );
};

