/**Colocar alts para imagens */
import { useState,useEffect } from "react"
import chlft from "../../img/chleft.svg"
import chrgt from "../../img/chright.svg"
import "./style.css"

let count = 0
const carrcontent = require('./carrcontent.json')

function Carrossel(){
    const [texto,setTexto] = useState(carrcontent[count].texto)
    const [image,setImage] = useState(`${process.env.PUBLIC_URL}/img/${carrcontent[count].url}`)
    function nextImage(){
        count++
        if(count>=carrcontent.length){
            count=0
        }
        setImage(`${process.env.PUBLIC_URL}/img/${carrcontent[count].url}`)
        setTexto(carrcontent[count].texto)
    
    }
    function previousImage(){
        count--
        if(count<0){
            count=carrcontent.length-1
        }
        setImage(`${process.env.PUBLIC_URL}/img/${carrcontent[count].url}`)
        setTexto(carrcontent[count].texto)
        
    }
    /**O método abaixo é pra garantir o intervalo funcionando bem */
    useEffect(()=>{
        const interval = 
        setInterval(nextImage,5000)
        return () => clearInterval(interval)

        }
    )
    
    
    return(
        <div className="carrossel" id="carrossel" >
            
            <button type="button" onClick={()=>previousImage()} className="btn-carrossel">
                <img src={chlft} id="chevleft" className="chevleft" alt="Anterior"/>
            </button>
            
            <div className="vcarr">
                <img src={image} className="currentimage" id="currentimage" alt="Veículo ilustrativo"/>
                <p className="carrtext" id="carrtext">
                    {texto}
                </p>
            </div>
            <button type="button" onClick={()=>nextImage()} className="btn-carrossel">
                <img src={chrgt}  id="chevright"className="chevright" alt="Próximo"/>
            </button>
            
        </div>
    )
}

export default Carrossel