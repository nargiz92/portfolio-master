
import linkedin from '../../assets/image/forFooter/linkedin-svgrepo-com.svg'
import React from 'react';
import s from './Footer.module.scss';


const Footer = () => {
// const onClickLink=(link)=>{
//
// }
    return (
        <div className={s.block}>
<a href={`https://www.linkedin.com/in/nargiz-tagaeva-1979811a7/`}>
            <svg >
                <use fill={'#8491a2'}  href={`${linkedin}#linkendIn`}/>
            </svg>
</a>
           <a href={`https://github.com/nargiz92`}>
            <svg>
                <use fill={'#8491a2'} href={`${linkedin}#github`}/>
            </svg>
           </a>
            <a href={`https://web.telegram.org/k/`}>
            <svg>
                <use fill={'#8491a2'} href={`${linkedin}#telegram`}/>
            </svg>
            </a>
            <a href={`https://www.codewars.com/users/nargiza01`}>
            <svg>
                <use fill={'#8491a2'} href={`${linkedin}#codewars`}/>
            </svg>
            </a>
        </div>
    );
};

export default Footer;