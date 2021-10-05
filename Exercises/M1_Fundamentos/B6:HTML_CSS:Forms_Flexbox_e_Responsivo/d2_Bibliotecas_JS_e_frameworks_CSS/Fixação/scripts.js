const moment = require('moment');
const brasilTetra = moment('17071994', 'DDMMYYYY');
const fromNow = brasilTetra.fromNow();
console.log('Ouvimos o ÉÉÉÉ TEETRAAAA há:',fromNow);
