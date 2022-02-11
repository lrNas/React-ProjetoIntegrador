import React, { useState } from 'react';
import PageConstructor from '../../Components/PageConstructor';
import './styles.css'

function Contatos() {
    return (
        
        <PageConstructor >
        <div className="App">
        <main className="section">
            <div id="overlay">
                <div className="message">
                    <h2> Mensagem enviada com sucesso!</h2>
                    <button> Ok</button>
                </div>
            </div>
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
                            <input type="text" className="size4" name="nome" id="nome" required />
                        </div>
                        <div className="formshdivs">
                            <label id="emailContato"> E-mail:</label>
                            <input type="email" className="size4" name="email" id="emailContato" required />
                        </div>
                        <div className="formshdivs">
                            <label id="mensagem"> Mensagem:</label>
                            <textarea className="size4" ></textarea>
                        </div>
                    </div>
                </div>
                <div className="formsbuttons">
                    <button>Cancelar</button>
                    <button>Enviar</button>
                </div>
                
            </form>
        </main>
        </div>
        </PageConstructor>
    )
}
export default Contatos