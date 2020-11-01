const argv = require('./config/yargs.js').argv;
const porHacer = require('./por-hacer/por-hacer.js');
var colors = require('colors');

console.log(argv);

let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        console.log('');
        for (let tarea of listado) {
            console.log('=====Por Hacer====='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('==================='.green);
            console.log('');
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no reconocido');

}