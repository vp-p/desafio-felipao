class hero{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar(){
        let ataque
        if(this.tipo == "mago"){
            ataque = "magia"
        } else if(this.tipo == "guerreiro"){
            ataque = "espada"
        } else if(this.tipo == "monge"){
            ataque = "artes marciais"
        } else if(this.tipo == "ninja"){
            ataque = "shuriken"
        }
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`)
    }
}

let hero0 = new hero("Pedro", 123, "mago")
hero0.atacar()

let hero1 = new hero("Caue", 493, "monge")
hero1.atacar()

let hero2 = new hero("Vinicius", 18, "guerreiro")
hero2.atacar()

let hero3 = new hero("Isaac", 22, "ninja")
hero3.atacar()




