'use strict';

const db = require('./lib/connectMongoose');
const Anuncio = require('./models/Anuncio');

db.once('open', async function () {
  try {
    await initAnuncios();
    return process.exit(0);
  } catch(err) {
    console.error('[Install DB]', err);
    return process.exit(1);
  }
});

async function initAnuncios() {

  await Anuncio.remove({});
  console.log('[Install DB]: Anuncios borrados');
  await Anuncio.insertMany([
    { nombre: 'Vino', venta: true, precio: 7.50, foto: 'vino.JPG', tags: ['lifestyle'] },
    { nombre: 'Coche', venta: false, precio: 80000, foto: 'coche.JPG', tags: ['motor'] },
    { nombre: 'Agua', venta: true, precio: 2, foto: 'agua.JPG', tags: ['lifestyle', 'work'] },
    { nombre: 'Moto', venta: false, precio: 1635, foto: 'moto.JPG', tags: ['motor'] },
    { nombre: 'Sansung', venta: false, precio: 750, foto: 'samsung.JPG', tags: ['mobile','work'] },
  ])
  console.log('[Install DB]: Añadidos');
}