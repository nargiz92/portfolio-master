import React from 'react';
import s from './Skill.module.scss';
import {Fade, Slide} from "react-awesome-reveal";


type SkillPropsType = {
    title: string,
    description: string
}
const Skill = (props: SkillPropsType) => {
    return (
        <div className={s.timelineBlock}>
            <div className={s.timelineBlockImg}>
                <span className={s.dot}></span>
            </div>
            <div className={s.timelineContent}>
                <Slide direction={'left'}>
                    <div className={s.headingWowForFadeInLeft}>
                        <h2>
                            {props.title}
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing.
                        </p>
                    </div>

                </Slide>
             <Slide direction={'right'}>
                 <span className={s.descriptionWowForFadeInLeft}>
                   {props.description}
                    </span>
             </Slide>



            </div>
        </div>

    );
};

export default Skill;