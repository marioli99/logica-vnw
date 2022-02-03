
// Crie um objeto que receba ao menos três propriedades sobre você.

const objeto = {
    meuNome: "Mariana",
    minhaIdade: 22,
    catsOuDogs: "cats"
}

// Adicione uma nova propriedade sem alterar seu objeto inicial.

objeto.calorOuFrio = "Frio"

// Remova uma propriedade desse objeto.

delete objeto.idade

//Mostre no console todas as propriedades desse objeto.

console.log(objeto)

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.

const cadastro = [
    {
    nome : "Clotilde",
    idade : 30,
    telefone : "1234-5678",
    amigos : ['Professor Girafales', 'kiko', 'Seu Barriga', 'Bruxa do 71' ]
    },
    {
    nome : "Sr Tomate",
    idade : 10,
    telefone : "1234-1234",
    amigos : ['Pepinilson', 'Moranguete', 'Alfacildo', 'Brocolisvaldo' ]
    },
    {
    nome : "dona A",
    idade : 20,
    telefone : "1234-4321",
    amigos : ['B', 'C', 'D', 'E' ]
    },
    {
    nome : "Bannanelson",
    idade : 28,
    telefone : "5678-5678",
    amigos : ['Goiabilsom', 'Marçanelo', 'Perilson', 'Maracujeison' ]
    },
    {
    nome : "Steven Universo",
    idade: 16,
    telefone: "0000-1111",
    amigos: ['Garnet', 'Perola', 'Ametista', 'Coonnie' ]
    }
]

// Mostre no console o nome de um amigo de cada lista.
console.log (cadastro[0].amigos[0])
console.log (cadastro[1].amigos[0])
console.log (cadastro[2].amigos[0])
console.log (cadastro[3].amigos[0])
console.log (cadastro[4].amigos[0])