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

}}