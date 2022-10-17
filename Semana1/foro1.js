let kg = 2.2;
let cm = 0.01;
var preguntas = ['Nombre:  ',
                 'Peso kg: ',
                 'Estatura cm: '];

var respuestas = [];


function pregunta(i){
    process.stdout.write(preguntas[i]);
}


process.stdin.on('data', function(data){
    respuestas.push(data.toString().trim());

    if(respuestas.length < preguntas.length){
        pregunta(respuestas.length);
    }else{
        respuestas[1] = kg * respuestas[1];
        respuestas[2] = cm * respuestas[2];
        console.log("Hola:" , respuestas[0] + ", según el sistema imperial de medición tu peso es de " + respuestas[1] + " libras" + " y tu estatura es:" + respuestas[2]+" pies");
        process.exit();
    }
});

pregunta(0);
