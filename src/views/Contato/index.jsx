import React, { useState } from 'react';
import PageConstructor from '../../Components/PageConstructor';
import './styles.css'
import axios from 'axios';

function Contatos() {
    const [overview,setOverview]= useState("")
    const [nome,setNome]= useState("")
    const [email,setEmail]= useState("")
    const [mensagem,setMensagem]= useState("")
    const content = <div id="overlay">
    <div className="message">
        <h2> Mensagem enviada com sucesso!</h2>
        <button onClick={()=>setOverview("")}> Ok</button>
    </div>
    </div>

    //  Incompleto pois vou verificar com o grupo sobre o BD
    const sendContatos = async () => {
        const contatos = {nome_completo:nome, email: email, conteudo: mensagem}
        try {
            const resposta = await axios.post("http://localhost:3030/mensagem", contatos)
            alert(resposta.data)
            setNome("")
            setEmail("")
            setMensagem("")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        
        <PageConstructor >
            {overview}
        <div className="App">
        <main className="section">
            
            <form name="contato">
                <h1>Contato</h1>
                <p>Tem alguma dúvida? Veja nossa página de perguntas frequentes!
                    Não resolveu? Entre em contato
                    conosco  no <a href="" className="href">Instagram</a>, 
                    <a href="" className="href">Twitter</a>,    <a href="" className="href">Facebook</a>, 
                    ou <a href="" className="href">Whatsapp</a> ou preencha o formulário abaixo!
                </p>
                <div className="formcontato forms">
                    <div className="formsvdivs">
                        <div className="formshdivs">
                            <label id="nome" > Nome Completo:</label>
                            <input type="text" className="size4" name="nome" id="nome" value={nome} onChange={event => setNome(event.target.value)} required />
                        </div>
                        <div className="formshdivs">
                            <label id="emailContato"> E-mail:</label>
                            <input type="email" className="size4" name="email" id="emailContato" value={email} onChange={event => setEmail(event.target.value)} required />
                        </div>
                        <div className="formshdivs">
                            <label id="mensagem"> Mensagem:</label>
                            <textarea className="size4" value={mensagem} onChange={event => setMensagem(event.target.value)}></textarea>
                        </div>
                    </div>
                </div>
                <div className="formsbuttons">
                    <button>Cancelar</button>
                    <button onClick={()=>[setOverview(content), sendContatos()]}>Enviar</button>
                </div>
                
            </form>
        </main>
        </div>
        </PageConstructor>
    )
}
export default Contatos