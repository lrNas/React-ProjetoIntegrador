import axios from 'axios';
import React, { useState, useEffect } from "react";
import Select from 'react-select'
import makeAnimated from "react-select/animated"
const animatedComponents = makeAnimated()

function SelectEstados() {
    const [estado, setEstado] = useState('')
    const [uf, setUf] = useState('')
    const selectContent = value => { setUf(value) }
    //Select Estados
    useEffect(() => {
        axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/')
            .then(response => response.data)
            .then(response => response.map(element => { return { value: element.nome, label: element.sigla } }))
            .then(response => {
                setEstado(response)
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


    return (
        <Select className="select" name="estado" id="estado"
            value={uf}
            theme={customTheme}
            onChange={selectContent}
            components={animatedComponents}
            options={estado}
            styles={{
                indicatorSeparator: () => { },
                dropdownIndicator: defaultStyles => ({ display: 'none' })
            }}
            placeholder="Selecione seu Estado"
            isSearchable
            closeMenuOnSelect
            required
        />
    )
}

export default SelectEstados;