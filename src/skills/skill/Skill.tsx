import React from 'react';
import s from './Skill.module.css';
import skillsIcon from '../Skills.module.css'

type SkillPropsType = {
    title: string,
    description: string
}
const Skill = (props: SkillPropsType) => {
    return (
        <div className={` ${s.timelineBlock}`}>
            <div className={s.timelineBlockImg}>
                <span className={s.dot}></span>
            </div>
            <div className={s.timelineContent}>
                <div className={s.headingWowForFadeInLeft }>
                    <h2>
                        {props.title}
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </p>
                </div>
                <span className={s.descriptionWowForFadeInLeft}>
                   {props.description}
                                     </span>

            </div>
        </div>

    );
};

export default Skill;