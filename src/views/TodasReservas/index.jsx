import {React, Component} from "react";
import PageConstructor from "../../Components/PageConstructor";
import garagem from "../../img/garagem.svg";
import seta from "../../img/seta.svg";
import bancoDeDados from "../../bancosjson/bdfull-teste.json";
import "./style.css";

class TodasReservas extends Component {

  bookingStatus = () => {
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

  render() {
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
        <section className="containers" id="reservaFutura">
          <div>
            <p>AG. 01 SP - 31/12/2021 - 15H00</p>
            <p>FOX 2020 - FXH 0E51</p>
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
        </section>
        <section className="containers reservaEmAndamento">
          <div>
            <p>AG. 05 GO - 05/12/2021 - 15H00 </p>
            <p>GOL 2020 - MLK 0875</p>
          </div>
          <div>
            <p>
              <img src={seta} className="seta" alt="seta" />
            </p>
            <p>R$ 1500,00</p>
          </div>
          <div>
            <p>AG. 01 SP 31/12/2021 - 15H00</p>
            <div className="botaoContainer">
              <button className="alterar">Alterar</button>
            </div>
          </div>
        </section>

        <section className="containers reservaPassada">
          <div>
            <p>AG. 05 GO - 05/12/2021 - 15H00</p>
            <p>GOL 2020 - MLK 0875</p>
          </div>
          <div>
            <p>
              <img src={seta} className="seta" alt="seta" />
            </p>
            <p>R$ 700,00</p>
          </div>
          <div>
            <p>AG. 01 SP 31/12/2021 - 15H00</p>
          </div>
        </section>
        <section className="containers reservaPassada">
          <div>
            <p>AG. 05 GO - 05/12/2021 - 15H00</p>
            <p>GOL 2020 - MLK 0875</p>
          </div>
          <div>
            <p>
              <img src={seta} className="seta" alt="seta" />
            </p>
            <p>R$ 700,00</p>
          </div>
          <div>
            <p>AG. 01 SP 31/12/2021 - 15H00</p>
          </div>
        </section>
      </main>
    </PageConstructor>
  </>
  );
  }
  }

  export default TodasReservas;