import { React, useState, useEffect } from "react";
import seta from "../../img/seta.svg";
import axios from "axios";
import "./style.css";

export default function ModuloReservas() {
    const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul","Ago","Set","Out","Nov","Dez"];
    const [cards, setCard] = useState([])
    //const removeDoubleElements = (list) => [...list.filter((item, index) => list.indexOf(item) === index)];

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
                let data_retirada = new Date(data.data_retirada)
                let data_retirada1 = (data_retirada.getDate() + " " + meses[data_retirada.getMonth()] + " " + data_retirada.getFullYear() + " " + (String(data_retirada.getHours()).padStart(2, '0')) + ":" + (String(data_retirada.getMinutes()).padStart(2, '0')));
                let data_devolucao = new Date(data.data_entrega)
                let data_devolucao1 = (data_devolucao.getDate() + " " + meses[data_devolucao.getMonth()] + " " + data_devolucao.getFullYear() + " " + (String(data_devolucao.getMinutes()).padStart(2, '0')) + ":" + (String(data_devolucao.getMinutes()).padStart(2, '0')));
                card.data_retirada = data_retirada1
                card.data_devolucao = data_devolucao1

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
                            <p>{item.ag_retirada} - Retirada: {item.data_retirada}</p>
                            <p>{item.modelo} - {item.placa_veiculo}</p>
                        </div>
                        <div>
                            <p>
                                <img src={seta} className="seta" alt="seta" />
                            </p>
                            <p>R$ {item.valor}</p>
                        </div>
                        <div>
                            <p>{item.ag_destino} - Entrega: {item.data_devolucao}</p>
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
