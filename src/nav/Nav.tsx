import React, {useState} from 'react';
import s from './Nav.module.scss'
import {Link, animateScroll as scroll} from "react-scroll"

const Nav = () => {
    const[menuIsOpen, setBergerMenu]=useState(false)
  const onBurgerBtnClick = () => {
    setBergerMenu(!menuIsOpen)
  }
    return (
        <div className={s.nav}>
            <div className={menuIsOpen?`${s.burgerNavItems} ${s.show}`:s.burgerNavItems}>
            <Link
                activeClass={s.active}
                to='main'
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
            >
                Home
            </Link>
            <Link
                activeClass={s.active}
                to='skills'
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
            >
                Skills
            </Link>
            <Link
                activeClass={s.active}
                to='projects'
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
            >
                Projects
            </Link>
            <Link activeClass={s.active}
                  to='contacts'
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
            >Contact</Link>
            </div>
                <div onClick={onBurgerBtnClick} className={s.burgerBtn}>
                    <span></span>
                </div>

        </div>
    );
};

export default Nav;