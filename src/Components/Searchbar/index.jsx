import "./styles.css"
import garage from "../../img/garagem.svg"
import buscar from "../../img/busca.svg"



function Searchbar (){
    return (
        <form name="searchbar">
            <div class="searchbar">
                <div class="searchbar-v">
                    <img src={garage} alt="Icone de garagem" class="garicon"/> 
                </div>
                <div class="searchbar-h">
                    <div class="searchbar-v">
                        <input class="searchbar-item size3" type="text" name="localRetirada" id="localRetirada" placeholder="Digite aqui o local de retirada"/>
                        <input class="searchbar-item size2" type="date" name="diaRetirada" id="diaRetirada" placeholder="Dia da retirada"/>
                        <input class="searchbar-item size1" type="time" name="horarioRetirada" id="horarioRetirada" placeholder="Horário da retirada"/>
                    </div>
                    <div class="searchbar-v">
                        <input class="searchbar-item size3" type="text" name="localEntrega" id="localEntrega" placeholder="Digite aqui o local de entrega"/>
                        <input class="searchbar-item size2" type="date" name="diaEntrega" id="diaEntrega" placeholder="Dia da devolução"/>
                        <input class="searchbar-item size1" type="time" name="horarioEntrega" id="horarioEntrega" placeholder="Horário da retirada"/>
                    </div>
                </div>
                {/*LINK ABAIXO SOMENTE PARA DEMONSTRAÇÃO, O BOTÃO BUSCAR NÂO FUNCIONARA POR A HREF !!!!*/}
                <button type="button" class="searchbar-button" id="buscaveiculo"> Buscar<img src={buscar} alt="Buscar"class="buscaicon"/> </button>
            </div>
        </form>
    )
}

export default Searchbar