import './styles.css'

function Card(props){
    return(
        <div className="padrao">
        <img src={props.imgurl} />
        <a id="titulo">{props.title}</a>
        <a id="descricao">{props.descricao}</a>
        <a id="preco">{props.price}</a>
        </div>
    )
}
 export default Card