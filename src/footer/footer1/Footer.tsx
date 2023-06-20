import React from 'react';
import s from './Footer.module.css';

type FooterIconType={
    style:any
}

const Footer = (props:FooterIconType) => {
    return (
        <div className={s.block}>
            <ul className={s.footersIcon}>
                <li>
                    <a>
                        <i className={s.logo} style={props.style}>

                        </i>
                    </a>
                </li>

            </ul>
        </div>
    );
};

export default Footer;