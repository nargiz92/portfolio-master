import React from 'react';
import s from './Nav.module.scss'

const Nav = () => {
    return (
        <div className={s.nav}>
            <a href="">HOME</a>
            <a href="">SKILLS</a>
            <a href="">PROJECTS</a>
            <a href="">CONTACT</a>
        </div>
    );
};

export default Nav;