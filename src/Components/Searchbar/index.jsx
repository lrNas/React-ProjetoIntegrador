import "./styles.css"
import garage from "../../img/garagem.svg"
import buscar from "../../img/busca.svg"
import { useState } from "react"
import Carrossel from "../Carrossel"
import Resultados from "../Resultados"


function buscarVeiculos(){
    
    console.log("Teste")
    
}

function Searchbar (){
    const [showResults, setShowResults] = useState(false)
    const [localRetirada,setLocalRetirada] = useState("")
    const [localEntrega,setLocalEntrega] = useState("")
    const [dataRetirada,setDataRetirada] = useState("")
    const [dataEntrega,setDataEntrega] = useState("")
    const [horarioRetirada,setHorarioRetirada] = useState("")
    const [horarioEntrega,setHorarioEntrega] = useState("")
    

        return (
        <>
        <form name="searchbar">
            <div className="searchbar">
                <div className="searchbar-v">
                    <img src={garage} alt="Icone de garagem" className="garicon"/> 
                </div>
                <div className="searchbar-h">
                    <div className="searchbar-v">
                        <input className="searchbar-item size3" type="text" name="localRetirada" value={localRetirada} onChange={local=>setLocalRetirada(local.target.value)} id="localRetirada" placeholder="Digite aqui o local de retirada"/>
                        <input className="searchbar-item size2" type="date" name="diaRetirada" value={dataRetirada} onChange={data=>setDataRetirada(data.target.value)} id="diaRetirada" placeholder="Dia da retirada"/>
                        <input className="searchbar-item size1" type="time" name="horarioRetirada" value={horarioRetirada} onChange={horario=>setHorarioRetirada(horario.target.value)} id="horarioRetirada" placeholder="Horário da retirada"/>
                    </div>
                    <div className="searchbar-v">
                        <input className="searchbar-item size3" type="text" name="localEntrega" value={localEntrega} onChange={local=>setLocalEntrega(local.target.value)} id="localEntrega" placeholder="Digite aqui o local de entrega"/>
                        <input className="searchbar-item size2" type="date" name="diaEntrega" value={dataEntrega} onChange={data=>setDataEntrega(data.target.value)} id="diaEntrega" placeholder="Dia da devolução"/>
                        <input className="searchbar-item size1" type="time" name="horarioEntrega" value={horarioEntrega} onChange={horario=>setHorarioEntrega(horario.target.value)}  id="horarioEntrega" placeholder="Horário da retirada"/>
                    </div>
                </div>
                {/*LINK ABAIXO SOMENTE PARA DEMONSTRAÇÃO, O BOTÃO BUSCAR NÂO FUNCIONARA POR A HREF !!!!*/}
                <button type="button" className="searchbar-button" id="buscaveiculo" onClick={()=>{buscarVeiculos(); setShowResults(true)}}> Buscar<img src={buscar} alt="Buscar"className="buscaicon"/> </button>
            </div>
        </form>
        
        { showResults ? 
        <Resultados localRetirada={localRetirada} localEntrega={localEntrega} 
        dataRetirada={dataRetirada} dataEntrega={dataEntrega}
        horarioRetirada={horarioRetirada} horarioEntrega={horarioEntrega}/>:
         <Carrossel/>  
         }
        

        </>
    )
}

export default Searchbar