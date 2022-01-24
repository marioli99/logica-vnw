//1 - crie uma função que exiba uma mensagem no console
function mensagem() {
    console.log("olá mundo!");
}
mensagem()

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
 function hello(name){
     console.log(`Bem vinda ao nosso site ${name} !`);
 }
 hello("Mariana")

//3 - crie uma função que receba seu nome, idade, e estilo musical preferido (parâmetros) e exiba no console

function login(name, idade , musica){
    console.log (`Seja bem vinde ${name}, sei que você tem ${idade} anos e gosta de ${musica} de musica!`);
} login("Mariana", 22 , "Todos os estilos")

//4 - crie uma função que receba o seu filme favorito, musica favorita (parâmetros) e exiba no console

function favorito(filme, musica){
console.log(`Você ama o filme ${filme} e sua musica favorita é ${musica}`);
}
favorito("Jocker", "Cubana")
//*Bônus

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function number(n){

    return n * 3;

}console.log(number(2))