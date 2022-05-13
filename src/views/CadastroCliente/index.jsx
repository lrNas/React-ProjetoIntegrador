import React, { useState } from 'react';
import PageConstructor from '../../Components/PageConstructor';
import './styles.css'
import axios from 'axios';

function CadastroCliente() {
    const [nome, setListName] = useState('')
    const [overlay, setOverlay] = useState(false)
    const [email, setEmail] = useState('')
    const [senha, setListsenha] = useState('')
    const [nascimento, setNascimento] = useState('')
    const [cnh, setCnh] = useState('')
    const [telefone, setTelefone] = useState('')
    const [cpf, setCpf] = useState('')
    const [repetirSenha, setRepetirSenha] = useState('')
    const [cep, setCep] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [rua, setRua] = useState('')
    const [validade, setValidade] = useState('')
    const [complemento, setComplemento] = useState('')
    const [numCartao, setNumCartao] = useState('')
    const [dataValidade, setDataValidade] = useState('')
    const [cvc, setCvc] = useState('')
    const [nomeCartao, setNomeCartao] = useState('')

    
    const sendCartao = async () => {
        const usuarioCartao = { nome: nomeCartao, numero: numCartao, validade: dataValidade, cvc: cvc }

        try {
            const resposta = await axios.post("http://localhost:3030/cartao", usuarioCartao)
            alert(resposta.data)
            setNomeCartao("")
            setNumCartao("")
            setDataValidade("")
            setCvc("")
        } catch (err) {
            console.log(err)
        }
    }

    const sendEndereco = async () => {
        const usuarioEndereco = { cep: cep, logadouro: rua, cidade: cidade, estado: estado, complemento: complemento }

        try {
            const resposta = await axios.post("http://localhost:3030/endereco", usuarioEndereco)
            alert(resposta.data)
            setCep("")
            setRua("")
            setCidade("")
            setEstado("")
            setComplemento("")
        } catch (err) {
            console.log(err)
        }
    }

    const sendUsuario = async () => {
        const usuarioCliente = { nome_completo: nome, email: email, senha: senha, cpf: cpf, telefone: telefone, data_nascimento: nascimento, cnh: cnh, validade_cnh: validade, fk_id_tipo_usuario: 1}

        try {
            const resposta = await axios.post("http://localhost:3030/usuario", usuarioCliente)
            alert(resposta.data)
            setListName("")
            setEmail("")
            setListsenha("")
            setCpf("")
            setTelefone("")
            setNascimento("")
            setCnh("")
            setValidade("")
        } catch (err) {
            console.log(err)
        }
    }

    /* VALIDAÇÃO DE NASCIMENTO */
    const validaNascimento = () => {
        const data = new Date()
        let diaAtual = data.getDate()
        let mesAtual = data.getMonth() + 1
        let anoAtual = data.getFullYear()
        let arrayNascimento = nascimento.split('-')
        let diaNascimento = arrayNascimento[2]
        let mesNascimento = arrayNascimento[1]
        let anoNascimento = arrayNascimento[0]
        let diferencaAno = anoAtual - anoNascimento
        if (mesAtual >= mesNascimento && diaAtual >= diaNascimento) {
            if (diferencaAno <= 18) {
                alert("Data de Nascimento inválida.")
            }
        } else {
            diferencaAno--
            if (diferencaAno <= 18) {
                alert("Data de Nascimento inválida.")
            }
        }
    }
    //Fim da validação do Nascimento

    /* VALIDAÇÃO DE CPF */
    const cpfPress = () => {
        let inputLenght = cpf.length
        if (inputLenght === 3 || inputLenght === 7) {
            setCpf(cpf + '.')
        } else if (inputLenght === 11) {
            setCpf(cpf + '-')
        }
    }

    const cpfBlur = () => {
        let validarRegExCpf = /^\d{3}.\d{3}.\d{3}-\d{2}$/;
        if (cpf.match(validarRegExCpf)) {
        } else if (cpf == "") { }
        else {
            alert("CPF Inválido!")
        }
    }
    //Fim da validação de CPF

    //  Validação && Formatação CEP
    const cepPress = () => {
        let inputLenght = cep.length
        if (inputLenght === 5) 
            setCep(cep + '-')
    }

    const cepBlur = () => {
        let validarRegExCep = /[0-9]{5}-[\d]{3}/
        if (cep.match(validarRegExCep)) {
        } else if (cep == "") { }
        else {
            alert("CEP Inválido!")
            setCep("")
        } 
    }
    //Fim da Validação do CEP


    return (
        <>
            <PageConstructor >
                <div className="App">
                    <main className="section">
                        {
                            overlay ? <div id="overlay">
                                <div className="message">
                                    <h2 style={"color:#414D92"}> Cadastro realizado com sucesso!</h2>
                                    <button onClick={setOverlay(false)}> Ok</button>
                                </div>
                            </div>
                                : ""
                        }
                        <form name="dadosCliente">
                            <h1>
                                Cadastro de Cliente
                            </h1>
                            <div className="forms">
                                <h2>Dados do Cliente</h2>
                                <div className="formshdivs">
                                    <div className="formsvdivs">
                                        <div className="formshdivs">
                                            <label htmlFor="nome" > Nome Completo:</label>
                                            <input type="text" name="nome" id="nome" value={nome} onChange={event => setListName(event.target.value)} />
                                        </div>
                                        <div className="formshdivs">
                                            <label htmlFor="emailcad" > E-mail:</label>
                                            <input type="email" name="emailcad" id="emailcad" value={email} onChange={event => setEmail(event.target.value)} />
                                        </div>
                                        <div className="formshdivs">
                                            <label htmlFor="senhacad" > Senha:</label>
                                            <input type="password" name="senhacad" id="senhacad" value={senha} onChange={event => setListsenha(event.target.value)} />
                                        </div>
                                        <div className="formshdivs">
                                            <label htmlFor="nascimento" > Data de Nascimento:</label>
                                            <input type="date" name="nascimento" id="nascimento" value={nascimento} onChange={event => setNascimento(event.target.value)} onBlur={validaNascimento} />
                                        </div>
                                        <div className="formshdivs">
                                            <label htmlFor="validade" > Validade:</label>
                                            <input type="date" name="validade" id="validade" value={validade} onChange={event => setValidade(event.target.value)} />
                                        </div>
                                    </div>
                                    <div className="formsvdivs">
                                        <div className="formsvdivs">
                                            <div className="formshdivs">
                                                <label htmlFor="cpf"> CPF:</label>
                                                <input type="text" maxLength="14" name="cpf" id="cpf" onKeyUp={() => false/*mascaraCpf('###.###.###-##', this)*/} value={cpf} onChange={event => setCpf(event.target.value)} onKeyPress={cpfPress} onBlur={cpfBlur} />
                                            </div>
                                            <div className="formshdivs">
                                                <label htmlFor="telefone"> Celular:</label>
                                                <input type="text" name="telefone" id="telefone" value={telefone} onChange={event => setTelefone(event.target.value)} />
                                            </div>
                                            <div className="formshdivs">
                                                <label htmlFor="repetirsenha"> Repetir a Senha:</label>
                                                <input type="password" name="repetirsenha" id="repetirsenha" value={repetirSenha} onChange={event => setRepetirSenha(event.target.value)} />
                                            </div>
                                            <div className="formshdivs">
                                                <label htmlFor="cnh">CNH:</label>
                                                <input type="text" maxLength="11" name="cnh" id="cnh" value={cnh} onChange={event => setCnh(event.target.value)} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="forms">
                                <h2>Endereço</h2>
                                <div className="formshdivs">
                                    <div className="formsvdivs">
                                        <div className="formshdivs">
                                            <label htmlFor="cep"> CEP:</label>
                                            <input type="text" maxLength="9" name="cep" id="cep" value={cep} onChange={event => setCep(event.target.value)} onKeyPress={cepPress} onBlur={cepBlur} />
                                        </div>
                                        <div className="formshdivs">
                                            <label htmlFor="cidade"> Cidade:</label>
                                            <input type="text" name="cidade" id="cidade" value={cidade} onChange={event => setCidade(event.target.value)} />
                                        </div>
                                    </div>
                                    <div className="formsvdivs">
                                        <div className="formshdivs"> <label></label></div>
                                        <div className="formshdivs">
                                            <label htmlFor="estado">Estado:</label>
                                            <input type="text" maxLength="2" name="estado" id="estado" value={estado} onChange={event => setEstado(event.target.value)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="formsvdivs">
                                    <div className="formshdivs">
                                        <label htmlFor="rua"> Rua:</label>
                                        <input type="text" className="size4" maxLength="20" name="rua" id="rua" value={rua} onChange={event => setRua(event.target.value)} />
                                    </div>
                                    <div className="formshdivs">
                                        <label htmlFor="complemento" >Complemento:</label>
                                        <input type="text" className="size4" name="complemento" id="complemento" value={complemento} onChange={event => setComplemento(event.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="forms">
                                <h2>Dados Bancários</h2>
                                <div className="formshdivs">
                                    <label htmlFor="numcartao"> Número do Cartão:</label>
                                    <input type="text" maxLength="20" name="numcartao" id="numcartao" className="size3" value={numCartao} onChange={event => setNumCartao(event.target.value)} />
                                </div>
                                <div className="formshdivs">
                                    <label htmlFor="nomecartao"> Nome do Cartão:</label>
                                    <input type="text" name="nomecartao" id="nomecartao" className="size3" value={nomeCartao} onChange={event => setNomeCartao(event.target.value)} />
                                </div>
                                <div className="formshdivs">
                                    <label htmlFor="datavalidade">Data de Validade:</label>
                                    <input type="date" name="datavalidade" id="datavalidade" className="size3" value={dataValidade} onChange={event => setDataValidade(event.target.value)} />
                                </div>
                                <div className="formshdivs">
                                    <label htmlFor="cvc"> CVC:</label>
                                    <input type="text" maxLength="3" name="cvc" id="cvc" value={cvc} onChange={event => setCvc(event.target.value)} className="size1" />
                                </div>
                            </div>
                            <div className="formsbuttons">
                                <button>Cancelar</button>
                                <button onClick={() => [sendCartao(), sendEndereco(), sendUsuario()]}>Salvar</button>
                            </div>
                        </form>

                    </main>
                </div>
            </PageConstructor>

        </>

    )
}

export default CadastroCliente