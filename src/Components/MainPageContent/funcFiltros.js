function ReturnMoment(data, horario) {
    var date = data.split("-")
    var hora = horario.split(":")
    return new Date(date[2], date[0] - 1, date[1], hora[0], hora[1])
}


function EmAndamento(reservas) {

    var agora = new Date(Date.now())
    var emAndamento = reservas.filter(reserva => {
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
        let momentoCriacao = ReturnMoment(reserva.dataCriacao, reserva.horarioCriacao)
        return (dataFim >= momentoCriacao && dataInicio <= momentoCriacao)

    })
    return noPeriodo
}

function NoMes(reservas) {
    let dataInicio = new Date(Date.now())
    dataInicio.setDate("0")
    dataInicio.setHours(0, 0, 0)
    var dataFim = new Date(dataInicio.getTime())
    dataFim.setMonth(dataInicio.getMonth() + 2, 0)
    dataFim.setHours(23, 59, 59)
    var result = NoPeriodo(reservas, dataInicio, dataFim)
    return result
}

function NoAno(reservas) {
    var dataInicio = new Date(Date.now())
    dataInicio.setMonth("1", "1")
    dataInicio.setHours("0", "0", "0")
    var dataFim = new Date(dataInicio.getTime())
    dataFim.setMonth(11, 31)
    return NoPeriodo(reservas, dataInicio, dataFim)
}

export default { ReturnMoment, EmAndamento, NoPeriodo, NoMes, NoAno }