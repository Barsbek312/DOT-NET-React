import AboutUsStyles from './AboutUs.module.scss';

function AboutUs() {
    return (
    <>
        <main className={AboutUsStyles.main}>
            <div id="id01" className={AboutUsStyles.modal}>
                <span onclick="document.getElementById('id01').style.display='none'"
                className={AboutUsStyles.close} title="Close Modal">&times;</span>
            
                <div className={AboutUsStyles.modal__container} id="container-modal">
                    <form className={AboutUsStyles.modal__content.animate} action="">
                        <h3 className={AboutUsStyles.modal__content__title}>Login</h3>
                        <label for="uname"><b>Username or e-mail</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required/>
                        <label for="psw"><b>Password:</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required/>
                        <div className={AboutUsStyles.modal__content__links}>
                            <a href="#">Forgot password?</a>
                            <a href="#">Registration</a>
                        </div>
                        <div className={AboutUsStyles.modal__content__btns}>
                            <button type="button" onclick="document.getElementById('id01').style.display='none'" className={AboutUsStyles.cancelbtn}>Cancel</button>
                            <button type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className={AboutUsStyles.container}>
                <div className={AboutUsStyles.section__explain}>
                    <h1 className={AboutUsStyles.main__title}>DOT
                        <object className={AboutUsStyles.main__logo} type="image/svg+xml" data="images/a6wjk-qqp2i.svg">
                            <img src="images/DOT-NOTE new logo Trancparent inly inside 1 (1).png" alt="image format png"/>
                        </object>
                        NET
                    </h1>
                    <h4 className={AboutUsStyles.main__subtitle}>НАУЧНО-КОММЕРЧЕСКАЯ ОБРАЗОВАТЕЛЬНАЯ ПЛАТФОРМА</h4>
                    <h2 className={AboutUsStyles.section__explain_title}>ЧТО ТАКОЕ DOT-NET?</h2>
                    <p className={AboutUsStyles.section__explain_par}>DOT-NET - Платформа для изучения научных знаний, а также обучения будущих сотрудников различных компаний на самые разные должности,  начиная от управляющего менеджера, заканчивая агентом по недвижимости</p>
                    <img src="images/DOT-NET Illustration white line.png" alt="image" className={AboutUsStyles.section__explain_img}/>
                </div>
                <div className={AboutUsStyles.section__advantages}>
                    <div className={AboutUsStyles.advantages__top}>
                        <div className={AboutUsStyles.advantages__top_left}>
                            <h3 className={AboutUsStyles.advantages__top_title}>МЫ МОЖЕМ ПРЕДЛОЖИТЬ</h3>
                            <p className={AboutUsStyles.advantages__top_begin}>Все курсы направлены на сразу несколько видов восприятия информации:</p>
                            <ul className={AboutUsStyles.advantages__top_list}>
                                <li className={AboutUsStyles.advantages__top_item}>Удиальный</li>
                                <li className={AboutUsStyles.advantages__top_item}>Текстовый</li>
                                <li className={AboutUsStyles.advantages__top_item}>Графический</li>
                                <li className={AboutUsStyles.advantages__top_item}>Практический</li>
                                <li className={AboutUsStyles.advantages__top_item}>Визуальный</li>
                            </ul>
                            <p className={AboutUsStyles.advantages__top_end}>Благодаря этому, достинается наиболее эфективный способ изучения информации.</p>
                        </div>
                        <div className={AboutUsStyles.advantages__top_right}>
                            <img src="images/IMG_0298 1 (1).png" alt="image" className={AboutUsStyles.advantages__top_img}/>
                        </div>
                    </div>
                    <div className={AboutUsStyles.advantages__bottom}>
                        <div className={AboutUsStyles.advantages__bottom_left}>
                            <img src="images/IMG_0297 1.png" alt="image" className={AboutUsStyles.advantages__bottom_img}/>
                        </div>
                        <div className={AboutUsStyles.advantages__bottom_right}>
                            <h3 className={AboutUsStyles.advantages__bottom_title}>ПОЧЕМУ DOT-NET?</h3>
                            <p className={AboutUsStyles.advantages__bottom_par}>DOT-NET создан для того, чтобы превратить визуальное обучение в основной инструмент для освоения любой проффесии.
                                Важно помнить, что в 21 веке людям намного легче усваивать новую информацию не большими сплошными текстами, а порционно, с иллюстрациями и практическими примерами. 
                                Предоставлением этой многогранной информации и занимается наша компания.</p>
                        </div>
                    </div>
                </div>
                <div className={AboutUsStyles.section__results} id="section__results-id">
                    <ul className={AboutUsStyles.section__results_list}>
                        <li className={AboutUsStyles.section__results_item} id="results_item-id">
                            <div className={AboutUsStyles.section__results_icon}></div>
                            <div className={AboutUsStyles.number}>145</div>
                            <span className={AboutUsStyles.section__results_text}>Доступных курсов профессий</span>
                        </li>
                        <li className={AboutUsStyles.section__results_item}>
                            <div className={AboutUsStyles.section__results_icon}></div>
                            <div className={AboutUsStyles.number}>234675</div>
                            <span className={AboutUsStyles.section__results_text}>Текущих пользователей</span>
                        </li>
                        <li className={AboutUsStyles.section__results_item}>
                            <div className={AboutUsStyles.section__results_icon}></div>
                            <div className={AboutUsStyles.number}>56</div>
                            <span className={AboutUsStyles.section__results_tex}>Зарегистрированных компаний</span>
                        </li>
                    </ul>
                </div>  
                <div className={AboutUsStyles.section__qualities}>
                    <h3 className={AboutUsStyles.section__qualities_title}>НАШИ ПРЕИМУЩЕСТВА:</h3>
                    <ul className={AboutUsStyles.section__qualities_list}>
                        <li className={AboutUsStyles.section__qualities_item}>
                            <h4 className={AboutUsStyles.qualities__item_title.first__title}>ГИБКИЙ ГРАФИК</h4>
                            <img src="images/image 10.png" alt="image" className={AboutUsStyles.qualities__item_img}/>
                            <p className={AboutUsStyles.qualities__item_par}>Учитесь в любой день и в любое время!
                                Выберите собственный темп обучения. Вы всегда можете зайти на сайт, в независимости от выходных или праздников </p>
                        </li>
                        <li className={AboutUsStyles.section__qualities_item}>
                            <h4 className={AboutUsStyles.qualities__item_title.second__title}>ГДЕ УГОДНО</h4>
                            <img src="images/image 10 (1).png" alt="image" className={AboutUsStyles.qualities__item_img}/>
                            <p className={AboutUsStyles.qualities__item_pa}>Не важно где вы сейчас находитесь, главное иметь доступ в интернет. DOT-NET дает возможнось изучать материал из любой точки мира!</p>
                        </li>
                        <li className={AboutUsStyles.section__qualities_item}>
                            <h4 className={AboutUsStyles.qualities__item_title.third__title}>ПРОФФЕСИОНАЛИЗМ</h4>
                            <img src="images/image 10 (2).png" alt="image" className={AboutUsStyles.qualities__item_img}/>
                            <p className={AboutUsStyles.qualities__item_par}>Благодаря DOT-NET, вы получите профессиональные навыки или научные знания напрямую от профессионалов. Вы можете повысить квалификацию без больших потерь времени и сил!</p>
                        </li>
                        <li className={AboutUsStyles.section__qualities_item}>
                            <h4 className={AboutUsStyles.qualities__item_title.fourth__title}>ЭТО ПРОЩЕ</h4>
                            <img src="images/image 8.png" alt="image" className={AboutUsStyles.qualities__item_img}/>
                            <p className={AboutUsStyles.qualities__item_pa}>Благодаря гибридной методике обучения, каждый может получить достоверную информацию легко и просто. Таким образом, изучение информации может быть не только полезным, но и интересным!</p>
                        </li>
                    </ul>
                </div>
                <div className={AboutUsStyles.section__team}>
                    <h3 className={AboutUsStyles.section__team_title}>Наша команда</h3>
                    <ul className={AboutUsStyles.section__team_list}>
                        <li className={AboutUsStyles.team__list_item}>
                            <img src="images/Frame 6.png" alt="image" className={AboutUsStyles.team__list_img}/>
                        </li>
                        <li className={AboutUsStyles.team__list_item}>
                            <img src="images/Frame 5.png" alt="image" className={AboutUsStyles.team__list_img}/>
                        </li>
                        <li className={AboutUsStyles.team__list_item}>
                            <img src="images/Frame 3.png" alt="image" className={AboutUsStyles.team__list_img}/>
                        </li>
                        <li className={AboutUsStyles.team__list_item}>
                            <img src="images/Frame 4.png" alt="image" className={AboutUsStyles.team__list_img}/>
                        </li>
                        <li className={AboutUsStyles.team__list_item}>
                            <img src="images/Frame 9.png" alt="image" className={AboutUsStyles.team__list_img}/>
                        </li>
                        <li className={AboutUsStyles.team__list_item}>
                            <img src="images/Frame 11.png" alt="image" className={AboutUsStyles.team__list_img}/>
                        </li>
                        <li className={AboutUsStyles.team__list_item}>
                            <img src="images/Frame 10.png" alt="image" className={AboutUsStyles.team__list_img}/>
                        </li>
                        <li className={AboutUsStyles.team__list_item}>
                            <img src="images/Frame 8.png" alt="image" className={AboutUsStyles.team__list_img}/>
                        </li>
                        <li className={AboutUsStyles.team__list_item}>
                            <img src="images/Frame 7.png" alt="image" className={AboutUsStyles.team__list_img}/>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
        <footer className={AboutUsStyles.footer}>
            <h3 className={AboutUsStyles.footer__title}>Контакты:</h3>
            <a href="#" className={AboutUsStyles.footer__link}>@dotnoteteam</a>
        </footer>
        <script src="js/jquery-3.6.0.min.js"></script>
        <script type="text/javascript" src="js/jquery-spincrement-master/jquery.spincrement.min.js"></script>
        <script src="js/script.js"></script>
    </>
    );
}

export default AboutUs;