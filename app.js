const nuevoC = require('./nuevocontacto');
let { input } = require('console-input');
let readline = require('readline'),
  menu;

const contactos = require('./contactos');

const menuPrin = function (mensaje = '') {
  process.stdout.write('\033c');

  // Log the menu
  console.log('*****************');
  console.log('Bienvenido a la contactera');
  console.log('');
  console.log('Ingrese una opcion:');
  console.log('');
  console.log('1 - Directorio de contactos');
  console.log('2 - Nuevo contacto');
  console.log('3 - Buscar contacto');
  console.log('4 - Acerca de');
  console.log('5 - Salir');
  console.log('');
  console.log('*****************');
  console.log('');
  console.log(mensaje);
  console.log('');
  if (menu) menu.close();

  menu = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  menu.question('Opcion: ', function (input) {
    switch (input) {
      case '1':
        menuDirectorio();
        break;
      case '2':
        nuevoContacto();
        break;
      case '3':
        console.log('buscar contacto aqui');
        break;
      case '4':
        console.log('acerca de aqui');
        break;
      case '5':
        process.exit();
        break;
      default:
        menuPrin();
    }
  });
};

const menuDirectorio = function () {
  process.stdout.write('\033c');

  console.log('*****************');
  console.log('Directorio de contactos');
  console.log('');
  console.log('1 - Ver todos los contactos');
  console.log('2 - Ver una letra');
  console.log('3 - Volver al menu principal');

  console.log('*****************');

  if (menu) menu.close();

  menu = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  menu.question('Opcion: ', function (input) {
    switch (input) {
      case '1':
        verContactos();
        break;
      case '2':
        console.log('ver una letra aqui');
        break;
      case '3':
        menuPrin();
        break;
      default:
        menuDirectorio();
    }
  });
};

const verContactos = function (num = 0, num2 = 10) {
  process.stdout.write('\033c');

  console.log('*****************');
  loopContactos(num, num2);
  console.log('*****************');
  console.log('');
  console.log('s - Siguiente');
  console.log('a - Anterior');
  console.log('x - Volver al menu principal');

  if (menu) menu.close();

  menu = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  menu.question('Opcion: ', function (input) {
    switch (input) {
      case 's':
        verContactos(10, 20);
        break;
      case 'a':
        verContactos(0, 10);
        break;
      case 'x':
        menuPrin();
        break;
      default:
        verContactos();
    }
  });
};

const loopContactos = function (num, num2) {
  for (let i = num; i < num2; i++) {
    console.log(`${i + 1} - ${contactos[i].nombre}`);
  }
};

const siguientesContactos = function (sum, sum2) {
  process.stdout.write('\033c');
  for (let i = sum; i < sum2; i++) {
    console.log(`${i + 1} - ${contactos[i].nombre}`);
  }
};

const nuevoContacto = function () {
  process.stdout.write('\033c');

  console.log('Ingrese los datos del nuevo contacto: ');
  console.log('');
  nuevoC.nombre = input('nombre: ');
  console.log(nuevoC.nombre);
  nuevoC.apellido = input('apellido: ');
  console.log(nuevoC.apellido);
  nuevoC.apodo = input('apodo: ');
  console.log(nuevoC.apodo);

  nuevoC.nacimiento = input('nacimiento: ');
  console.log(nuevoC.nacimiento);
  nuevoC.edad = input('edad: ');
  console.log(nuevoC.edad);
  nuevoC.telefono = input('telefono: ');
  console.log(nuevoC.telefono);
  nuevoC.direccion = input('direccion: ');
  console.log(nuevoC.direccion);
  contactos.push(nuevoC);
  menuPrin('>Contacto guardado con exito<');
};

menuPrin();
