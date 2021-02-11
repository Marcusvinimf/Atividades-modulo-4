//Utilizando um operador clone o objeto c​lothes
const clothes = {
    pants: { colors: ['black', 'blue'] },
    shirts: { colors: ['white', 'red'] },
    socks: { colors: ['beige', 'gray'] },
};

const {...cores} = clothes;
const {pants:{colors:[...cores1]}} = clothes;
const {shirts:{colors:[...cores2]}} = clothes;
const {socks:{colors:[...cores3]}} = clothes;

console.log(cores)
console.log("cores 1:", ...cores1,"/ cores 2:", ...cores2,"/ cores 3:", ...cores3);