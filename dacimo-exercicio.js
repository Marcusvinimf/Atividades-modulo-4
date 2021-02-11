//A partir do objeto abaixo, retorne somente os nomes dos objetos do tipo cachorro (​type: dog)​ com filter
data = [
    {
      name: 'Butters',
      age: 3,
      type: 'dog',
    },
    {
      name: 'Lizzy',
      age: 6,
      type: 'dog',
    },
  
    {
      name: 'Red',
      age: 1,
      type: 'cat',
    },
    {
      name: 'Joey',
      age: 3,
      type: 'dog',
    },
  ];

  let cachorros1 = data.filter(cada => cada.type == 'dog');
  let cachorros2 = cachorros1.map(cada => cada.name);

  console.log(cachorros2);

  //Por fim, ainda utilizando o array acima, retorne a soma da idade de todos os cachorros (​type: dog)​
  
  let cachorro3 = cachorros1.map(cada => cada.age).reduce((acc, atl)=> acc+atl);

  console.log(cachorro3);