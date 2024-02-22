import React from 'react';
import s from './Project.module.scss';

type ProjectPropsType = {
    style: any
    title:string
    description:string
    view:string
}
const Project = (props: ProjectPropsType) => {
    return (
        <div className={s.projectBlock}>

            <div className={s.img} style={props.style}>

            </div>
            <div className={s.textOfProject}>
                <h4 className={s.projectTitle}>{props.title}</h4>
                <span className={s.description}>{props.description}</span>
                <a className={s.button} href={props.view}>View </a>
            </div>
        </div>
    );
};

export default Project;