const container = document.getElementById("container");

let arrayUsuarios = [];

function crearLI(usuario){
    const li = document.createElement("li");

    li.innerHTML = `
    <p>${usuario.id}. ${usuario.nombre}</p>
    `
    container.append(li)
};

async function probarAsyncAwait(){

    try{
        const response = await fetch("./data.json");
        const data = await response.json();
        data.forEach(el => {
            crearLI(el);
            arrayUsuarios.push(el);
        });
    } catch(error){
        console.error(error);
    }
};

probarAsyncAwait();
