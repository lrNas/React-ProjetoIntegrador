import { React, Component, useState, useEffect } from "react";
import garagem from "../../img/garagem.svg";
import seta from "../../img/seta.svg";
import axios from "axios";
import "./style.css";
import Resultados from "../Resultados";

export default function ModuloReservas() {
    const [cards, setCard] = useState([])
    const removeDoubleElements = (list) => [...list.filter((item, index) => list.indexOf(item) === index)];

    useEffect(() => {        
        getReservas()
    }, []);
    
    async function getReservas() {
        try {
            
            let cardsaux = [];

            const resposta = await axios.get("http://localhost:3030/reserva")
            resposta.data.map(async (data) => {
                let card = {
                    "id":"",
                    "modelo":"",
                    "valor":"",
                    "placa_veiculo":"",
                    "ag_retirada":"",     
                    "ag_destino":"",           
                    "data_retirada":"",
                    "data_devolucao":""
                 };
                card.id = data.id
                card.valor = data.valor
                card.data_retirada = data.data_retirada
                card.data_devolucao = data.data_entrega

                const localretirada = await axios.get(`http://localhost:3030/locadora/${data.fk_id_local_retirada}`)
                card.ag_retirada = localretirada.data[0].nome

                const localentrega = await axios.get(`http://localhost:3030/locadora/${data.fk_id_local_entrega}`)
                card.ag_destino = localentrega.data[0].nome

                const vei = await axios.get(`http://localhost:3030/veiculo/${data.fk_id_veiculo}`)
                card.modelo = vei.data[0].modelo
                card.placa_veiculo = vei.data[0].placa    

                cardsaux.push(card)                
                setCard([...cardsaux])  
                console.log(cardsaux)              
            })            
            
            
        } catch (err) {
            console.log(err)
        }
    }

    return (
    <>
        {cards.map((item) => {
                return (
                    <li className="containers" id="reservaFutura" key={item.id}>
                        <div>
                            <p>{item.ag_retirada} - {item.data_retirada}</p>
                            <p>{item.modelo} - {item.placa_veiculo}</p>
                        </div>
                        <div>
                            <p>
                                <img src={seta} className="seta" alt="seta" />
                            </p>
                            <p>R$ {item.valor}</p>
                        </div>
                        <div>
                            <p>{item.ag_destino} - {item.data_devolucao}</p>
                            <div className="botaoContainer">
                                <button>Alterar</button>
                                <button>Cancelar</button>
                            </div>
                        </div>
                    </li>
                )
            })
        }
    </>
    )

}
