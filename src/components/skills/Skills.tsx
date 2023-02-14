import React from 'react';
import style from './Services.module.scss'
import {TitleB} from "../../common/titleB/TitleB";

import react from '../../assets/serviceImages/logos_react.png'
import redux from '../../assets/serviceImages/logos_redux.png'
import ts from '../../assets/serviceImages/logos_typescript.png'
import js from '../../assets/serviceImages/logos_javascript.png'

import bootstrap from '../../assets/serviceImages/other/bootstrap.png'
import css3 from '../../assets/serviceImages/other/css.png'
import html5 from '../../assets/serviceImages/other/html.png'
import mui from '../../assets/serviceImages/other/material-ui.png'
import axios from '../../assets/serviceImages/other/axios.png'
import flux from '../../assets/serviceImages/other/flux.png'
import git from '../../assets/serviceImages/other/git.png'
import hook from '../../assets/serviceImages/other/hook.png'
import rest from '../../assets/serviceImages/other/rest.png'
import scss from '../../assets/serviceImages/other/scss.png'
import thunk from '../../assets/serviceImages/other/thunk.png'
import unit from '../../assets/serviceImages/other/unit.png'

export const Skills = () => {
    const initialSkills = [react, redux, js, ts]
    const initialOtherSkills = [
        { url: html5, title: "HTML" },
        { url: css3, title: "CSS" },
        { url: scss, title: "SCSS" },
        { url: mui, title: "Material UI" },
        { url: bootstrap, title: "Bootstrap" },
        { url: flux, title: "FLUX" },
        { url: git, title: "GIT" },
        { url: rest, title: "REST" },
        { url: axios, title: "Axios" },
        { url: thunk, title: "Redux-thunk" },
        { url: hook, title: "Hooks" },
        { url: unit, title: "Unit tests" },
    ]
    return (
        <section id='services' className={style.bgDark}>
            <div className={style.container}>
                <TitleB title={' Что я могу сделать?'} bgTitle={'Skills'}/>
                <div className={style.content}>
                    <div className={style.contentCol}>
                        <ul className={style.mySkills}>
                            {initialSkills.map((s, i) => (
                                    <li className={style.skill} key={i}>
                                        <img  src={s} alt=""/>
                                    </li>
                                ))}
                        </ul>

                    </div>
                </div>
                <div className={style.content}>
                    <div className={style.contentCol}>
                        <ul className={style.mySkills} style={{margin: "40px 0 0 0"}}>
                            {initialOtherSkills.map((s, i) => (
                                <li className={style.otherSkill} key={i}>
                                    <img  src={s.url} alt=""/>
                                    <h4>{s.title}</h4>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
            </div>

        </section>
    );
};
{/*    <div className={style.contentBox}>*/
}
{/*        {services.length > 0 && services.map((serviceImages,index)=>(*/
}
{/*            <Service key={index} icon={serviceImages.icon} name={serviceImages.name} desc={serviceImages.desc}/>*/
}
{/*        ))}*/
}

{/*</div>*/
}