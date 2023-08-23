import React, { useState } from "react";
import logoHeader from '../../Assets/logobranca.svg';
import imgTriangulo from '../../Assets/trianguloMenu.svg';

const Header = () => {
    const [header, setHeader] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 80){
            setHeader(true);
        } else {
            setHeader(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    return (
        <header className={header ? "header active" : "header"}>
            <div className="container">
                <div className="logoContainer">
                    <a href="/">
                        <div className="logo"></div>
                    </a>
                </div>

                <nav>
                    <ul className="menuContainer">
                        <li>
                            <a href="#" className="link">Para você</a>
                            <img src={imgTriangulo}/>
                        </li>
                        <li>
                            <a href="#" className="link">Para seu negócio</a>
                            <img src={imgTriangulo}/>
                        </li>
                    </ul>
                </nav>

                <button className="btnConta">Abra sua conta</button>
            </div>
        </header>
    )
}

export default Header;