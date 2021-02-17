var numbers2 = [65, 44, 12, 4];

let multiplicaPor10 = numbers2.reduce((acumulador, numeroAtual)=>{ 
    return acumulador + numeroAtual
});

console.log(multiplicaPor10);

var apiBase = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772";
var container = document.querySelector('#ficha');
var el, resultado, id, nome, origem, array, instrucoes, ingredientes;

function myIngred(resultado) {
    const ingr = [];
    const medida = [];
    for (let prop in resultado) {
      const elemento = prop;
      if (elemento.match('Measure') && resultado[elemento]) {
        medida.push(resultado[elemento]);
      }
      if (elemento.match('Ingredient') && resultado[elemento]) {
        ingr.push(resultado[elemento]);
      }
    }
    const result = [];
    for (let index = 0; index < ingr.length; index++) {
      if (medida[index] == null) {
        result.push(ingr[index]);
      } else {
        result.push(medida[index] + ' ' + ingr[index]);
      }
    }
    return result.join(', ');
  }

fetch(apiBase).then((response) => response.json()).then((json) =>{
  resultado = json.meals[0];
  ingredientes = {"nome": "ingredientes", "valor": myIngred(resultado)};
  array = [];
  id = {"nome": "id", "valor": resultado.idMeal};
  nome = {"nome" : "nome", "valor": resultado.strMeal};
  origem = {"nome": "origem", "valor": resultado.strArea};
  instrucoes = {"nome" : "instruções", "valor": resultado.strInstructions};
  array.push(id, nome, origem, ingredientes, instrucoes);
  array.map((item) => {
   el = document.createElement("li");
   el.innerHTML = `${item.nome}: ${item.valor}`;
   container.appendChild(el);
  });
  
})