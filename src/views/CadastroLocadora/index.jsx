import React, { useState } from 'react';
import PageConstructor from '../../Components/PageConstructor';
import './styles.css'

function CadastroLocadora() {
    const [nomeUnidade, setNomeUnidade] = useState('')
    const [email, setEmail] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [telefone, setTelefone] = useState('')
    const [cep, setCep] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [rua, setRua] = useState('')
    const [complemento, setComplemento] = useState('')
    const [overlay, setOverlay] = useState(false)

    return (
        <>
            <PageConstructor>
                <div className="App">
                    <main className="section">
                        {
                            overlay ? <div id="overlay">
                                <div className="message">
                                    <h2 style="color:#414D92"> Cadastro realizado com sucesso!</h2>
                                    <button onClick={setOverlay(false)}> Ok</button>
                                </div>
                            </div>
                                : ""
                        }
                        <h1>
                            Cadastro do Locadora
                        </h1>
                        <form name="dadosLocadora">
                            <div className="forms">
                                <h2>Dados da Locadora</h2>
                                <div className="formshdivs">
                                    <div className="formsvdivs">
                                        <label htmlFor="unidade"> Nome da Unidade:</label>
                                        <label htmlFor="email"> E-mail:</label>
                                        <label htmlFor="cnpj"> CNPJ:</label>
                                        <label htmlFor="telefone"> Telefone:</label>
                                    </div>
                                    <div className="formsvdivs">
                                        <input type="text" name="unidade" id="unidade" value={nomeUnidade} onChange={event => setNomeUnidade(event.target.value)} required />
                                        <input type="email" name="emailLocadora" id="emailLocadora" value={email} onChange={event => setEmail(event.target.value)} required />
                                        <input type="number" maxlength="18" name="cnpj" id="cnpj" value={cnpj} onChange={event => setCnpj(event.target.value)} required />
                                        <input type="tel" name="telefone" id="telefone" value={telefone} onChange={event => setTelefone(event.target.value)} required />
                                    </div>
                                </div>
                            </div>
                            <div className="forms">
                                <h2>Endereço</h2>
                                <div className="formshdivs">
                                    <div className="formsvdivs">
                                        <div className="formshdivs">
                                            <label htmlFor="cep"> CEP:</label>
                                            <input type="number" maxlength="10" name="cep" id="cep" value={cep} onChange={event => setCep(event.target.value)} required />
                                        </div>
                                        <div className="formshdivs">
                                            <label htmlFor="cidade"> Cidade:</label>
                                            <input type="text" name="cidade" id="cidade" value={cidade} onChange={event => setCidade(event.target.value)} required />
                                        </div>
                                    </div>
                                    <div className="formsvdivs">
                                        <div className="formshdivs"> <label></label></div>
                                        <div className="formshdivs">
                                            <label htmlFor="estado">Estado:</label>
                                            <input type="text" maxlength="2" name="estado" id="estado" value={estado} onChange={event => setEstado(event.target.value)} required />
                                        </div>
                                    </div>
                                </div>
                                <div className="formsvdivs">
                                    <div className="formshdivs">
                                        <label htmlFor="rua"> Rua:</label>
                                        <input type="text" className="size4" maxlength="2" name="rua" id="rua" value={rua} onChange={event => setRua(event.target.value)} required />
                                    </div>
                                    <div className="formshdivs">
                                        <label htmlFor="complemento" >Complemento:</label>
                                        <input type="text" className="size4" name="complemento" id="complemento" value={complemento} onChange={event => setComplemento(event.target.value)} required />
                                    </div>
                                </div>
                            </div>
                            <div className="formsbuttons">
                                <button>Cancelar</button><button>Salvar</button>
                            </div>
                        </form>
                    </main>
                </div>
            </PageConstructor>
        </>
    )
}

export default CadastroLocadora