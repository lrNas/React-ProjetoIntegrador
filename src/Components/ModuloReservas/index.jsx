import { React, Component, useState, useEffect } from "react";
import garagem from "../../img/garagem.svg";
import seta from "../../img/seta.svg";
import axios from "axios";
import "./style.css";
import Resultados from "../Resultados";

export default function ModuloReservas() {
    const [Loc, setLocadora] = useState('')
    const [renavam, setRenavam] = useState('')
    const [placa, setPlaca] = useState('')
    const [kmRodado, setKmRodado] = useState('')
    const [custoDiaria, setCustoDiaria] = useState('')
    const [status, setStatus] = useState('')
    const [locadoraAtual, setLocadoraAtual] = useState('')
    const [locadoraProprietaria, setLocadoraProprietaria] = useState('')
    const [overlay, setOverlay] = useState(false)
    const [nomeLocadoras, setNomeLocadoras] = useState([])


    const removeDoubleElements = (list) => [...list.filter((item, index) => list.indexOf(item) === index)];

    useEffect(() => {        
        resolveProblema()
    }, []);
    
    function resolveProblema(){
        getReservas()
    }
    
    async function getReservas() {
        try {
            const resposta = await axios.get("http://localhost:3030/reserva")
            let idlocadoras = []
            let locadorasAux = []
            let placa = []
            let modelo = []
            let veiculo = []
            resposta.data.map(data => {
                idlocadoras.push(data.fk_id_local_entrega)
                idlocadoras.push(data.fk_id_local_retirada)
                veiculo.push(data.fk_id_veiculo)
            })
            veiculo = removeDoubleElements(veiculo)
            veiculo.forEach(async (veiculo) => {
                const vei = await axios.get(`http://localhost:3030/veiculo/${veiculo}`)
                placa.push(vei.data[0].placa)
                modelo.push(vei.data[0].modelo)
            }       ) 
            idlocadoras = removeDoubleElements(idlocadoras)
            idlocadoras.forEach(async (locadora) => {
                const locadoras = await axios.get(`http://localhost:3030/locadora/${locadora}`)
                resposta.data.map(data => {
                    if (data.fk_id_veiculo == modelo.indexOf){
                    locadoras.data[0].modelo = modelo[0]
                    locadoras.data[0].placa =  placa[0]}
                })
                
                locadorasAux.push(locadoras.data[0])
                setNomeLocadoras([...locadorasAux])
            }    
            
            )
        } catch (err) {
            console.log(err)
        }
    }

    return (
    <>
        {nomeLocadoras.map((item) => {
                return (
                    <li className="containers" id="reservaFutura" key={item.id}>
                        <div>
                            <p>{item.nome} - 31/12/2021 - 15H00</p>
                            <p>{item.modelo} - {item.placa}</p>
                        </div>
                        <div>
                            <p>
                                <img src={seta} className="seta" alt="seta" />
                            </p>
                            <p>R$ 600,00</p>
                        </div>
                        <div>
                            <p>AG. 05 RJ 05/01/2022 - 15H00</p>
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
