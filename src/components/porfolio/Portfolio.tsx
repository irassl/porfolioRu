import React, {useState} from 'react';
import style from './Portfolio.module.scss'
import {AnimatePresence} from "framer-motion";
import { motion } from "framer-motion"
import {projectsData} from "./ProjectsData";
import {TitleB} from "../../common/titleB/TitleB";
import {ProjectDetail} from "../../common/projectDetail/ProjectDetail";


export const Portfolio = () => {
    const [selectedId, setSelectedId] = useState<string >('')
    const [selectedProjectDetails, setSelectedProjectDetails] = useState<any>();
    const handleOpenPopup = (id: string) => {
        const project = projectsData.find((item)=>item.id === id)
        setSelectedProjectDetails(project)
        setSelectedId(id)
    }
    const handleClosePopup = () => {
        setSelectedId('')
    }
    return (
        <>
            <section id="portfolio" className={style.section}>
                <div className={style.container}>
                    <TitleB title={'Мои проекты'} bgTitle={'Portfolio'}/>
                    <div className={style.portfolio}>


                    <div className={style.portfolioFilter}>
                        {projectsData.length > 0 &&
                            projectsData.map((project,index)=>(
                                <motion.div key={index}  className={style.project}  layoutId={project.id} onClick={() => handleOpenPopup(project.id)} >
                                 <div className={style.projectBox}>
                                     <div className={style.projectBoxImg}>
                                         <img src={project.thumbImage} className={style.boxImg} />
                                         <div className={style.projectBoxOverlay}>
                                             {/*<motion.a*/}
                                             {/*    className={style.stretchedLink}*/}
                                             {/*    href=""*/}
                                             {/*    // onClick={() => {*/}
                                             {/*    //     setSelectedProjectDetails(projectsData[index]);*/}
                                             {/*    // }}*/}
                                             {/*    // onClick={() => {*/}
                                             {/*    //     setSelectedProjectDetails(projectsData[index]);*/}
                                             {/*    // }}                                                 // data-bs-toggle="modal"*/}
                                             {/*    // data-bs-target="#exampleModal"*/}
                                             {/*/>*/}
                                             <div className={style.projectBoxOverlayDetails}>
                                                 <h5>{project.title}</h5>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                                </motion.div>
                            ))
                        }

                    </div>

                    </div>
                </div>

                    <AnimatePresence>
                        {selectedId && (
                            <ProjectDetail  selectedId={selectedId} closePopup={handleClosePopup} project={selectedProjectDetails} />
                        )}
                    </AnimatePresence>

            </section>


        </>
    );
};

