import "./style.css"
import seta from "../../img/seta.svg"

function formataNumero(num){
    if(num>=10){
        return num;
    }
    return `0${num}`
    
}

function formataData(data){
    let date = new Date(data);
    let string = `${formataNumero(date.getDate())}/${formataNumero(date.getMonth()+1)}/${date.getFullYear()} - ${formataNumero(date.getHours())}:${formataNumero(date.getMinutes())} `
    return string;
}

function Resultados(props){

    let resultados = []
    resultados.push(...props.resultados); 
    return (
        <div className="resultados">
            <div className="retirada-entrega">
                <h2>Local de retirada</h2>
                <h2>Local de entrega</h2>
            </div>
            {resultados.map((resultado,index)=>{ return (<section className="containers" id={`reservaFutura${index}`} key={index}>
                                        <div>
                                            <p>{resultado.ag_retirada.nome} - {formataData(resultado.data_retirada)}</p>
                                            <p>{resultado.nome_veiculo} - {resultado.placa_veiculo}</p>
                                        </div>
                                        <div>
                                            <p><img src={seta} className="seta" alt=" - Para - " /></p>
                                            <p>{resultado.valor_total}</p>
                                        </div>
                                        <div>
                                            <p>{resultado.ag_destino.nome} - {formataData(resultado.data_devolucao)}</p>
                                            <div className="botaoContainer">
                                                <button>Reservar!</button>
                                                {/* Desabilitar esse botão acima se deslogado, 
                                                ou direcionar para login/criação de conta,
                                                 se logado, habilitado */}
                                            </div>
                                        </div>
                                    </section>)})
            }
            
            
            

        </div>
    )
}

export default Resultados