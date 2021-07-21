console.log("Hello world!") /*escreve no console*/

/*Variáveis podem começar com $ e ter números
não é recomendável usar simbolos ou acentos
não pode começar com número ou separar palavras
comum usar segunda palavra em maiusculo "myName"*/

/*var declaração global
let vale dentro do escopo
const não pode ser reatribuida, ecopo local
Esse exemplo não imprime porque o comando 
de imprimir esta fora do escopo
{const age=33}
console.log(age);

Usar preferencialmente o let*/

/*Tipos de dados olhar aula 3*/

/*operadores olhar aula 4*/

/*condicionais if e switch aula 5*/

/*Estruturas de repetição*/
var colors=["black","white","yellow"]
for(var i=0;i<colors.length;i++){
    console.log(colors[i]);
}

var i =0;
var i1=0
while(i<=10){
    console.log(i);
    i++;
}

do{/*Executa o bloco antes da verificação*/
    console.log(i1);
    i1++;
} while(i1<10);

/*funções*/
function sayHello(name,lastName){
    console.log('Hello '+name+" "+lastName)
}

function sum(a,b){
    return a+b;
}