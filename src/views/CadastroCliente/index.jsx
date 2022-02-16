import React, { useState } from 'react';
import PageConstructor from '../../Components/PageConstructor';
import './styles.css'

function CasdatroCliente() {
    const [nome, setListName] = useState('')
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

}
    
    return (
        <>
            <PageConstructor >
            <div className="App">
                <main class="section">
                    {/* <div id="overlay">
                <div class="message">
                    <h2 style="color:#414D92"> Cadastro realizado com sucesso!</h2>
                    <button> Ok</button>
                </div> 
            </div> */}
                    <form name="dadosCliente">
                        <h1>
                            Cadastro do Cliente
                        </h1>
                        <div class="forms">
                            <h2>Dados do Cliente</h2>
                            <div class="formshdivs">
                                <div class="formsvdivs">
                                    <div class="formshdivs">
                                        <label for="nome" > Nome Completo:</label>
                                        <input type="text" name="nome" id="nome" value={nome} onChange={event => setListName(event.target.value)} />
                                    </div>
                                    <div class="formshdivs">
                                        <label for="emailcad" > E-mail:</label>
                                        <input type="email" name="emailcad" id="emailcad" value={email} onChange={event => setemail(event.target.value)} />
                                    </div>
                                    <div class="formshdivs">
                                        <label for="senhacad" > Senha:</label>
                                        <input type="password" name="senhacad" id="senhacad" value={senha} onChange={event => setListsenha(event.target.value)} />
                                    </div>
                                    <div class="formshdivs">
                                        <label for="nascimento" > Data de Nascimento:</label>
                                        <input type="date" name="nascimento" id="nascimento" value={nascimento} onChange={event => setnascimento(event.target.value)} />
                                    </div>
                                    <div class="formshdivs">
                                        <label for="validade" > Validade:</label>
                                        <input type="date" name="validade" id="validade" value={validade} onChange={event => setvalidade(event.target.value)} />
                                    </div>
                                </div>
                                <div class="formsvdivs">
                                    <div class="formsvdivs">
                                        <div class="formshdivs">
                                            <label for="cpf"> CPF:</label>
                                            <input type="text" maxlength="14" name="cpf" id="cpf" onkeyup="mascaraCpf('###.###.###-##', this)" value={cpf} onChange={event => setcpf(event.target.value)} />
                                        </div>
                                        <div class="formshdivs">
                                            <label for="telefone"> Celular:</label>
                                            <input type="text" name="telefone" id="telefone" value={telefone} onChange={event => settelefone(event.target.value)} />
                                        </div>
                                        <div class="formshdivs">
                                            <label for="repetirsenha"> Repetir a Senha:</label>
                                            <input type="password" name="repetirsenha" id="repetirsenha" value={repetirsenha} onChange={event => setrepetirsenha(event.target.value)} />
                                        </div>
                                        <div class="formshdivs">
                                            <label for="cnh">CNH:</label>
                                            <input type="text" maxlength="11" name="cnh" id="cnh" value={cnh} onChange={event => setcnh(event.target.value)} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="forms">
                            <h2>Endereço</h2>
                            <div class="formshdivs">
                                <div class="formsvdivs">
                                    <div class="formshdivs">
                                        <label for="cep"> CEP:</label>
                                        <input type="number" maxlength="10" name="cep" id="cep" value={cep} onChange={event => setcep(event.target.value)} />
                                    </div>
                                    <div class="formshdivs">
                                        <label for="cidade"> Cidade:</label>
                                        <input type="text" name="cidade" id="cidade" value={cidade} onChange={event => setcidade(event.target.value)} />
                                    </div>
                                </div>
                                <div class="formsvdivs">
                                    <div class="formshdivs"> <label></label></div>
                                    <div class="formshdivs">
                                        <label for="estado">Estado:</label>
                                        <input type="text" maxlength="2" name="estado" id="estado" value={estado} onChange={event => setestado(event.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div class="formsvdivs">
                                <div class="formshdivs">
                                    <label for="rua"> Rua:</label>
                                    <input type="text" class="size4" maxlength="2" name="rua" id="rua" value={rua} onChange={event => setrua(event.target.value)} />
                                </div>
                                <div class="formshdivs">
                                    <label for="complemento" >Complemento:</label>
                                    <input type="text" class="size4" name="complemento" id="complemento" value={complemento} onChange={event => setcomplemento(event.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div class="forms">
                            <h2>Dados Bancários</h2>
                            <div class="formshdivs">
                                <label for="numcartao"> Número do Cartão:</label>
                                <input type="text" maxlength="20" name="numcartao" id="numcartao" class="size3" value={numcartao} onChange={event => setnumcartao(event.target.value)} />
                            </div>
                            <div class="formshdivs">
                                <label for="nomecartao"> Nome do Cartão:</label>
                                <input type="text" name="nomecartao" id="nomecartao" class="size3" value={nomecartao} onChange={event => setnomecartao(event.target.value)} />
                            </div>
                            <div class="formshdivs">
                                <label for="datavalidade">Data de Validade:</label>
                                <input type="date" name="datavalidade" id="datavalidade" class="size3" value={datavalidade} onChange={event => setdatavalidade(event.target.value)} />
                            </div>
                            <div class="formshdivs">
                                <label for="cvc"> CVC:</label>
                                <input type="text" maxlength="3" name="cvc" id="cvc" value={cvc} onChange={event => setcvc(event.target.value)} class="size1" />
                            </div>
                        </div>
                        <div class="formsbuttons">
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