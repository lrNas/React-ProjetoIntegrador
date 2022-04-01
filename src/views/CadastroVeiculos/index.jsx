import React, { useState } from 'react';
import PageConstructor from '../../Components/PageConstructor';
import './styles.css'
import axios from 'axios';

function CadastroVeiculos() {
    const [modeloDoVeiculo, setModeloDoVeiculo] = useState('')
    const [renavam, setRenavam] = useState('')
    const [placa, setPlaca] = useState('')
    const [kmRodado, setKmRodado] = useState('')
    const [custoDiaria, setCustoDiaria] = useState('')
    const [status, setStatus] = useState('')
    const [locadoraAtual, setLocadoraAtual] = useState('')
    const [locadoraProprietaria, setLocadoraProprietaria] = useState('')
    const [overlay, setOverlay] = useState(false)

    // Talvez precise de atualizações em conteúdos do objeto!
    const sendVeiculos = async () => {
        const veiculos = {modelo: modeloDoVeiculo, placa: placa, km_rodados: kmRodado, custo_diario: custoDiaria, renavam: renavam}

        try {
            const resposta = await axios.post("http://localhost:3030/veiculo", veiculos)
            alert(resposta.data)
            setModeloDoVeiculo("")
            setPlaca("")
            setKmRodado("")
            setCustoDiaria("")
            setRenavam("")
        } catch (err) {
            console.log(err)
        }
    }

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
                            Cadastro de Veiculos
                        </h1>
                        <form name="dadosVeiculos">
                            <div class="forms">
                                <h2>Dados do Veículo</h2>
                                <div class="formsvdivs">
                                    <div class="formshdivs">
                                        <label for="modeloveiculo"> Modelo do Veículo:</label>
                                        <input type="text" name="modeloveiculo" id="modeloveiculo" value={modeloDoVeiculo} onChange={event => setModeloDoVeiculo(event.target.value)} required />
                                    </div>
                                    <div class="formshdivs">
                                        <label for="renavam"> RENAVAM:</label>
                                        <input type="number" maxlength="11" name="renavam" id="renavam" value={renavam} onChange={event => setRenavam(event.target.value)} required />
                                    </div>
                                    <div class="formshdivs">
                                        <label for="placa"> Placa:</label>
                                        <input type="text" maxlength="7" name="placa" id="placa" value={placa} onChange={event => setPlaca(event.target.value)} required />
                                    </div>
                                    <div class="formshdivs">
                                        <label for="kmrodado"> KM Rodados:</label>
                                        <input type="number" name="kmrodado" id="kmrodado" value={kmRodado} onChange={event => setKmRodado(event.target.value)} required />
                                    </div>
                                    <div class="formshdivs">
                                        <label for="custodiaria"> Custo da diária</label>
                                        <input type="number" name="custodiaria" id="custodiaria" value={custoDiaria} onChange={event => setCustoDiaria(event.target.value)} required />
                                    </div>
                                    <div class="formshdivs">
                                        <label for="status"> Status: </label>
                                        <select name="status" value={status} onChange={event => setStatus(event.target.value)} ></select>
                                    </div>
                                    <div class="formshdivs">
                                        <label for="localAtual"> Locadora Atual:</label>
                                        <select name="localAtual" value={locadoraAtual} onChange={event => setLocadoraAtual(event.target.value)} ></select>
                                    </div>
                                    <div class="formshdivs">
                                        <label for="localProprietaria"> Locadora Propietária:</label>
                                        <select name="localProprietaria" value={locadoraProprietaria} onChange={event => setLocadoraProprietaria(event.target.value)} ></select>
                                    </div>
                                </div>
                            </div>
                            <div class="formsbuttons">
                                <button>Cancelar</button><button onClick={()=>{sendVeiculos()}}>Salvar</button>
                            </div>
                        </form>
                    </main>
                </div>
            </PageConstructor>
        </>
    )
}

export default CadastroVeiculos