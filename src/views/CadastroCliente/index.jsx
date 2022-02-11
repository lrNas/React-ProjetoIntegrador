import React, { useState } from 'react';
import PageConstructor from '../../Components/PageConstructor';
import './styles.css'

function CasdatroCliente() {
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
                                        <input type="text" name="nome" id="nome" required />
                                    </div>
                                    <div class="formshdivs">
                                        <label for="emailcad" > E-mail:</label>
                                        <input type="email" name="emailcad" id="emailcad" required />
                                    </div>
                                    <div class="formshdivs">
                                        <label for="senhacad" > Senha:</label>
                                        <input type="password" name="senhacad" id="senhacad" required />
                                    </div>
                                    <div class="formshdivs">
                                        <label for="nascimento" > Data de Nascimento:</label>
                                        <input type="date" name="nascimento" id="nascimento" required />
                                    </div>
                                    <div class="formshdivs">
                                        <label for="validade" > Validade:</label>
                                        <input type="date" name="validade" id="validade" required />
                                    </div>
                                </div>
                                <div class="formsvdivs">
                                    <div class="formsvdivs">
                                        <div class="formshdivs">
                                            <label for="cpf"> CPF:</label>
                                            <input type="text" maxlength="14" name="cpf" id="cpf" onkeyup="mascaraCpf('###.###.###-##', this)" required />
                                        </div>
                                        <div class="formshdivs">
                                            <label for="telefone"> Celular:</label>
                                            <input type="text" name="telefone" id="telefone" required />
                                        </div>
                                        <div class="formshdivs">
                                            <label for="repetirsenha"> Repetir a Senha:</label>
                                            <input type="password" name="repetirsenha" id="repetirsenha" required />
                                        </div>
                                        <div class="formshdivs">
                                            <label for="cnh">CNH:</label>
                                            <input type="text" maxlength="11" name="cnh" id="cnh" required />
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
                                        <input type="number" maxlength="10" name="cep" id="cep" required />
                                    </div>
                                    <div class="formshdivs">
                                        <label for="cidade"> Cidade:</label>
                                        <input type="text" name="cidade" id="cidade" required />
                                    </div>
                                </div>
                                <div class="formsvdivs">
                                    <div class="formshdivs"> <label></label></div>
                                    <div class="formshdivs">
                                        <label for="estado">Estado:</label>
                                        <input type="text" maxlength="2" name="estado" id="estado" required />
                                    </div>
                                </div>
                            </div>
                            <div class="formsvdivs">
                                <div class="formshdivs">
                                    <label for="rua"> Rua:</label>
                                    <input type="text" class="size4" maxlength="2" name="rua" id="rua" required />
                                </div>
                                <div class="formshdivs">
                                    <label for="complemento" >Complemento:</label>
                                    <input type="text" class="size4" name="complemento" id="complemento" required />
                                </div>
                            </div>
                        </div>
                        <div class="forms">
                            <h2>Dados Bancários</h2>
                            <div class="formshdivs">
                                <label for="numcartao"> Número do Cartão:</label>
                                <input type="text" maxlength="20" name="numcartao" id="numcartao" class="size3" required />
                            </div>
                            <div class="formshdivs">
                                <label for="nomecartao"> Nome do Cartão:</label>
                                <input type="text" name="nomecartao" id="nomecartao" class="size3" required />
                            </div>
                            <div class="formshdivs">
                                <label for="datavalidade">Data de Validade:</label>
                                <input type="date" name="datavalidade" id="datavalidade" class="size3" required />
                            </div>
                            <div class="formshdivs">
                                <label for="cvc"> CVC:</label>
                                <input type="text" maxlength="3" name="cvc" id="cvc" required class="size1" />
                            </div>
                        </div>
                        <div class="formsbuttons">
                            <button>Cancelar</button><button id="salvar">Salvar</button>
                        </div>
                    </form>
                   
                </main>
            </div>
            </PageConstructor>
           
        </>

    )
}

export default CasdatroCliente