import React from 'react';
import s from './Skills.module.scss';
import styleConteiner from '../common/style/Conteiner.module.scss'
import Skill from "./skill/Skill";
import {Title} from "../common/component/title/Title";



const Skills = () => {
    return (
        <div id='skills' className={s.skillsBlock}>
            <div className={`${styleConteiner.container} ${s.skillsContainer}`}>
                <Title text={'Skills'}/>
                <div className={s.skills}>
                    <div className={s.skillsIcon}>
                        <div className={s.timeline}>
                            <Skill title={'JS/TS'}
                                   titleDescription={`Strong understanding of ES6+ features.`}
                                   description={'SOLID,Async functions,Promise,Async-await,Event-Loop,This; TypeScript: Migrate projects from JS to TS... '}/>
                            <Skill title={'HTML/CSS'} titleDescription={`Semantic HTML,Landing Pages,Forms.`}
                                   description={'CSS3,Sass/Less,CSS-Modules,Material-UI,Radix-UI'}/>
                            <Skill title={'React'}
                                   titleDescription={`Building modern, reusable UI components with React.`}
                                   description={'Creating flexible and customizable UI components with Polymorph.SPA,Functional/Class components,Hooks,React-router-dom'}/>
                            <Skill title={'Redux'} titleDescription={`State management using Redux for scalable applications.`}
                                   description={'Implementation of actions, reducers, and middleware.Redux-thunk,HOC,Selectors,Principles of Flux... '}/>

                            <Skill title={' Next.js'} titleDescription={`Building server-side rendered (SSR) and static websites with Next.js.`}
                                   description={'Utilizing Next.js for optimized routing and API handling. '}/>
                            <Skill title={' Testing and Debugging'} titleDescription={`Writing unit tests`}
                                   description={'tdd, JEST, snapshot'}/>
                            <Skill title={' Rest API'} titleDescription={`Consuming RESTful APIs for data integration.`}
                                   description={'Axios library,CRUD-operations...'}/>
                            <Skill title={' Storybook'} titleDescription={`Developing and documenting UI components in isolation.`}
                                   description={'Creating a component library for consistent design patterns.'}/>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Skills;