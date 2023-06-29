import React from 'react';
import s from "./Footers.module.scss";
import styleConteiner from "../common/style/Conteiner.module.scss";
import Footer from "./footer1/Footer";


const Footers = () => {
    return (
        <div className={s.footersBlock}>
            <div className={`${styleConteiner.container} ${s.footersContainer}`}>
                <div className={s.footers}>
                    <Footer/>
                </div>
                <hr/>
                <div className={s.copyrighteAreaText}>
                    <p>
                        2023 ALL RIGHT RESERVED
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footers;