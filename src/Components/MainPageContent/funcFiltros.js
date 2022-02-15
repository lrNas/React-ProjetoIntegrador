/**Mudar para um componente */
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
    /*console.log("-\nNo mês atual:")*/
    let dataInicio = new Date(Date.now())
    dataInicio.setDate("0")
    dataInicio.setHours(0, 0, 0)
        /*console.log("Data de início:" + dataInicio.toString())*/
    var dataFim = new Date(dataInicio.getTime())
    dataFim.setMonth(dataInicio.getMonth() + 2, 0)
    dataFim.setHours(23, 59, 59)
        /*console.log("Data do final do período:" + dataFim.toString() + "\n-")*/
    var result = NoPeriodo(reservas, dataInicio, dataFim)
    return result
}

function NoAno(reservas) {
    /*console.log("-\nNo ano:")*/
    var dataInicio = new Date(Date.now())
    dataInicio.setMonth("0", "1")
    dataInicio.setHours("0", "0", "0")
        /*console.log("Data de início:" + dataInicio.toString())*/
    var dataFim = new Date(dataInicio.getTime())
    dataFim.setMonth(11, 31)
    dataFim.setHours(23, 59, 59)
        /*console.log("Data do final do período:" + dataFim.toString() + "\n-")*/
    return NoPeriodo(reservas, dataInicio, dataFim)
}

export default { ReturnMoment, EmAndamento, NoPeriodo, NoMes, NoAno }