import React from 'react';
import style from './Resume.module.scss'
import {ResumeContent} from "./ResumeColumn/ResumeContent";
import {educationDetails, experienceDetails} from "./ResumeData";
import {TitleB} from "../../common/titleB/TitleB";

export const Resume = () => {
    return (
        <section id={'resume'} className={style.section}>
            <div className={style.container}>
                <TitleB title={'Резюме'} bgTitle={'Summary'}/>
                <div className={style.content}>
                    <div className={style.colEducation}>
                        <h2>
                            My Education
                        </h2>
                        {educationDetails.length > 0 &&
                            educationDetails.map((value, index) => (
                                <ResumeContent  key={index} yearRange={value.yearRange} title={value.title} place={value.place}
                                               desc={value.desc}/>
                            ))}
                    </div>
                    <div className={style.colEducation}>
                        <h2>
                            My Experience
                        </h2>
                        {experienceDetails.length > 0 &&
                            experienceDetails.map((value, index) => (
                                <ResumeContent key={index} yearRange={value.yearRange} title={value.title} place={value.place}
                                               desc={value.desc}/>
                            ))}
                    </div>


                </div>

            </div>

        </section>
    );
};
