import chlft from "../../img/chleft.svg"
import chrgt from "../../img/chright.svg"
import "./style.css"

const carrcontent = require('./carrcontent.json')
let textoCarrossel = carrcontent[0].texto

    function Carrossel(){
return(

        <div className="carrossel" id="carrossel" >
            
            <button type="button" onClick={()=>false} className="btn-carrossel">
                <img src={chlft} id="chevleft" className="chevleft"/>
            </button>
            
            <div className="vcarr">
                <img src={`${process.env.PUBLIC_URL}/img/${carrcontent[0].url}`} className="currentimage" id="currentimage"/>
                <p className="carrtext" id="carrtext">
                    {textoCarrossel}
                </p>
            </div>
            <button type="button" onClick={()=>false} className="btn-carrossel">
                <img src={chrgt}  id="chevright"className="chevright"/>
            </button>
            
        </div>
    )
}

export default Carrossel