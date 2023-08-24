import React from "react";
import imgPague from "../../Assets/aproxime.svg";
import imgCelular from "../../Assets/celular.svg";
import imgCardBlack from "../../Assets/cardBlack.svg";
import logoBusiness from "../../Assets/logoBusiness.svg";

const Banco = () => {
    return (
        <section className="sBanco">
            <div className="container">
                <div className="topContent">
                    <div className="top">
                        <h3 className="topTitle">Um banco completo</h3>
                        <h3 className="topSubtitle">com produtos exclusivos</h3>
                    </div>
                    <div className="btns">
                        <button className="btnBanco btnParaVoce">
                            Para você
                        </button>
                        <button className="btnBanco btnParaEmpresa">
                            Para sua empresa
                        </button>
                    </div>
                </div>
                <div className="bottomContent">
                    <div className="bottomContentRight">
                        <h4 className="title">Conta com cartão <br/>C6 Business</h4>
                        <p className="subtitle">A conta MEI é completa e não tem tarifa de manutenção. Além disso, você pode ter um cartão de crédito sem anuidade.</p>
                        <p className="aproximePague">
                            <img src={imgPague} alt="" className="imgPague"/>
                            <span>Aproxime e pague</span>
                        </p>
                    </div>

                    <div className="bottomContentLeft">
                        <div className="imgCards">
                            <img src={imgCardBlack} alt="" className="imgCardBlack"/>
                            <img src={imgCelular} alt="" className="imgCelular"/>
                        </div>
                        <div className="logo">
                            <img src={logoBusiness} alt="" className="logoBusiness"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banco;