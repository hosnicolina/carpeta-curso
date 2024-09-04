const readline = require('readline')

// Crear una interfaz de readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})


// rl.question("Como te llamas: ", (nombre)=>{
//     console.log(`Hola ${nombre}`)
//     rl.close()
// })

let datosUsuario = [];

// Función para solicitar datos al usuario
function solicitarDatos() {
  rl.question('Ingresa un dato (o escribe "fin" para terminar): ', (respuesta) => {

    if (respuesta.toLowerCase() === 'fin') {
      console.log('Datos ingresados:', datosUsuario);
      rl.close();
    } else {
      datosUsuario.push(respuesta);
      solicitarDatos();
    }

  });
}

// solicitarDatos();


function mostrarMenu() {
  console.log('\nMenú:');
  console.log('1. Opción 1');
  console.log('2. Opción 2');
  console.log('3. Salir');

  rl.question('Selecciona una opción: ', (opcion) => {
    switch (opcion) {
      case '1':
        console.log('Has seleccionado la Opción 1');
        mostrarMenu();
        break;
      case '2':
        console.log('Has seleccionado la Opción 2');
        mostrarMenu();
        break;
      case '3':
        console.log('Adiós!');
        rl.close();
        break;
      default:
        console.log('Opción no válida. Inténtalo de nuevo.');
        mostrarMenu();
        break;
    }
  });
}

// mostrarMenu();

const numeroSecreto = Math.floor( Math.random() * 10 + 1)

function adivinaElNumero(numeroSecreto) {
    rl.question('Adivina un numero entre el 1 y el 10: ', (respuesta)=>{
        const numero = Number(respuesta)


        if (numero === numeroSecreto) {
            console.log('Feliciadades adivinaste el numero')
            rl.close()
        } else {
            console.log('Numero incorrecto')
            adivinaElNumero(numeroSecreto)
        }

    })
}

adivinaElNumero(numeroSecreto)