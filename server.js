console.log('\n------------------------------------------')
const _HTTP = require('http');
const _APP = require('./app');

//  Server can have 2 ports (port informed by the server or 5051)
const _PORT = process.env.SV_PORT || 5051;

//  Building from app-based server
const _SERVER = _HTTP.createServer(_APP);
_SERVER.listen(_PORT);

console.log('✅ Server is running ✅')
console.log(`🔌 Server port: ${_PORT} 🔌`)
console.log(`📡 Server ip: ${_SERVER.address().address} 📡`)
console.log('------------------------------------------\n')