import React from "react";
import logoHeader from '../../Assets/logobranca.svg';
import imgTriangulo from '../../Assets/trianguloMenu.svg';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="logoContainer">
                    <a href="/">
                        <img src={logoHeader} alt="Logo do site" title="Logo do site" className="logo"/>
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



{/* <div className="infoTarifa">
    <img src={infoIcon}  alt="" title="ícone card" className="iconInfo"/>
    <div className="infoTextContainer">
        <h4 className="infoTitle">Saques nos caixas da rede Banco24Horas</h4>
        <p className="infoSubtitle">São mais de 23 mil caixas em 680 municípios do Brasil. Saques ilimitados sem cobrança de tarifa.</p>
    </div>
</div> */}

{/* <div className="top">
    <h3 className="topTitle">Sem tarifas:</h3>
    <h3 className="topSubtitle">economize seu dinheiro</h3>
</div> */}