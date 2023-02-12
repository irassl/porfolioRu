import React from 'react';
import style from './Abount.module.scss'
import {TitleB} from "../../common/titleB/TitleB";


export const About = () => {
    return (
        <div id={'about'}  className={style.aboutBlock}>
            <div className={style.container}>
                <TitleB title={' Познакомиться со мной поближе'} bgTitle={' About me'}/>
                <div className={style.content}>
                    <div className={style.aboutMe}>
                        <h2>
                            Я <span>Ризванов Расул,</span> Frontend разработчик
                        </h2>
                        <p className={"text-white-50"}>
                            I help you build brand for your business at an affordable price.
                            Thousands of clients have procured exceptional results while
                            working with our dedicated team. when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book.
                        </p>
                        <p className={"text-white-50"}>
                            Delivering work within time and budget which meets client’s
                            requirements is our moto. Lorem Ipsum has been the industry's
                            standard dummy text ever when an unknown printer took a galley.
                        </p>
                    </div>
                    <div className={style.personal}>
                        <div className={style.personalDetail}>
                            <ul>
                                <li>
                                    <span >Имя:</span>Ризванов Расул
                                </li>
                                <li>
                                    <span >Email:</span>
                                    <a href="mailto:rassl.ried@icloud.com">rassl.ried@icloud.com</a>
                                </li>
                                <li>
                                    <span>Возрос:</span>32
                                </li>
                                <li className="border-0">
                                    <span className="fw-600 me-2">Из:</span>Уфа, Башкортостан
                                </li>
                            </ul>
                            <a
                                href={'resumeFile'}
                                download
                                className={style.btn}
                            >
                                Скачать CV
                            </a>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};
