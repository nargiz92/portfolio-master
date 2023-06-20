import React from 'react';
import s from './Contacts.module.css';
import styleConteiner from "../common/style/Conteiner.module.css";
import Project from "../projects/project/Project";
import Contact from "./contact/Contact";
import {Title} from "../common/component/title/Title";

const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${styleConteiner.container} ${s.contactsContainer}`}>
                <Title text={'Contact me'}/>
                <div className={s.contacts}>
                    <Contact />

                </div>
            </div>
        </div>
    );
};

export default Contacts;