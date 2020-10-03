// ARRAYS E DICIONÁRIO

//var nome = "Giselle Nunes";
//var frase = "You're so freaking smart!!!";

//console.log(nome + " " + frase.replace ("freaking", "fucking"));
//console.log(nome + " " + frase.toLowerCase());
//alert (nome + " " + frase.toUpperCase());

//var lista = ["maça", "pera", "laranja"];

//console.log(lista);
//console.log(lista[0]);
//lista.push ("uva");
//console.log(lista);
//lista.pop ();
//console.log(lista);
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista.join("|"));
//alert ( nome + " " + "You're so freaking smart!!!");

//var fruta = {nome : "uva", cor : "verde"};
//console.log(fruta);

//var frutas = [{nome : "maçã", cor : "vermelha"}, {nome : "uva", cor : "verde"}];
//console.log(frutas);
//console.log(frutas[1].nome);
//var idade = prompt ("Qual é a sua idade?");

//CONDICIONAIS 

//if (idade >= 18){
//    alert ("Maior de Idade! - Acesso Garantido!!!");
//}else{
//    alert("Menor de idade! - Acesso Bloqueado!!!");
//}

// LAÇOS DE REPETIÇÃO

//var count = 0;
//while (count <= 5){
//    console.log(count);
//    count = count + 1;
//}

//var count;
//for (count = 0; count <= 5; count++){
//    alert(count);
//}

//DATE

//var d = new Date();
//alert (d);

//FUNCTIONS

//function soma (n1, n2){
//    return n1+n2;
//}
//alert (soma(5, 10));

//function setReplace (frase, nome, substituto){
//    return frase.replace(nome, substituto);
//}
//alert(setReplace ("Giselle clever", "Giselle", "Gica"));

//function validaIdade(idade){
//    if (idade >= 18){
//        validar = true;
//    }else{
//        validar = false;
//    }
//    return validar;
//}
//var idade = prompt("Qual é a sua idade?");
//console.log(validaIdade(idade));

//ADICIONANDO BOTÃO

//function clicou(){
//    alert("Having fun with JavaScript!!!");
//}
//function clicou(){
//    document.getElementById ("mensagem").innerHTML = "<b>Having so much fun with JavaScript!!!</b>";
//}

//function redirecionar(){
//    window.open("https://web.digitalinnovation.one")
//}

function redirecionar(){
    window.location.href = "https://web.digitalinnovation.one";
}

function trocar(elemento){
    elemento.innerHTML = "I'm having fun!!!";
    //document.getElementById("mousemove").innerHTML = "This is so much fun!!!";
    //alert ("This is fun!!!");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o Mouse Aqui!!";
    //document.getElementById("mousemove").innerHTML = "Passe o Mouse Aqui!";
}

function load(){
    alert ("You got it!!!");
}

function change(elemento){
    console.log(elemento.value);
}










