import React from 'react';
import s from "./Projects.module.scss";
import styleConteiner from "../common/style/Conteiner.module.scss";
import Project from "./project/Project";
import {Title} from "../common/component/title/Title";
import todoIcon from "../assets/image/Flash-Cards.jpg"
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

                        <Project style={todolist} title={'CardsIQ'} view={`https://cards-iq.vercel.app`}
                                 description={'CARDSIQ is an application that helps you learn anything. It allows you to create, manage, and study flashcards efficiently, making the learning process fun and interactive.'}/>
                        <Project style={social} title={'INCTA'} view={`https://incta.online/ru/public-page`}
                                 description={'INCTA is a social network that is developed on NextJS with a microservice architecture. This application implements the functionality of Instagram, where users have the opportunity to create various publications, stories, leave comments and likes, subscribe to other users, take part in chats and messages. '}/>
                        <Project style={fridayProject} title={'TaskCraft'} view={`https://github.com/nargiz92/TaskCraft`}
                                 description={'TaskCraft - Your Masterpiece in Task Management. Craft your daily agenda with precision and creativity using our intuitive and powerful task management app. '}/>

                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Projects;