import React from 'react';
import s from "./Footers.module.css";
import styleConteiner from "../common/style/Conteiner.module.css";
import Footer from "./footer1/Footer";
import linkedin from './../assets/image/forFooter/linkedin-svgrepo-com.svg'
import telegram from './../assets/image/forFooter/telegram-svgrepo-com.svg'
import codewars from './../assets/image/forFooter/brand-codewars-svgrepo-com.svg'
import github from './../assets/image/forFooter/github-svgrepo-com.svg'

const li = {
    color: '#02cfb4',
    backgroundImage: `url(${linkedin}`
}
const tl = {
    color: '#02cfb4',
    backgroundImage: `url(${telegram}`
}
const cd = {
    color: '#02cfb4',
    backgroundImage: `url(${codewars}`
}
const gitH = {
    color: '#02cfb4',
    backgroundImage: `url(${github}`
}
const Footers = () => {
    return (
        <div className={s.footersBlock}>
            <div className={`${styleConteiner.container} ${s.footersContainer}`}>
                <div className={s.footers}>

                    <Footer style={li}/>
                    <Footer style={tl}/>
                    <Footer style={cd}/>
                    <Footer style={gitH}/>

                    <div className={s.copyrighteAreaText}>

                        <p>
                            2023 ALL RIGHT RESERVED
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footers;