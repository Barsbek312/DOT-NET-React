function Header() {
    return(
        <header className="header">
            <div className="container container__header">
                <div className="header__left">
                    <button className="header__left_btn">
                        <object type="image/svg+xml" data="images/DOT-NOTE new logo Trancparent with dark 2.svg">
                            <img src="images/DOT-NOTE new logo Trancparent with dark 2.png" alt="format png"/>
                        </object>
                    </button>
                    <a href="https://www.google.ru/"><h3 className="header__left_title">DOT-NET<span className="header__left_text">Digital Online Topics</span></h3></a>
                    <h4 className="header__left_link">Homepage</h4>
                </div>
                <h1 className="header__title">About Us</h1>
                <div className="header__right">
                    <form action="" className="header__form">
                        <button className="header__form_btn" type="submit"><img className="header__form_img" src="images/Group 2.png" alt=""/></button>
                        <input className="header__form_input" type="text" placeholder="Искать здесь..."/>
                    </form>
                    <button className="header__login">Log in</button>
                    <button className="header__register">Register</button>
                    <button id="theme-button" className="header__register"><img src="" alt="registerBtn"/></button>
                </div>
            </div>
            <nav className="navbar">
                <div className="navbar-container container">
                    <input type="checkbox" name="" id=""/>
                    <div className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                    <ul className="menu-items">
                        <h1 className="header__title mini__homepage">About Us</h1>
                        <li className="menu-items_item"><h4 className="header__left_link mini__about-us">Homepage</h4></li>
                        <li className="menu-items_item"><form action="" className="header__form">
                            <button className="header__form_btn" type="submit"><img className="header__form_img" src="images/Group 2.png" alt=""/></button>
                            <input className="header__form_input mini__input" type="text" placeholder="Искать здесь..."/>
                        </form></li>
                        <li className="menu-items_item"><button className="header__login">Log in</button></li>
                        <li className="menu-items_item"><button className="header__register">Register</button></li>
                        <li className="menu-items_item"><button id="theme-btn" className="header__register">White</button></li>
                    </ul>
                    <h1 className="header__title">About Us</h1>
                    <div className="header__left">
                        <button id="btn__onclick" className="header__left_btn">
                            <object type="image/svg+xml" data="/images/DOT-NOTE new logo Trancparent with dark 2.svg">
                                <img src="images/DOT-NOTE new logo Trancparent with dark 2.png" alt="format png"/>
                            </object>
                        </button>
                        <h3 className="header__left_title">DOT-NET<span className="header__left_text">Digital Online Topics</span></h3>
                        <h4 className="header__left_link">Homepage</h4>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;