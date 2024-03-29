import React from 'react';
import s from './Skill.module.scss';
import { Slide} from "react-awesome-reveal";


type SkillPropsType = {
    title: string,
    description: string
    titleDescription: string
}
const Skill = (props: SkillPropsType) => {
    return (
        <div className={s.timelineBlock}>
            <div className={s.timelineBlockImg}>
                <span className={s.dot}></span>
            </div>
            <div className={s.timelineContent}>
                <Slide triggerOnce={true} direction={'left'} duration={2000} delay={100}>
                    <div className={s.headingWowForFadeInLeft}>
                        <h2>
                            {props.title}
                        </h2>
                        <p>
                            {props.titleDescription}
                        </p>
                    </div>

                </Slide>
             <Slide triggerOnce={true} direction={'right'} duration={2000} delay={100}>
                 <span className={s.descriptionWowForFadeInLeft}>
                   {props.description}
                    </span>
             </Slide>



            </div>
        </div>

    );
};

export default Skill;