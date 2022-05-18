import PageConstructor from '../../Components/PageConstructor';
import PageCadastroVeiculo from '../../Components/CadastroVeiculo';
import './styles.css'

function CadastroVeiculos() {
    return (
        <>
            <PageConstructor>
                <PageCadastroVeiculo />
            </PageConstructor>
        </>
    )
}

export default CadastroVeiculos