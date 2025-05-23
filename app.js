// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigos = []; //Inicia declarando una variable de tipo array, que almacenará los nombres de los amigos ingresados.

function agregarAmigo() {
    const input = document.getElementById("amigo");//Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector para obtener el texto ingresado por el usuario.
    const amigo = input.value.trim();
    if (amigo === "") {//Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."
        alert("Por favor, inserte un nombre.");
        return;
    }
    amigos.push(amigo); //Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().
    input.value = ""; //Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.
    mostrarNombres();
}

function mostrarNombres() {
    const lista = document.getElementById("listaAmigos");//Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector() para seleccionar la lista donde se mostrarán los amigos.
    lista.innerHTML = ""; //Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.
    amigos.forEach(amigo => { //Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.
        const li = document.createElement("li"); //Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) { //Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.
        alert("Debe haber al menos un amigo ingresado");
        return;
    }
    const indiceGanador = Math.floor(Math.random() * amigos.length);//Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.
    document.getElementById("resultado").textContent = `El amigo secreto sorteado es: ${amigos[indiceGanador]}`; //Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando document.getElementById()  e innerHTML para mostrar el amigo sorteado.
}