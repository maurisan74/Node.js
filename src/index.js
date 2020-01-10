const express=require('express');
const app=express();
const morgan = require('morgan');
var favicon = require('serve-favicon')

//settings
app.set('port', 3000);

// routes
//var app = express()
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(require('./routes/index'));
//app.listen(3000)
app.use('/api/clientes',require('./routes/clientes'));
app.use('/api/empleados', require('./routes/empleados'));
app.use('/api/proyectos', require('./routes/proyectos'));
app.use('/api/instalaciones', require('./routes/instalaciones'));
app.use('/api/tiposTrabajos', require('./routes/tipostrabajos'));
app.use('/api/equipos', require('./routes/equipos'));

//app.use('/api/clientes', require('./routes/clientes'));

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

 
//startind the server
app.listen(app.get('port'), ()=>{
        console.log(`Server en port ${app.get('port')}`)
    });