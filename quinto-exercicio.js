//Destructuring - Desestruturação
//Tendo a função abaixo, usando destructuring, reescreva-a de modo que fique em apenas 2 linhas de código
const evento = {
    clientX: "Marcus",
    clientY: "Amanda"
};

const handleMouseMove1 = (event) => {
    const {clientX, clientY} = event;
    console.log(clientX, "e", clientY);
};

handleMouseMove1(evento);
//*************************************************************************************

const handleMouseMove2 = ({clientX, clientY}) => console.log(clientX,"e", clientY);

handleMouseMove2(evento);