import React, { useState } from 'react';
import PageConstructor from '../../Components/PageConstructor';
import './styles.css'

function CasdatroCliente() {
    const [nome, setListName] = useState('')
    const [overlay, setOverlay] = useState(false)
    const [email, setemail] = useState('')
    const [senha, setListsenha] = useState('')
    const [nascimento, setnascimento] = useState('')
    const [cnh, setcnh] = useState('')
    const [telefone, settelefone] = useState('')
    const [cpf, setcpf] = useState('')
    const [repetirsenha, setrepetirsenha] = useState('')
    const [cep, setcep] = useState('')
    const [cidade, setcidade] = useState('')
    const [estado, setestado] = useState('')
    const [rua, setrua] = useState('')
    const [validade, setvalidade] = useState('')
    const [complemento, setcomplemento] = useState('')
    const [numcartao, setnumcartao] = useState('')
    const [datavalidade, setdatavalidade] = useState('')
    const [cvc, setcvc] = useState('')
    const [nomecartao, setnomecartao] = useState('')

    function local(){
        if (localStorage.visitas) {
            localStorage.visitas = Number(localStorage.visitas) + 1
        } else {
            localStorage.visitas = 1
        }
        let cliente = {
            nome: nome, email: email, senha: senha, nascimento: nascimento,
            validade: validade, cpf: cpf, telefone: telefone,
            cnh: cnh, repetirsenha: repetirsenha, cep: cep,
            cidade: cidade, estado: estado, rua: rua,
            complemento: complemento, numcartao: numcartao,
            nomecartao: nomecartao, datavalidade: datavalidade,
            cvc: cvc
        }
        localStorage.setItem('cliente' + Number(localStorage.visitas), JSON.stringify(cliente))  
        setOverlay(true)
}
    
    return (
        <>
            <PageConstructor >
            <div className="App">
                <main className="section">
                    {
                    overlay ? <div id="overlay">
                <div className="message">
                    <h2 style="color:#414D92"> Cadastro realizado com sucesso!</h2>
                    <button onClick={setOverlay(false)}> Ok</button>
                </div> 
            </div>
                :""
            }
                    <form name="dadosCliente">
                        <h1>
                            Cadastro do Cliente
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
                                        <input type="email" name="emailcad" id="emailcad" value={email} onChange={event => setemail(event.target.value)} />
                                    </div>
                                    <div className="formshdivs">
                                        <label htmlFor="senhacad" > Senha:</label>
                                        <input type="password" name="senhacad" id="senhacad" value={senha} onChange={event => setListsenha(event.target.value)} />
                                    </div>
                                    <div className="formshdivs">
                                        <label htmlFor="nascimento" > Data de Nascimento:</label>
                                        <input type="date" name="nascimento" id="nascimento" value={nascimento} onChange={event => setnascimento(event.target.value)} />
                                    </div>
                                    <div className="formshdivs">
                                        <label htmlFor="validade" > Validade:</label>
                                        <input type="date" name="validade" id="validade" value={validade} onChange={event => setvalidade(event.target.value)} />
                                    </div>
                                </div>
                                <div className="formsvdivs">
                                    <div className="formsvdivs">
                                        <div className="formshdivs">
                                            <label htmlFor="cpf"> CPF:</label>
                                            <input type="text" maxLength="14" name="cpf" id="cpf" onKeyUp={()=>false/*mascaraCpf('###.###.###-##', this)*/} value={cpf} onChange={event => setcpf(event.target.value)} />
                                        </div>
                                        <div className="formshdivs">
                                            <label htmlFor="telefone"> Celular:</label>
                                            <input type="text" name="telefone" id="telefone" value={telefone} onChange={event => settelefone(event.target.value)} />
                                        </div>
                                        <div className="formshdivs">
                                            <label htmlFor="repetirsenha"> Repetir a Senha:</label>
                                            <input type="password" name="repetirsenha" id="repetirsenha" value={repetirsenha} onChange={event => setrepetirsenha(event.target.value)} />
                                        </div>
                                        <div className="formshdivs">
                                            <label htmlFor="cnh">CNH:</label>
                                            <input type="text" maxLength="11" name="cnh" id="cnh" value={cnh} onChange={event => setcnh(event.target.value)} />
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
                                        <input type="number" maxLength="10" name="cep" id="cep" value={cep} onChange={event => setcep(event.target.value)} />
                                    </div>
                                    <div className="formshdivs">
                                        <label htmlFor="cidade"> Cidade:</label>
                                        <input type="text" name="cidade" id="cidade" value={cidade} onChange={event => setcidade(event.target.value)} />
                                    </div>
                                </div>
                                <div className="formsvdivs">
                                    <div className="formshdivs"> <label></label></div>
                                    <div className="formshdivs">
                                        <label htmlFor="estado">Estado:</label>
                                        <input type="text" maxLength="2" name="estado" id="estado" value={estado} onChange={event => setestado(event.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="formsvdivs">
                                <div className="formshdivs">
                                    <label htmlFor="rua"> Rua:</label>
                                    <input type="text" className="size4" maxLength="20" name="rua" id="rua" value={rua} onChange={event => setrua(event.target.value)} />
                                </div>
                                <div className="formshdivs">
                                    <label htmlFor="complemento" >Complemento:</label>
                                    <input type="text" className="size4" name="complemento" id="complemento" value={complemento} onChange={event => setcomplemento(event.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="forms">
                            <h2>Dados Bancários</h2>
                            <div className="formshdivs">
                                <label htmlFor="numcartao"> Número do Cartão:</label>
                                <input type="text" maxLength="20" name="numcartao" id="numcartao" className="size3" value={numcartao} onChange={event => setnumcartao(event.target.value)} />
                            </div>
                            <div className="formshdivs">
                                <label htmlFor="nomecartao"> Nome do Cartão:</label>
                                <input type="text" name="nomecartao" id="nomecartao" className="size3" value={nomecartao} onChange={event => setnomecartao(event.target.value)} />
                            </div>
                            <div className="formshdivs">
                                <label htmlFor="datavalidade">Data de Validade:</label>
                                <input type="date" name="datavalidade" id="datavalidade" className="size3" value={datavalidade} onChange={event => setdatavalidade(event.target.value)} />
                            </div>
                            <div className="formshdivs">
                                <label htmlFor="cvc"> CVC:</label>
                                <input type="text" maxLength="3" name="cvc" id="cvc" value={cvc} onChange={event => setcvc(event.target.value)} className="size1" />
                            </div>
                        </div>
                        <div className="formsbuttons">
                            <button>Cancelar</button><button onClick={()=>local()}>Salvar</button>
                        </div>
                    </form>
                   
                </main>
            </div>
            </PageConstructor>
           
        </>

    )
}

export default CasdatroCliente