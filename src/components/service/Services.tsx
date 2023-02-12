import React from 'react';
import style from './Services.module.scss'
import {TitleB} from "../../common/titleB/TitleB";

import react from '../../assets/serviceImages/logos_react.png'
import redux from '../../assets/serviceImages/logos_redux.png'
import ts from '../../assets/serviceImages/logos_typescript.png'
import js from '../../assets/serviceImages/logos_javascript.png'

export const Services = () => {
    const initialSkills = [react, redux, js, ts]
    // const initialOtherSkills = [
    //
    //     { url: bootstrap, title: "Bootstrap" },
    //     { url: css3, title: "CSS" },
    //     { url: html5, title: "HTML" },
    //     { url: mui, title: "Material UI" },
    //     { url: axios, title: "Axios" },
    //     { url: flux, title: "FLUX" },
    //     { url: git, title: "GIT" },
    //     { url: hook, title: "Hooks" },
    //     { url: npm, title: "npm" },
    //     { url: rest, title: "REST" },
    //     { url: scss, title: "SCSS" },
    //     { url: tdd, title: "TDD" },
    //     { url: thunk, title: "Redux-thunk" },
    //     { url: unit, title: "Unit tests" },
    //     { url: yarn, title:  "yarn" },
    // ]
    return (
        <section id='services' className={style.bgDark}>
            <div className={style.container}>
                <TitleB title={' Что я могу сделать?'} bgTitle={'Services'}/>
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
                {/*<div className={style.content}>*/}
                {/*    <div className={style.contentCol}>*/}
                {/*        <ul className={style.otherSkill}>*/}
                {/*            {initialSkills.map((s, i) => (*/}
                {/*                <li className={style.skill}>*/}
                {/*                    <img  src={s} alt=""/>*/}
                {/*                </li>*/}
                {/*            ))}*/}
                {/*        </ul>*/}

                {/*    </div>*/}
                {/*</div>*/}
            </div>

        </section>
    );
};
{/*    <div className={style.contentBox}>*/
}
{/*        {services.length > 0 && services.map((service,index)=>(*/
}
{/*            <Service key={index} icon={service.icon} name={service.name} desc={service.desc}/>*/
}
{/*        ))}*/
}

{/*</div>*/
}