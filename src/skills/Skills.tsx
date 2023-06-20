import React from 'react';
import s from './Skills.module.css';
import styleConteiner from './../common/style/Conteiner.module.css'
import Skill from "./skill/Skill";
import {Title} from "../common/component/title/Title";


const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleConteiner.container} ${s.skillsContainer}`}>
                <Title text={'Skills'}/>
                <div className={s.skills}>
                    <div className={s.skillsIcon}>
                        <div className={s.timeline}>
                            {/*single line skils*/}
                            <Skill title={'React'}
                                   description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                            <Skill title={'Redux'}
                                   description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '}/>
                            <Skill title={'Redux Toolkit'}
                                   description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '}/>
                            <Skill title={'Type Script'}
                                   description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '}/>
                            <Skill title={'JS'}
                                   description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '}/>
                            <Skill title={'SASS'}
                                   description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Skills;