import React, { useEffect, useState} from 'react';
import style from './ClassicHeader.module.scss'
import Link from 'react-scroll/modules/components/Link';
import logo from '../../assets/images/logo5.png'
import {SocialIcons} from "../../common/socialIcons/SocialIcons";




export const ClassicHeader = () => {
    const [stickyHeader, setStickyHeader] = useState<boolean>(false);
    const [isNavModalClose, setIsNavModalClose] = useState<boolean>(false);

    useEffect(() => {
        const checkScrollTop = () => {
            let header = document.getElementsByClassName('containerFluid');

            if (header) {
                if (
                    document.body.scrollTop > 180 ||
                    document.documentElement.scrollTop > 180
                ) {
                    setStickyHeader(true);
                } else {
                    setStickyHeader(false);
                }
            }
        };
        window.addEventListener('scroll', checkScrollTop);

        return () => {
            window.removeEventListener('scroll', checkScrollTop);
        }
    }, []);

    return (
        <header id='header' className={style.sticky}>
            <nav className={stickyHeader ? style.containerFixed : style.menu}>
                <div className={style.content}>
                    <div className={style.contentLogo}>
                        <Link
                            smooth
                            duration={500}
                            style={{cursor: "pointer"}}
                            className={style.logo}
                            to="home"
                            title="Rasul"

                        >
                            {"  "}
                            <img src={logo} alt="Rasul"/>{" "}
                        </Link>

                    </div>
                    <div className={style.contentMenu}>
                        <button
                            onClick={() => {
                                setIsNavModalClose(!isNavModalClose);
                            }}
                            className={style.navBtn}
                            type="button">
                            <span/>
                            <span/>
                            <span/>
                        </button>
                        <div id='header-nav' className={isNavModalClose ? style.contentNavRow : style.contentNav}>
                            <ul>
                                <li>
                                    <Link
                                        smooth
                                        duration={500}
                                     //   style={{cursor: "pointer"}}
                                        spy
                                        activeClass={style.activeNav}
                                        to="home"
                                        offset={- 1}
                                        onClick={() => {

                                            setIsNavModalClose(false);
                                        }}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        smooth
                                        duration={500}
                                       // style={{cursor: "pointer"}}
                                        spy
                                        activeClass={style.activeNav}
                                        to="about"

                                        onClick={() => {
                                            setIsNavModalClose(false);
                                        }}
                                    >
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        smooth
                                        duration={500}
                                      //  style={{cursor: "pointer"}}
                                        spy
                                        activeClass={style.activeNav}
                                        to="services"
                                        onClick={() => {

                                            setIsNavModalClose(false);
                                        }}
                                    >
                                        What I Do
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        smooth
                                        duration={500}
                                       // style={{cursor: "pointer"}}
                                        spy
                                        activeClass={style.activeNav}
                                        to="portfolio"

                                        onClick={() => {

                                            setIsNavModalClose(false);
                                        }}
                                    >
                                        Portfolio
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        smooth
                                        duration={500}
                                        // style={{cursor: "pointer"}}
                                        spy
                                        activeClass={style.activeNav}
                                        to="resume"

                                        onClick={() => {
                                            setIsNavModalClose(false);
                                        }}
                                    >
                                        Resume
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        smooth
                                        duration={500}
                                       // style={{cursor: "pointer"}}
                                        activeClass={style.activeNav}
                                        to="footer"

                                        onClick={() => {

                                            setIsNavModalClose(false);
                                        }}
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>

                        </div>


                    </div>
                    <div className={style.iconEnd}>
                        {/*<ul>*/}
                        {/*    <li>*/}
                        {/*        <a*/}
                        {/*            href="http://www.twitter.com/"*/}
                        {/*            target="_blank"*/}
                        {/*            rel="noopener noreferrer"*/}
                        {/*        >*/}
                        {/*            /!*<i className="fab fa-twitter"/>*!/*/}
                        {/*            <FontAwesomeIcon icon={faTwitter} />*/}
                        {/*        </a>*/}
                        {/*    </li>*/}
                        {/*    <li>*/}
                        {/*        <a*/}
                        {/*            href="http://www.twitter.com/"*/}
                        {/*            target="_blank"*/}
                        {/*            rel="noopener noreferrer"*/}
                        {/*        >*/}
                        {/*            /!*<i className="fab fa-twitter"/>*!/*/}
                        {/*            <FontAwesomeIcon icon={faTwitter}/>*/}
                        {/*        </a>*/}
                        {/*    </li>*/}
                        {/*    <li>*/}
                        {/*        <a*/}
                        {/*            href="http://www.twitter.com/"*/}
                        {/*            target="_blank"*/}
                        {/*            rel="noopener noreferrer"*/}
                        {/*        >*/}
                        {/*            /!*<i className="fab fa-twitter"/>*!/*/}
                        {/*            <FontAwesomeIcon icon={faTwitter}/>*/}
                        {/*        </a>*/}
                        {/*    </li>*/}
                        {/*</ul>*/}
                        <SocialIcons/>
                    </div>
                </div>

            </nav>

        </header>
    );
};
