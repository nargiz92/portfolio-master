import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import linkedin from '../../assets/image/forFooter/linkedin-svgrepo-com.svg'
// import linkedin from '../../assets/image/forFooter/linkedin-svgrepo-com.svg'
import React from 'react';
import s from './Footer.module.scss';
import {faTelegram} from "@fortawesome/free-brands-svg-icons/faTelegram";
type FooterType={
    style:any
}
const Footer = () => {

    return (
        <div className={s.block}>
            {/*<ul className={s.footersIcon}>*/}
            {/*    /!*<li>*!/*/}
            {/*<img src={linkedin}/>*/}
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
            {/*<a href={'#'} style={props.style}></a>*/}

                        {/*/!*<FontAwesomeIcon icon={faLinkedIn}  />*!/*/}
                        {/*<FontAwesomeIcon icon={faTelegram} />*/}
                        {/*<FontAwesomeIcon icon={faGitHub} />*/}
                        {/*<i className={s.logo} style={props.style}>*/}

                        {/*</i>*/}
                {/*    </a>*/}
                {/*</li>*/}

            {/*</ul>*/}
        </div>
    );
};

export default Footer;