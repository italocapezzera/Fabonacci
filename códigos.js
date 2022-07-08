"use strict";

let calcular = document.getElementById("calcular");
let limpar = document.getElementById("limpar");

calcular.addEventListener("click", fibonacci, false);
limpar.addEventListener("click", limparcampos, false);

function fibonacci(e) {
  let elementos = document.getElementById("numero").value;
  let resultado = document.getElementById("resultado");
  let resultado2 = document.getElementById("resultado2");
  if (elementos <= 0) {
    alert("Número de elementos incorreto");
  } else {
    let num1 = 1,
      num2 = 0,
      num3 = 0,
      numouro = 0;
    let array = [];
    let array2 = [];
    for (let i = 0; i < elementos; i++) {
      array.push(num3);
      num3 = num1 + num2;
      numouro = num2 / num1;
      num1 = num2;
      num2 = num3;
      array2.push(numouro);
    }
    resultado.innerHTML = array;
    resultado2.innerHTML = array2;
  }
}

function limparcampos(e) {
  document.getElementById("numero").value = "";
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("resultado2").innerHTML = "";
}
