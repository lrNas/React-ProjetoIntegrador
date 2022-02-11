import React, { useState } from 'react';
import PageConstructor from '../../Components/PageConstructor';
import './styles.css'

function Duvidas() {
    return (
        <PageConstructor >
        <div className="App">
            <div className="content">

                <h1>Perguntas Frequentes: </h1>
                <h2>Posso alugar qualquer veículo?</h2>
                <p>
                    Você pode alugar qualquer veículo que for apresentado como resultado da busca.
                </p>
                <h2>
                    Como funciona?
                </h2>
                <p>
                    Você escolhe as datas e horários de origem e destino, e todos os carros
                    disponíveis serão apresentados na busca. Poderá escolher o local e o carro 
                    da sua preferência clicando em alugar. No dia selecionado, precisa apenas se direcionar à agência escolhida e fazer a retirada.
                </p>               
                <h2>
                    Como é feita a cobrança?
                </h2>
                <p> 
                    Você cadastra seu cartão de crédito e toda cobrança será feita diretamente nele.
                </p>
                <h2>
                    Como posso alterar a data de entrega ou destino?
                </h2> 
                <p>
                    Você clica em “Minhas Reservas” e depois em “Alterar” na reserva que
                    quer mudar. Os valores da diferença serão cobrados no cartão que está
                    cadastrado.
                </p>
                <h2>
                    Esse site é real?
                </h2>
                <p>
                    Não, esse site é um projeto integrador, de conteúdos aplicados 
                    em sala de aula na <a href="https://www.digitalhouse.com/">Digital House</a>
                </p>      
            </div>
        </div>
        </PageConstructor>
    )
}
export default Duvidas