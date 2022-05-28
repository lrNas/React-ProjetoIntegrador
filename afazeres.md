10-Nos campos validados, ao inserir um valor, ele deve ser automaticamente formatado para esse valor, exemplo ao digitar 11955113123 o próprio input mudar para (11) 95511-3123. Assegurar que o valor que será enviado para o API bate com o que está sendo exigido pelo input. Bons campos pra usar: Numero do cartão, celular, cnh,  renavam, placa, custo diária, cep

9-Testar funcionamento das páginas Contato, Cadastro Locadora, Cadastro Cliente, Cadastro Veiculos (Tem que estar cadastrando corretamente no banco de dados e mostrando alert ou overlay de que foi cadastrado ou que teve erro ao cadastrar)

8-Fazer o botão "Reservar!" dos resultados de  busca realizar o post da reserva e informar se foi feito ou não.

7-Criar uma página Atualizar perfil (É uma cópia do Cadastro Cliente, porém com outro título, e carregada com dados do usuário logado). Impedir que o Administrador (admin@email.com) mude os dados, deixando a opção indisponível para ele.

6-Fazer a página todas as reservas.

5-Linkar dados com a página Overview

4-Fazer a Página minhas reservas, e detectar se logado ou não. Se não logado, enviar para uma página de login com opção de criar cadastro(ainda não existe). Na página minhas reservas, só aparecerão as que estão ativas ou futuras, nenhuma passada. As passadas ficarão no histórico de locação, acessível pelo dropdown menu.

3-Redimensionar react selects (O tamanho não está batendo com os Inputs e não está responsivo.)

2-Mudar os alerts para os modais que construimos (aquelas divs com overlay, que estão hidden)

1-Se deslogar, levar para o Index.


Atribuições:
Marcos: 
7-> Falta carregar dados do cliente logado como value,
6->Filtro de cores, sumiu o "Ocultar reservas Encerradas"
4->Não é uma página com login, e sim a página cadastro cliente. O ideal é colocar uma página de login com a informação: "Você não está logado, faça login" e um link "Cadastre-se" que leve de à página de cadastro 


Arthur: 10-> Só falta só CNPJ, Cartão (6012-5124-1325-1251), renavam (59xxxxxx-x), placa, custo diaria (R$ xxxxxxxxxx,xx), telefone na cad locadora, cep cad locadora
 5->Ranking das agências e de carros, 
 3-> Ajustar tamanho dos input

Lucas: 9->Aguardando o fim da tarefa 10,
8->Pendente da 10,
2->Alerts não existem ainda, aguardando fim dos ajustes em forms (tarefa 10)
