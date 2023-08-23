import React from "react";
import infoIconCard from "../../Assets/card.svg";
import infoIconTransferencia from "../../Assets/transferir.svg";
import infoIconDeposito from "../../Assets/deposito.svg";
import infoIconAtendimento from "../../Assets/atendimento.svg";
import cartoes from "../../Assets/cartoes.png";

const Tariffs = () => {
    return (
        <section className="sTariffs">
            <div className="contentRight">
                <div className="top">
                    <h3 className="topTitle">Sem tarifas:</h3>
                    <h3 className="topSubtitle">economize seu dinheiro</h3>
                </div>

                <div className="contentInfo">
                    <div className="infoTarifa">
                        <img src={infoIconCard}  alt="" title="ícone card" className="iconInfo"/>
                        <div className="infoTextContainer">
                            <h4 className="infoTitle">Saques nos caixas da <br /> rede Banco24Horas</h4>
                            <p className="infoSubtitle">São mais de 23 mil caixas em 680 municípios do Brasil. Saques ilimitados sem cobrança de tarifa.</p>
                        </div>
                    </div>
                    <div className="infoTarifa">
                        <img src={infoIconTransferencia}  alt="" title="ícone card" className="iconInfo iconInfoSecond"/>
                        <div className="infoTextContainer">
                            <h4 className="infoTitle">Transferências e <br /> TEDs ilimitadas</h4>
                            <p className="infoSubtitle">Movimente seu dinheiro para qualquer conta em qualquer banco sem pagar nada por isso.</p>
                        </div>
                    </div>
                    <div className="infoTarifa">
                        <img src={infoIconDeposito}  alt="" title="ícone card" className="iconInfo iconInfoSecond"/>
                        <div className="infoTextContainer">
                            <h4 className="infoTitle">Depósito por boleto</h4>
                            <p className="infoSubtitle">Emita boletos grátis e traga dinheiro para a sua conta C6 sem pagar tarifas.</p>
                        </div>
                    </div>
                    <div className="infoTarifa">
                        <img src={infoIconAtendimento}  alt="" title="ícone card" className="iconInfo iconInfoSecond"/>
                        <div className="infoTextContainer">
                            <h4 className="infoTitle">Atendimento 24h</h4>
                            <p className="infoSubtitle">Conte com a gente 24h por dia, 7 dias por semana pelo chat do app.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contentLeft">
                <img src={cartoes} alt="Imagem cartões" className="imgCartoes"/>
            </div>
        </section>
    )
}

export default Tariffs;