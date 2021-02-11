//Parte A - Aquecimento Arrow Function

//Transforme as funções declarativas abaixo em Arrow Functions
const upperName1 = (name) => {
    return name.toUpperCase();
};

const myFunction = (p1, p2) => {
    return p1 * p2;
};

const toCelsius = (fahrenheit) => {
    return (5 / 9) * (fahrenheit - 32);
};

console.log(upperName1("Marcus"));
console.log(myFunction(2, 5));
console.log(toCelsius(12));
  