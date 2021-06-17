const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contactos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const Contacto = require('./nuevocontacto');

Contacto.insertMany([
  {
    nombre: 'Alberto',
    apellido: 'Lamberti',
    apodo: 'beto',
    nacimiento: 1952,
    edad: 69,
    telefono: 15638274,
    direccion: 'calle ficticia 123',
  },
  {
    nombre: 'Alejandro',
    apellido: 'Villafañe',
    apodo: 'Ale',
    nacimiento: 1970,
    edad: 50,
    telefono: 15638274,
    direccion: 'calle ficticia 123',
  },
  {
    nombre: 'Lucia',
    apellido: 'Villafañe',
    apodo: 'Luci',
    nacimiento: 2004,
    edad: 16,
    telefono: 15638274,
    direccion: 'calle ficticia 123',
  },
  {
    nombre: 'Luisina',
    apellido: 'Aliprandi',
    apodo: 'Luisi',
    nacimiento: 2003,
    edad: 18,
    telefono: 15638274,
    direccion: 'calle ficticia 123',
  },
  {
    nombre: 'Laura',
    apellido: 'Lamberti',
    apodo: 'Lau',
    nacimiento: 1978,
    edad: 43,
    telefono: 15638274,
    direccion: 'calle ficticia 123',
  },
  {
    nombre: 'Guadalupe',
    apellido: 'Villafañe',
    apodo: 'Guadi',
    nacimiento: 2008,
    edad: 12,
    telefono: 15638274,
    direccion: 'calle ficticia 123',
  },
  {
    nombre: 'Mario',
    apellido: 'Kempes',
    apodo: 'El Matador',
    nacimiento: 1954,
    edad: 66,
    telefono: 15638274,
    direccion: 'calle ficticia 123',
  },
  {
    nombre: 'Pablo',
    apellido: 'Lamberti',
    apodo: 'Huevon',
    nacimiento: 1987,
    edad: 34,
    telefono: 15638274,
    direccion: 'calle ficticia 123',
  },
  {
    nombre: 'Nicolás',
    apellido: 'Chiabrando',
    apodo: 'Batán',
    nacimiento: 2003,
    edad: 18,
    telefono: 15638274,
    direccion: 'calle ficticia 123',
  },
  {
    nombre: 'Santiago',
    apellido: 'Carrasco',
    apodo: 'Carri',
    nacimiento: 2002,
    edad: 18,
    telefono: 15638274,
    direccion: 'calle ficticia 123',
  },
  {
    nombre: 'Franz',
    apellido: 'Beckenbauer',
    apodo: 'Der Kaiser',
    nacimiento: 1945,
    edad: 75,
    telefono: 15638274,
    direccion: 'calle ficticia 123',
  },
]);
