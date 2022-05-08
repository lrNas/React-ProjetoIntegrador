import "./style.css"
import seta from "../../img/seta.svg"
// const veiculos = require("../../bancosjson/veiculos.json")
// const reservas = require("../../bancosjson/reservas.json")
// const locadoras = require("../../bancosjson/locadoras.json")

function Resultados(props){
    /**
     * <Resultados localRetirada={localRetirada} localEntrega={localEntrega} 
        dataRetirada={dataRetirada} dataEntrega={dataEntrega}
        horarioRetirada={horarioRetirada} horarioEntrega={horarioEntrega}/>
     */

    /** Transformar props.dataRetirada + props.horarioRetirada em var momentoRetirada */
    /** Transformar props.dataEntrega + props.horarioEntrega em var momentoEntrega */
    /** Filtrar carros que estão no no local de retirada selecionado */
    /** Filtrar array de reservas pela ID dos carros no local de retirada */
    /** Filtrar array das reservas dos carros específicos para checar se 
     * há alguma reserva conflitando com o momentoRetirada e 
     * momentoEntrega (intervalo de 5 horas entre cada locação do veículo) */

    
    return (
        <div className="resultados">
            <div class="retirada-entrega">
                <h2>Local de retirada</h2>
                <h2>Local de entrega</h2>
            </div>
            {/**Componentizar cada container? */}
            <section class="containers" id="reservaFutura">
                <div>
                    <p>AG. 01 SP - 31/12/2021 - 15H00</p>
                    <p>FOX 2020 - FXH 0E51</p>
                </div>
                <div>
                    <p><img src={seta} class="seta" alt="Seta para a direita" /></p>
                    <p>R$ 600,00</p>
                </div>
                <div>
                    <p>AG. 05 RJ 05/01/2022 - 15H00</p>
                    <div class="botaoContainer">
                        <button>Alterar</button>
                        <button>Cancelar</button>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Resultados