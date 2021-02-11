//Utilizando um operador clone o objeto c​lothes
const clothes = {
    pants: { colors: ['black', 'blue'] },
    shirts: { colors: ['white', 'red'] },
    socks: { colors: ['beige', 'gray'] },
};

const {...cores} = clothes;
const [...cores1] = clothes.pants.colors;
const [...cores2] = clothes.shirts.colors;
const [...cores3] = clothes.socks.colors;

console.log(cores)
console.log("cores 1:", ...cores1,"/ cores 2:", ...cores2,"/ cores 3:", ...cores3);