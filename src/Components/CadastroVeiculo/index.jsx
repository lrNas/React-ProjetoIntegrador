import axios from 'axios';
import React, { useState, useEffect } from "react";import Select from 'react-select'
import makeAnimated from "react-select/animated"

const animatedComponents = makeAnimated()

function PageCadastroVeiculos() {
    const [modeloDoVeiculo, setModeloDoVeiculo] = useState('')
    const [renavam, setRenavam] = useState('')
    const [placa, setPlaca] = useState('')
    const [kmRodado, setKmRodado] = useState('')
    const [custoDiaria, setCustoDiaria] = useState('')
    const [locadoraAtual, setLocadoraAtual] = useState('')
    const [locadoraProprietaria, setLocadoraProprietaria] = useState('')
    const [overlay, setOverlay] = useState(false)
    const [status, setStatus] = useState('')

    const [dadosStatus, setDadosStatus] = useState('')
    const [dadosAtual, setDadosAtual] = useState('')
    const [dadosProp, setDadosProp] = useState('')
    const selectContentStatus = value => { setStatus(value) }
    const selectContentAtual = value => { setLocadoraAtual(value) }
    const selectContentProp = value => { setLocadoraProprietaria(value) }

    //Select Status
    useEffect(() => {
        axios.get('http://localhost:3030/status')
            .then(response => response.data)
            .then(response => response.map(element => { return { value: element.descricao, label: element.descricao } }))
            .then(response => {
                setDadosStatus(response)
            })
    }, [])

    useEffect(() => {
        axios.get('http://localhost:3030/locadora')
            .then(response => response.data)
            .then(response => response.map(element => { return { value: element.nome, label: element.nome } }))
            .then(response => {
                setDadosAtual(response)
                setDadosProp(response)
            })
    }, [])

    const customTheme = (theme) => {
        return {
            ...theme,
            colors: {
                ...theme.colors,
                primary25: '#7986CB',
                primary: 'black'
            }
        }
    }
    //----------------------------------------------

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
            alert('Cadastro do Veículo realizado com Sucesso!')
        } catch (err) {
            console.log(err)
        }
    }

    //Formatação RENAM
    const renavamPress = () => {
        let inputLenght = renavam.length
        if (inputLenght === 8) {
            setRenavam(renavam + '-')
        }
    }
    //----------------------------------------------

    //Formatação Placa
    const placaPress = () => {
        let inputLenght = placa.length
        if (inputLenght === 3) {
            setPlaca(placa + '-')
        }
    }
    //----------------------------------------------
    //Formatação Diaria
    const diariaPress = () => {
        let inputLenght = custoDiaria.length
        if(inputLenght === 0){
            setCustoDiaria(custoDiaria + 'R$ ')
        }else if (inputLenght === 4) {
            setCustoDiaria(custoDiaria + ',')
        }
    }
    //----------------------------------------------

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
                            Cadastro de Veiculos
                        </h1>
                        <form name="dadosVeiculos">
                            <div className="forms">
                                <h2>Dados do Veículo</h2>
                                <div className="formsvdivs">
                                    <div className="formshdivs">
                                        <label htmlFor="modeloveiculo"> Modelo do Veículo:</label>
                                        <input type="text" name="modeloveiculo" id="modeloveiculo" value={modeloDoVeiculo} onChange={event => setModeloDoVeiculo(event.target.value)} required />
                                    </div>
                                    <div className="formshdivs">
                                        <label htmlFor="renavam"> RENAVAM:</label>
                                        <input type="text" maxLength="10" name="renavam" id="renavam" value={renavam} onChange={event => setRenavam(event.target.value)} onKeyPress={renavamPress} required />
                                    </div>
                                    <div className="formshdivs">
                                        <label htmlFor="placa"> Placa:</label>
                                        <input type="text" maxLength="8" name="placa" id="placa" value={placa} onChange={event => setPlaca(event.target.value)} onKeyPress={placaPress} required />
                                    </div>
                                    <div className="formshdivs">
                                        <label htmlFor="kmrodado"> KM Rodados:</label>
                                        <input type="number" name="kmrodado" id="kmrodado" value={kmRodado} onChange={event => setKmRodado(event.target.value)} required />
                                    </div>
                                    <div className="formshdivs">
                                        <label htmlFor="custodiaria"> Custo da diária</label>
                                        <input type="text" maxLength="10" name="custodiaria" id="custodiaria" value={custoDiaria} onChange={event => setCustoDiaria(event.target.value)} onKeyPress={diariaPress} required />
                                    </div>
                                    <div className="formshdivs">
                                        <label htmlFor="status"> Status: </label>
                                        <Select className="select" name="estado" id="estado"
                                            value={status}
                                            theme={customTheme}
                                            onChange={selectContentStatus}
                                            components={animatedComponents}
                                            options={dadosStatus}styles={{
                                                indicatorSeparator: () => {},
                                                dropdownIndicator: defaultStyles => ({ display: 'none' })
                                            }}
                                            placeholder="Selecione"
                                            isSearchable
                                            closeMenuOnSelect
                                            isMulti
                                            required
                                        />
                                    </div>
                                    <div className="formshdivs">
                                        <label htmlFor="localAtual"> Locadora Atual:</label>
                                        <Select className="select" name="estado" id="estado"
                                            value={locadoraAtual}
                                            theme={customTheme}
                                            onChange={selectContentAtual}
                                            components={animatedComponents}
                                            options={dadosAtual}
                                            styles={{
                                                indicatorSeparator: () => {},
                                                dropdownIndicator: defaultStyles => ({ display: 'none' })
                                            }}
                                            placeholder="Selecione"
                                            isSearchable
                                            closeMenuOnSelect
                                            required
                                        />
                                    </div>
                                    <div className="formshdivs">
                                        <label htmlFor="localProprietaria"> Locadora Propietária:</label>
                                        <Select className="select" name="estado" id="estado"
                                            value={locadoraProprietaria}
                                            theme={customTheme}
                                            onChange={selectContentProp}
                                            components={animatedComponents}
                                            options={dadosProp}
                                            styles={{
                                                indicatorSeparator: () => {},
                                                dropdownIndicator: defaultStyles => ({ display: 'none' })
                                            }}
                                            placeholder="Selecione"
                                            isSearchable
                                            closeMenuOnSelect
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="formsbuttons">
                                <button>Cancelar</button><button onClick={()=>{sendVeiculos()}}>Salvar</button>
                            </div>
                        </form>
                    </main>
                </div>
        </>
    )
}

export default PageCadastroVeiculos