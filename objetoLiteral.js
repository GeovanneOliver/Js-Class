const user = {
    nome: 'Juliana',
    email: 'j@j.com',
    nascimento: '2024-01-01',
    role: 'estudante',
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email);
        
    }
}

//user.exibirInfos();
//const exibir = user.exibirInfos;
// exibir();

const exibir = function () {
    console.log(this.nome, this.email);
}

//além do bind pode ser usado o .call para vincular a um outro contexto ou outro objeto
const exibirNome = exibir.bind(user);//bind da contexto a função linkando ele ao objeto user
exibirNome();