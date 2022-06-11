// Como podemos melhorar o esse código usando TS? 

// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"

// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";

// let pessoa3 = {
//     nome: "laura",
//     idade: "32",
//     profissao: "Atriz"
// };

// let pessoa4 = {
//     nome = "carlos",
//     idade = 19,
//     profissao = "padeiro"
// }


// Código refatorado
// crio um enum onde possui as Profissões, pois facilita adicionar mais profissões além de estabelecer uma regra para as profissões que podem ter em cada pessoa
enum Profissao{
    Atriz,
    Padeiro,
}

// estabeleço o tipo Pessoa, onde todas as demais pessoas serão desse tipo e irão necessariamente informar seus dados com base no padrão

type Pessoa = {
    nome: string,
    idade: number,
    profissao: Profissao
}

// objetos criados 
const pessoa1: Pessoa = {
    nome: "Maria",
    idade: 29,
    profissao: Profissao.Atriz
}

const pessoa2: Pessoa = {
    nome: "Roberto",
    idade: 19,
    profissao: Profissao.Padeiro
}

const pessoa3: Pessoa = {
    nome: "Laura",
    idade: 32,
    profissao: Profissao.Atriz
}

const pessoa4: Pessoa = {
    nome: "Carlos",
    idade: 19,
    profissao: Profissao.Padeiro
}

console.log(pessoa1.nome);