// todo esto me lo carga directamente desde un api
// Solicitud GET (Request), vamos  a probar otra api
//para ser sincero no se lo que devolvera por esto voy a ver que dato tiene
//ahora si
fetch('https://jsonplaceholder.typicode.com/posts/7')
    // Exito
    .then(response => response.json())  // convertir a json
    //podemos imprimir todos los datos pero solo vamos a obtener el id 7,el arreglo comienza por 0, asi que 6 seria 7, ahi deberia cargar el dato
    .then(json => document.getElementById("datosCargado").innerHTML= "Mis datos:" + json.id + "<BR><BR>" + json.title + "<BR><BR>" + json.body) //console.log(json))    //imprimir los datos en la consola
    .catch(err => console.log('Solicitud fallida', err)); // Capturar errores

//anteriormente estuvimos hablando de promesas me da error, ya que esos datos aun no han cargado y por consecuente no estan definidos 
//En un proximo video en vez de que sea con un api lo realizare con un archivo json
//es curioso por que ya habia utilizado fetch hace 3 anos en una tarea universitaria os enseno el codigo
//me equivoque realmente no utilice fetch jajajaja