export default class User {
    #nome //isso serve para privar o atributo e não permitir alterações erradas. Metodo de encapsulamento
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || "estudante"
        this.#ativo = ativo
    }

    get nome() {//método acessor, getter são acessados como propriedades mesmo sendo um método Ex: novoUser.nome ao invés de novoUser.nome() é usado a sintaxe de objeto mesmo sendo um método
        return this.#nome //get cria um método somente de leitura
    }

    get email() {
        return this.#email
    }

    get nascimento() {
        return this.#nascimento
    }

    get role() {
        return this.#role
    }

    get ativo() {
        return this.#ativo
    }

    set nome(novoNome) {
        this.#nome = novoNome
    }

    set email(novoEmail) {
        this.#email = novoEmail
    }

    set nascimento(novoNascimento) {
        this.#nascimento = novoNascimento
    }

    set role(novoRole) {
        this.#role = novoRole
    }

    set ativo(novoAtivo) {
        this.#ativo = novoAtivo
    }

    // exibirInfos(){
    //     return `${this.nome}, ${this.email}`
    // }

    exibirInfos() {//overload
        if (this.role === "estudante") { 
            return `Dados estudante: ${this.nome}`
        }
        if (this.role === "admin") { 
            return `Dados admin: ${this.nome}, ${this.role}`
        }

        if (this.role === "docente") { 
            return `Docente admin: ${this.nome}, ${this.email}`
        }
    }

    static exibirInfosGenericas(nome, email){
        return `${nome}, ${email}`
    }

}

const novoUser = new User('Juliana', 'j@j.com', '2024-01-01')

// console.log(novoUser);
// console.log(novoUser.exibirInfos());

// console.log(User.prototype.isPrototypeOf(novoUser));//User é um prototipo de novoUser?
