//Exercicio 1

let valor1 = prompt("digite um numero inteiro ")
let valor2 = prompt("Digite mais um numero")

let diferenca1 = Math.max(valor1 , valor2  );

let diferenca2 = valor1 - valor2;

alert(`O maior numero é ${diferenca1}  e a diferença  é ${diferenca2}`)



//Exercicio 2 

let valor3 = parseInt( prompt( "informe um numero" ))
let valor4 = parseInt( prompt("digite outro numero") )


if (valor3 >valor4 ) {
alert(`O número ${valor3}  é maior que número ${valor4}`)


} else if (valor4 > valor3){
 alert(`O número  ${valor4} é maior que número ${valor3}     ` )

}
else{
    alert(`Números iguais`)
}
   

//Exercicio 3 


let salario =  prompt("Informe Seu Salario") 

let valorEmprestimo = prompt("Valor Desejado de Emprestimo") 

let qtdParcelas =  prompt("Em quantas vezes deseja Pagar ?  Ex 12 ,24 48 ") 

let valorParcela = valorEmprestimo / qtdParcelas ;

let porcentagem = 0.30

let porcentagemSalario  = ( porcentagem * salario).toFixed(0);




if (  valorParcela   <=  porcentagemSalario ) {
    alert(`Empréstimo concedido`)
} else {
    alert(`Empréstimo não concedido`)
}

 //Exercicio 4 

 


 // Exercicio 5 

let inicio = prompt ("numero inteiro de 1 a 7 e infome o dia correspondente ")


if( inicio == 1 ){
    alert(`Domingo`)

}else if( inicio == 2){
    alert(`Segunda-Feira `)

}else if( inicio == 3){
    alert(`Terça-Feira `)

}else if( inicio == 4){
    alert(`Quarta-Feira `)

}else if(inicio == 5){
    alert(`Quinta-Feira `)

}else if(inicio == 6){
    alert(`Sexta-Feira`)

}else if(inicio == 7){
    alert(`Sabado`)

}


// Exercicio 6 

let salarioAntigo = prompt("Informe seu Salario antes do reajuste ")

let porcentagem2 = 1.05

let soma = salarioAntigo * porcentagem2 



alert(`O salário do funcionário corrigido é de:${soma}`)



// Exercicio 7


let dolar = prompt("Digite o valor em dolar ")

let cotacao = 5.30

let conversao = dolar * cotacao

alert(`$${dolar} é equivalente a R$${conversao} tendo ${cotacao.toFixed(2)} como cotação `)


//Exercicio 8


//Exercicio 9


let tempo = prompt(`Tempo gasto na viagem`)
let velocidade = prompt("Velocidade durante a viagem")

let distancia = tempo * velocidade

let litros_usados = (  distancia/12 ).toFixed(2)

alert(`Seu veículo percorreu ${distancia}km a ${velocidade}Km/h em ${tempo}h de viagem e consumiu ${litros_usados}L de gasolina `)



//Exercicio 10 

let valor = prompt("digite o valor da prestação")
let taxa = prompt ("valor da taxa ")
let tempo1 = prompt ("Tempo de atraso")


let prestacao = valor +(valor* (taxa/100)*tempo1 )

if (tempo1 >= 1) {
    alert(`Resultado : ${prestacao}`)
    


} else{
    alert(`Valor inválido o tempo de atraso deve ser em dias`)
}








