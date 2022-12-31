const empleados = [
    {
        id: 1,
        nombre: "Enmanuel"
    },
    {
        id: 2,
        nombre: "Sergio"
    }
    ,
    {
        id: 3,
        nombre: "Carlos"
    }
]
const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
]
const getEmpleado = (id, callback) => {
    const empleado = empleados.find(e => e.id === id)?.nombre
    if (empleado) {
        callback(null, empleado);
    }else{
        callback (`Empleado con id ${id} no existe`);
    }
}
const getSalario = (id, callback) =>{
    const salario = salarios.find(s => s.id === id)
    if(salario){
        callback(null, salario)
    }else{
        callback(`El salario de id ${id} no existe`)
    }
}
const id = 3
getEmpleado(id,(err, empleado) =>{
    if(err){
        console.log("Error!");
        return err;
    }

    getSalario(id, (err, salario) =>{
        if (err) {
            console.log("Error!");
            return console.log(err);
        }
    
        console.log('El salario existe');
        console.log(`El salario de ${empleado} es de ${salario.salario}`);
    })

});


