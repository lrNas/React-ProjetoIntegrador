import axios from 'axios';
import React, { useState} from "react";
import SelectEstados from '../SelectEstados'

function PageCadastroLocadora() {

    const [nomeUnidade, setNomeUnidade] = useState('')
    const [email, setEmail] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [telefone, setTelefone] = useState('')
    const [cep, setCep] = useState('')
    const [cidade, setCidade] = useState('')
    const [rua, setRua] = useState('')
    const [complemento, setComplemento] = useState('')
    const [overlay, setOverlay] = useState(false)



    const sendLocadora = async () => {
        const locadora = { nome: nomeUnidade, email: email, cnpj: cnpj, telefone: telefone }
        try {
            const resposta = await axios.post("http://localhost:3030/locadora", locadora)
            alert(resposta.data)
            setNomeUnidade("")
            setEmail("")
            setCnpj("")
            setTelefone("")
        } catch (err) {
            console.log(err)
        }
    }

    //Formatação && Validação CNPJ

    //----------------------------------------------

    //Formatação && Validação de Telefone
    let inputLenght = telefone.length
    const formatoPress = () => {
        /* console.log(inputLenght)
        if (inputLenght === 0) {
            setTelefone(telefone + '(')
        } else if (inputLenght === 3) {
            setTelefone(telefone + ') ')
        } else if (inputLenght === 10) {
            setTelefone(telefone + '-')
        } */
    }
    const formatoTel = () => {
        let validarRegExTel = /^1\d\d(\d\d)?$|^0800 ?\d{3} ?\d{4}$|^(\(0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d\) ?|0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d[ .-]?)?(9|9[ .-])?[2-9]\d{3}[ .-]?\d{4}$/
        if (telefone.match(validarRegExTel)) {
        } else if (telefone === "") { }
        else {
            alert("Formato de telefone Inválido")
        }
    }
    //----------------------------------------------

    const cnpjPress = () => {
        let inputLenght = cnpj.length
        if (inputLenght === 2 || inputLenght === 6) {
            setCnpj(cnpj + '.')
        } else if (inputLenght === 10) {
            setCnpj(cnpj + '/')
        } else if (inputLenght === 15) {
            setCnpj(cnpj + '-')
        }
    }

    const cnpjBlur = () => {
        let validarRegExCnpj = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/
        if (cnpj.match(validarRegExCnpj)) {
        } else if (cnpj === "") { }
        else {
            alert("CNPJ Inválido!")
        }
    }


    return (
        <>
            <div className="App">
                <main className="section">
                    {
                        overlay ? <div id="overlay">
                            <div className="message">
                                <h2 className="corCadastro"> Cadastro realizado com sucesso!</h2>
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
                                    <input type="text" maxLength="18" name="cnpj" id="cnpj" value={cnpj} onChange={event => setCnpj(event.target.value)} required onKeyPress={cnpjPress} onBlur={cnpjBlur} />
                                    <input type="tel" maxLength="20" name="telefone" id="telefone" value={telefone} onChange={event => setTelefone(event.target.value)} onBlur={formatoTel} onKeyPress={formatoPress} required />
                                </div>
                            </div>
                        </div>
                        <div className="forms">
                            <h2>Endereço</h2>
                            <div className="formshdivs">
                                <div className="formsvdivs">
                                    <div className="formshdivs">
                                        <label htmlFor="cep"> CEP:</label>
                                        <input type="number" maxLength="10" name="cep" id="cep" value={cep} onChange={event => setCep(event.target.value)} required />
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
                                        <SelectEstados />
                                    </div>
                                </div>
                            </div>
                            <div className="formsvdivs">
                                <div className="formshdivs">
                                    <label htmlFor="rua"> Rua:</label>
                                    <input type="text" className="size4" maxLength="2" name="rua" id="rua" value={rua} onChange={event => setRua(event.target.value)} required />
                                </div>
                                <div className="formshdivs">
                                    <label htmlFor="complemento" >Complemento:</label>
                                    <input type="text" className="size4" name="complemento" id="complemento" value={complemento} onChange={event => setComplemento(event.target.value)} required />
                                </div>
                            </div>
                        </div>
                        <div className="formsbuttons">
                            <button>Cancelar</button><button onClick={() => sendLocadora()}>Salvar</button>
                        </div>
                    </form>
                </main>
            </div>
        </>

    )
}

export default PageCadastroLocadora