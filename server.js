var os = require("os");
const prompt = require('prompt');
var devComputers = process.env.DEV_COMPUTERS.split(";");

if(!devComputers.includes(os.hostname())  && process.env.DB_NAME != process.env.DB_PROD_NAME){
    prompt.start();
    console.log('Change the database name in the env to de database name in the production environment? (Y/N)');
    
    prompt.get(['change'], function (err, result) {
        if (err) {
            console.log(err);
            return 1;
        }else{
            if(result.change.toLowerCase() == 'y'){
                process.env.DB_NAME = process.env.DB_PROD_NAME;
                console.log('Database name changed to: ' + process.env.DB_NAME);
            }
            StartServer();
        }
    });
}else
    StartServer();

function StartServer(){
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
}