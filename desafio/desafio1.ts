
// Como podemos rodar isso em um arquivo .ts sem causar erros? 

// let employee = {};
// employee.code = 10;
// employee.name = "John";


let employee: {name: string, code: number} = {
    name: "Jonh",
    code: 10
}

console.log(employee.code);