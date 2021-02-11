//A partir do objeto abaixo, instancie apenas uma variável que receba ​first utilizando destructuring
const obj = { first: 'Jane', last: 'Doe' };

const {first} = obj;

console.log(first);

//A partir do objeto abaixo, instancie uma variavel que receba ​name​ e outra para colors
company = {
  name: 'ACME Corp',
  address: 'Nowhere st',
  products: {
    shirts: {
      colors: ['red', 'green', 'blue'],
    },
    socks: {
      colors: ['cyan', 'magenta', 'yellow'],
    },
  },
};

const {name} = company;
const [...cores1] = company.products.socks.colors;
const [...cores2] = company.products.shirts.colors;

console.log(name, ...cores1, ...cores2);