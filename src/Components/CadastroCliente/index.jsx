export default function CadastroCliente (){
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
            cpf: cpf, telefone: telefone,
            cnh: cnh, repetirsenha: repetirsenha, cep: cep,
            cidade: cidade, estado: estado, rua: rua,
            complemento: complemento, numcartao: numcartao,
            nomecartao: nomecartao, datavalidade: datavalidade,
            cvc: cvc
        }
        localStorage.setItem('cliente' + Number(localStorage.visitas), JSON.stringify(cliente))   

        const funcaoValidade = document.getElementById('validade')

/* VALIDAÇÃO DE CNH */
funcaoValidade.addEventListener('blur',() => {
    const validade = document.getElementById('validade').value
    const data = new Date()
    let anoAtual = data.getFullYear()
    let arrayValidade = validade.split('-')
    let anoValidade = arrayValidade[0]
    if(anoValidade > anoAtual){
        alert("Data inválida")
    }
}
)

/* VALIDAÇÃO DE NASCIMENTO */
const funcaoNascimento = document.getElementById('nascimento')

funcaoNascimento.addEventListener('blur', () => {
    const nascimento = document.getElementById('nascimento').value
    const data = new Date()
    let diaAtual = data.getDate()
    let mesAtual = data.getMonth() + 1
    let anoAtual = data.getFullYear()
    let arrayNascimento = nascimento.split('-')
    let diaNascimento = arrayNascimento[2]
    let mesNascimento = arrayNascimento[1]
    let anoNascimento = arrayNascimento[0]
    let conta = (anoAtual - anoNascimento)
    let diferencaAno = anoAtual - anoNascimento
    if(mesAtual >= mesNascimento && diaAtual >= diaNascimento){
        if(diferencaAno <= 18){
            alert("Data de Nascimento inválida.")
        }
    }else{
        diferencaAno--
        if(diferencaAno <= 18){
            alert("Data de Nascimento inválida.")
        }
    }
})

/* VALIDAÇÃO DE CPF */
const funcaoCpf = document.getElementById('cpf')

funcaoCpf.addEventListener('keypress', () => {
    let inputLenght = funcaoCpf.value.length

    if(inputLenght === 3 || inputLenght === 7){
        funcaoCpf.value += '.'
    }else if(inputLenght === 11) {
        funcaoCpf.value += '-'
    }

})

funcaoCpf.addEventListener('blur', () => {
    const cpf = document.getElementById('cpf').value
    let validarRegExCpf = /^\d{3}.\d{3}.\d{3}-\d{2}$/;
    if (cpf.match(validarRegExCpf)) {
    } else if (cpf == ""){} 
    else {
      alert("CPF com formato Inválido!")
    }
})

/* FORMATO DE TELEFONE */
const funcaoTel = document.getElementById('telefone')

funcaoTel.addEventListener('blur', () => {
    const telefone = document.getElementById('telefone').value
    let validarRegExTel = /^1\d\d(\d\d)?$|^0800 ?\d{3} ?\d{4}$|^(\(0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d\) ?|0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d[ .-]?)?(9|9[ .-])?[2-9]\d{3}[ .-]?\d{4}$/
    if (telefone.match(validarRegExTel)) {
    }else if (telefone == ""){}
    else {
        alert("Formato de telefone Inválido")
    }
})

}}
