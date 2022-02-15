const reservas = require('../../bancosjson/reservas.json')

function ReturnMoment(data, horario) {
    let date = data.split("-")
    let hora = horario.split(":")
    return new Date(date[2], date[0] - 1, date[1], hora[0], hora[1])
}


function EmAndamento(reservas) {

    let agora = new Date(Date.now())
    let emAndamento = reservas.filter(reserva => {
        var momentoRetirada = ReturnMoment(reserva.dataRetirada, reserva.horarioRetirada)
        return agora > momentoRetirada
    })

    if (emAndamento.lenght != 0) {
        emAndamento = emAndamento.filter(reserva => {
            var momentoEntrega = ReturnMoment(reserva.dataEntrega, reserva.horarioEntrega)
            return agora < momentoEntrega
        })

    }
    return emAndamento
}

function NoPeriodo(reservas, dataInicio, dataFim) {
    /** Prever campos vazios ou data de inicio maior que a data do fim */

    let noPeriodo = reservas.filter(reserva => {
        var momentoCriacao = ReturnMoment(reserva.dataCriacao, reserva.horarioCriacao)
        return (dataFim >= momentoCriacao && dataInicio <= momentoCriacao)

    })
    return noPeriodo
}

function NoMes(reservas) {
    let dataInicio = new Date(Date.now())
    dataInicio.setDate(1)
    dataInicio.setHours(0, 0, 0)
    let dataFim = dataInicio
    dataFim.setMonth(dataInicio.getMonth() + 1)
    return NoPeriodo(reservas, dataInicio, dataFim)
}

function NoAno(reservas) {
    let dataInicio = new Date(Date.now())
    dataInicio.setMonth(1, 1)
    dataInicio.setHours(0, 0, 0)
    console.log(dataInicio.toString())
    let dataFim = dataInicio
    dataFim.setMonth(11, 31)
    console.log(dataFim.toString())

    return NoPeriodo(reservas, dataInicio, dataFim)
}

console.log(NoMes(reservas))