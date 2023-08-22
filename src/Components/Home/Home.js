import React from "react";

const Home = () => {
    return (
        <section className="home">
            <div className="container">
                <div className="contentHome">
                    <div className="contentTop">
                        <span className="new">Novo</span>
                        <span className="secondSpan">Conheça nosso Programa de Pontos Átomos</span>
                    </div>

                    <div className="contentBottom">
                        <h1 className="title">Um banco transparente, completo e com a sua cara</h1>
                        <p className="text">Conta digital e cartão de crédito gratuitos. Saques e transferências sem tarifa.</p>
                        <button className="btnConta">Nossos produtos</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;