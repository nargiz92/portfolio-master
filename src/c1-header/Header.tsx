import React, {useEffect, useState} from 'react';
import s from './Header.module.scss';
import Nav from "../nav/Nav";


const Header = () => {
    const [isTop, setIsTop] = useState(true)
    useEffect(() => {

        window.onscroll = () => {
            const scrollTopPosition = document.documentElement.scrollTop
            if (scrollTopPosition === 0) {
                setIsTop(true)
            } else {
                setIsTop(false)
            }

        }
    })
    return (
        <div className={`${s.header} ${isTop?s.isTop:''}`}>
            <Nav/>
        </div>
    );
};

export default Header;