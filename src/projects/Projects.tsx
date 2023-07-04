import React from 'react';
import s from "./Projects.module.scss";
import styleConteiner from "../common/style/Conteiner.module.scss";
import Project from "./project/Project";
import {Title} from "../common/component/title/Title";
import todoIcon from "../assets/image/todoIcon.jpeg"
import socialIcon from "../assets/image/socialNetwork.jpeg"
import crmIcon from "../assets/image/crm.jpeg"
import {Fade} from "react-awesome-reveal";

const Projects = () => {
    const social = {
        color: 'blue',
        backgroundImage: `url(${socialIcon})`,
    };
    const todolist = {
        color: 'blue',
        backgroundImage: `url(${todoIcon})`,
    };
    const fridayProject = {
        color: 'blue',
        backgroundImage: `url(${crmIcon})`,
    };
    return (
        <div id ="projects" className={s.projectsBlock}>
            <div className={`${styleConteiner.container} ${s.projectsContainer}`}>
                <Title text={'Projects'}/>
                <Fade cascade delay={200} duration={2000}>
                    <div className={s.projects}>

                        <Project style={todolist} title={'Todolist'}
                                 description={'Lorem gughgjhgh hjhgjghjghg hghjgh'}/>
                        <Project style={social} title={'Social network'}
                                 description={'hjghgfg gfghfhgfjhg hgjhgjh xsdsdffdghhv '}/>
                        <Project style={fridayProject} title={'Counter'}
                                 description={'hjghgfg gfghfhgfjhg hgjhgjh xsdsdffdghhv '}/>

                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Projects;