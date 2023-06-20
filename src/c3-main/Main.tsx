import React from 'react';
import s from './Main.module.css'
import styleConteiner from './../common/style/Conteiner.module.css'
import myPhoto from './../assets/image/photo_2022-08-19_16-51-59.jpg'


const MyPhoto = {
    color: 'blue',
    backgroundImage: `url(${myPhoto})`
}

const Main = () => {

    return (
        <div className={s.mainBlock}>
            <div className={`${styleConteiner.container} ${s.container}`}>
                <div className={s.myMainPhotoAndButton}>
                    <div className={s.myImgBlock}>
                        <img className={s.myImg}/>
                    </div>

                    <div className={s.resumeButton}>
                        <a href={'#'}>
                            <i className={s.cloudDownload}>
                            </i>
                            Download Resume
                        </a>
                    </div>
                </div>
                <div className={s.aboutMe}>
                    <div className={s.title}>
                        <h2>
                            ABOUT ME
                        </h2>
                    </div>
                    <p>
                        Hello! I’m Oliver Queen. Web Developer with over 8 years of experience.
                        Experienced with all stages of the development cycle for dynamic web projects.
                        Having an in-depth knowledge including advanced HTML5, CSS3, JavaScript, jQuery, Angular JS.
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
    );
};

export default Main;