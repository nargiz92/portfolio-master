
import linkedin from '../../assets/image/forFooter/linkedin-svgrepo-com.svg'
import React from 'react';
import s from './Footer.module.scss';


const Footer = () => {

    return (
        <div className={s.block}>

            <svg>
                <use fill={'#8491a2'}  href={`${linkedin}#linkendIn`}/>

            </svg>
            <svg>
                <use fill={'#8491a2'} href={`${linkedin}#github`}/>
            </svg>
            <svg>
                <use fill={'#8491a2'} href={`${linkedin}#telegram`}/>
            </svg>
            <svg>
                <use fill={'#8491a2'} href={`${linkedin}#codewars`}/>
            </svg>

        </div>
    );
};

export default Footer;