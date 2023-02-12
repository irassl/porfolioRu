import React from 'react';
import style from './Home.module.scss'

import intro from "../../assets/images/intro-bg.jpg";
import Typewriter from "typewriter-effect";
import {Link} from "react-scroll";
import {ChevronDownIcon} from "@primer/octicons-react";

export const Home = () => {
    const social = {
        backgroundImage: 'url(' + intro + ')'
    }
    return (
        <section id='home'>
            <div className={style.homeWrap}>
                <div className={style.homeMask}/>
                <div className={style.homeBg} style={social}
                ></div>
                <div className={style.homeContent}>
                    <div className={style.homeContainer}>
                        <div className={style.homeRow}>
                            <div className={style.column}>
                                <p className={style.contentWelcome}>Приветствую</p>
                                <h2 className={style.contentName}>
                                    <Typewriter
                                        options={{
                                            strings: [
                                                "Я Ризвано Расул.",
                                                "Я Frontend-разработчик.",
                                            ],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </h2>
                                <p className={style.contentLocation}>
                                    Нахожусь в Уфе, республика Башкортостан.
                                </p>
                                <Link
                                    to="contacts"
                                    smooth={true}
                                    spy={true}
                                    duration={500}
                                    offset={-80}
                                    activeClass={'active'}
                                    className={style.btnContact}
                                    onClick={() => {
                                        // e.preventDefault();
                                        // handleNavClick("contact");
                                    }}
                                >
                                   Связатся со мной
                                </Link>
                            </div>

                        </div>

                    </div>

                </div>
                <a
                    href={'#about'}
                    className={style.scrollDownArrow}
                    onClick={() => {
                    }}
                >

            <span className={style.animated}>
                <ChevronDownIcon size={24}/>

            </span>
                </a>

            </div>

        </section>
    );
};
