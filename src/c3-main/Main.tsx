import React from 'react';
import s from './Main.module.scss'
import styleConteiner from "../common/style/Conteiner.module.scss";
import { Tilt } from 'react-tilt'
import myImg from '../assets/image/photo_2022-08-19_16-51-39.jpg'
import { Slide} from "react-awesome-reveal";
import Particles from "react-tsparticles";

const particlesOpt={
    "particles":{
        "number":{
            "value":150,
            "density":{
                "enable":true,
                "value_area":800
            }
        }
    }
}
const myImage = {
    backgroundImage: `url(${myImg})`,
};

const Main = () => {

    return (
        <div id='main' className={s.mainBlock}>
            <Particles className={s.particles} options={particlesOpt}/>
            <div className={`${styleConteiner.container} ${s.container}`}>
                <div className={s.content}>
                    <Slide direction={'left'} duration={2000}>
                    <div className={s.myMainPhotoAndButton}>
                        <Tilt options={{max:25}}>
                            <div className={s.myImgWrapper}>
                                <div className={s.myImg} style={myImage}></div>
                            </div>
                        </Tilt>



                        <a className={s.resumeButton} href={'#'}>
                            Download Resume
                        </a>

                    </div>
                </Slide>
                    <Slide direction={'right'} duration={2000}>
                        <div className={s.aboutMe}>

                            <h2 className={s.title}>
                                ABOUT ME
                            </h2>

                            <p>
                                Hello! I’m Tagaeva Nargiza. Frontend Developer with over 2+ year of experience.
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
                                Location: </span>
                                    Russia, Moscow.
                                </li>
                                <li>
                                    <span>PHONE: </span>
                                    +79804234944
                                </li>
                                <li>
                            <span>
                                  E-MAIL: </span>
                                    ada.tagaeva.92@gmail.com
                                </li>
                            </ul>
                        </div>
                    </Slide>

                </div>


            </div>
        </div>
    );
};

export default Main;