import User from "./User.js";

export default class Admin extends User{//extends herda os métodos como exibirInfos
    constructor(nome, email, nascimento, role = "admin", ativo = "true"){
        super(nome, email, nascimento, role, ativo)//superClasse = esses parâmetros estão definido na super classe de Admin ou seja User
    }

    // exibirInfos(){//override - Sobreescreve o mesmo metodo porém com alterações
    //     const infos = super.exibirInfos()
    //     return `admin - ${infos}`
    // }


    criarCurso(nomeCurso, qtdVagas){
        return `Curso ${nomeCurso} criado com ${qtdVagas} vagas`
    }
}

// const novoAdmin = new Admin("Rodrigo", "r@r.com", "2024-01-10")

// console.log(novoAdmin);
// console.log(novoAdmin.criarCurso('Matematica', 50));