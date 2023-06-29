import React from 'react';
import s from './Main.module.scss'
import styleConteiner from "../common/style/Conteiner.module.scss";

import myImg from '../assets/image/photo_2022-08-19_16-51-39.jpg'

const myImage = {

    backgroundImage: `url(${myImg})`,
};

const Main = () => {

    return (
        <div className={s.mainBlock}>
            <div className={`${styleConteiner.container} ${s.container}`}>
                <div className={s.content}>
                    <div className={s.myMainPhotoAndButton}>

                        <div className={s.myImgWrapper}>
                            <div className={s.myImg} style={myImage}></div>
                        </div>


                        <a className={s.resumeButton} href={'#'}>
                            Download Resume
                        </a>

                    </div>

                    <div className={s.aboutMe}>

                            <h2 className={s.title}>
                                ABOUT ME
                            </h2>

                        <p>
                            Hello! I’m Tagaeva Nargiza. Frontend Developer with over 1 year of experience.
                            Experienced with all stages of the development cycle for dynamic web projects.
                            Having an in-depth knowledge including advanced React,Redux,Redux Toolkit,Type Script, JavaScript,React-Router Dom,
                            StoryBook, Unite test, SASS.
                            Strong background in management and leadership.
                        </p>
                        <ul className={s.profileMenu}>
                            <li>
                                <span>NAME: </span>
                                Tagaeva Nargiza
                            </li>
                            <li>
                            <span>
                                DATE OF BIRTH: </span>
                                01 March 1992
                            </li>
                            <li>
                            <span>
                                NATIONALITY: </span>
                                Citizen Of Tajikistan, Russia
                            </li>
                            <li>
                            <span>
                                ADDRESS: </span>
                                Russia, Moscow, Batyninskay 10, apr.110
                            </li>
                            <li>
                                <span>PHONE: </span>
                                +79106364032
                            </li>
                            <li>
                            <span>
                                  E-MAIL: </span>
                                ada.tagaeva.92@gmail.com
                            </li>
                        </ul>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Main;