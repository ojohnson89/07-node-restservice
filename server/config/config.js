//==========================
// Puerto
//==========================

process.env.PORT = process.env.PORT || 3000;

//==========================
// Entorno
//==========================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//==========================
// Base de datos
//==========================


let urlDB;

if (process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27017/cafe';
}else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

//==========================
// Vencimiento del token
//==========================

//60 segundos x 60 minutos x 24 horas x 30 dias

process.env.CADUCIDAD_TOKEN = '48h';

//==========================
// SEED de autenticación
//==========================
process.env.SEED = process.env.SEED || 'esta-es-la-semilla-de-desarrollo'
