import User from "./User.js";

//implicitamente toda classe criada no js esta no formato strict

export default class Docente extends User{//extends herda os métodos como exibirInfos
    constructor(nome, email, nascimento, role = "docente", ativo = "true"){
        super(nome, email, nascimento, role, ativo)//superClasse = esses parâmetros estão definido na super classe de Admin ou seja User
    }

    aprovarEstudante(estudante, curso){
        return `Estudante ${estudante} passou no curso de ${curso}, responsável ${this.nome}`
    }
}

// const novaDocente = new Docente("Ana", "a@a.com", "2024-01-01")

// console.log(novaDocente.aprovarEstudante("Juliana", "JavaScript"));
