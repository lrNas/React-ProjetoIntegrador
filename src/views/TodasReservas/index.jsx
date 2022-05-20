import {React, Component, useEffect} from "react";
import PageConstructor from "../../Components/PageConstructor";
import garagem from "../../img/garagem.svg";
import seta from "../../img/seta.svg";
import bancoDeDados from "../../bancosjson/bdfull-teste.json";
import axios from "axios";
import "./style.css";
import ModuloReservas from "../../Components/ModuloReservas";

export default function TodasReservas(){

  
 
  const bookingStatus = () => {
    let data = new Date();
    let date = data.toLocaleDateString("pt-br");
    let dia = parseInt(date.split("/")[0]);
    let mes = parseInt(date.split("/")[1]);
    let ano = parseInt(date.split("/")[2]);

    for (let i = 0; i < bancoDeDados.length; i++) {
      for (let r = 0; r < bancoDeDados[i].reservas.length; r++)

      {
        for (let l = 0; l < bancoDeDados[i].locadoras.length; l++) {
          for (let v = 0; v < bancoDeDados[i].veiculos.length; v++) {
            let diaBanco = parseInt(bancoDeDados[i].reservas[r].dataEntrega.split("/")[0]);
            let mesBanco = parseInt(bancoDeDados[i].reservas[r].dataEntrega.split("/")[1]);
            let anoBanco = parseInt(bancoDeDados[i].reservas[r].dataEntrega.split("/")[2]);
            if (dia > diaBanco && mes > mesBanco && ano > anoBanco) {
              return console.log(`${diaBanco}/${mesBanco}/${anoBanco}`);
            }
          }
        }
      }
    }
  };

  return (
  <>
    <PageConstructor>
    <main className="section">
    <h1>Todas Reservas</h1>
            <div id="formsFiltrar" className="forms formsFiltrar">
                <form id="filtros" name="filtros">
                    <div className="formshdivs">
                        <div className="formsvdivs">
                            <h2>Filtrar</h2>
                            <img src={garagem} alt="garagem" id="garagem" />
                        </div>
                        <div className="formsvdivs">
                            <div className="formshdivs">
                                <div className="formsvdivs">
                                    <input className="searchbar-item-size3" placeholder="Nome / E-mail do Locatário" type="text" />
                                </div>
                            </div>
                            <div className="formshdivs">
                                <div className="formsvdivs">
                                    <input className="searchbar-item-size3" type="text" name="" id=""
                                        placeholder="Digite Aqui o Local de Retirada" />
                                    <input className="searchbar-item-size3" type="text" name="" id=""
                                        placeholder="Digite Aqui o Local de Entrega" />
                                </div>
                                <div className="formsvdivs">
                                    <input className="searchbar-item" type="date" name="" id="" placeholder="Dia da Retirada" />
                                    <input className="searchbar-item" type="date" name="" id="" placeholder="Dia da Devolução" />
                                </div>

                                <div className="formsvdivs">
                                    <input className="searchbar-item" type="time" name="" id="" placeholder="Horário da Retirada" />
                                    <input className="searchbar-item" type="time" name="" id="" placeholder="Horário da Devolução" />
                                </div>
                            </div>
                            <div className="botaoContainer todasReservas">
                                <input type="checkbox" name="ocultarencerradas" id="ocultarencerradas" />
                                <label for="ocultarencerradas">
                                    Ocultar Reservas Encerradas
                                </label>
                                <button>Buscar</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
      <ModuloReservas>
        
      </ModuloReservas>
      </main>
    </PageConstructor>
  </>
  );
  
  }