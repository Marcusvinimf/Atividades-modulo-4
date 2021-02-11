var numbers2 = [65, 44, 12, 4];

let multiplicaPor10 = numbers2.reduce((acumulador, numeroAtual)=>{ 
    return acumulador + numeroAtual
});

console.log(multiplicaPor10);