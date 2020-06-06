var nome = "Felipe Souza"
//alert("AULA JAVASCRIPT - " + nome);
console.log("Seja bem vindo " + nome);

var array = ["maçã","uva","banana","pêra","laranja"];
array.push("acerola");

console.log(array);
array.pop();
console.log(array);
console.log(array.reverse());
console.log(array.toString());
console.log(array.join(" - "));

var dictionary = {nome:"carro",marca:"chevrolet",modelo:"corsa"};
console.log(dictionary);

var dictionaries = [{nome:"carro",marca:"chevrolet",modelo:"corsa"},{nome:"carro",marca:"fiat",modelo:"uno"}];
console.log(dictionaries);

/*var idade = prompt("Qual é a sua idade?");
if(idade >= 18){
    console.log("Maior de idade");
}else{
    console.log("Menor de idade");
}*/
var count = dictionaries.length;
while(count >= 0){
    console.log(dictionaries[count]);
    count--;
}

for(c=4;c >= 0;c--){
    console.log(array[c]);
}

var date = new Date();
console.log(date);
console.log(date.getDate());
console.log(date.getTime());
console.log(date.getMonth());