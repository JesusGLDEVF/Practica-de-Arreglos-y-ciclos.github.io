/* Actividad:
Arreglos y cliclos
En este proyecto, practicarás los conceptos básicos de arrays (arreglos) y loops (ciclos), que has visto hasta este momento.

Objetivo
El objetivo es agregar un archivo a tu repositorio y que contenga la solución al problema planteado a continuación.

Problema: Clasificación de Frutas
Imagina que tienes un programa que clasifica las frutas según su tipo y cuenta cuántas hay de cada tipo.

Instrucciones para resolver el problema:
Declara un arreglo llamado frutas con varios tipos de frutas.
Crea un objeto para almacenar la cantidad de cada tipo de fruta.
Usa un ciclo for/while para recorrer el arreglo y contar las frutas.
Imprime en la consola la cantidad de cada tipo de fruta.
Opcional: intenta implementar la solución con el otro ciclo también (for/while).
Entregables
Para este proyecto, debes compartir la URL del archivo en el repositorio creado con la solución del problema descrito. Si tienes alguna duda de este ejercicio, no dudes en consultarla con tu sensei para que quede claro. También puedes solicitar una asesoría.

Crea un nuevo archivo a tu repositorio en tu equipo local para solucionar el problema planteado.
Crea un 'commit' en tu repositorio con este archivo para guardar los cambios crear una nueva versión de tu repositorio.
Si quieres agrega otro(s) archivo(s) que tengas con ejemplos de la clase o con algún ejemplo que tú hayas intentado mucho mejor.
Comparte la liga de Github del archivo agregado a tu repositorio con la solución. También puede ser la liga de tu commit.
*/

// Declarar un arreglo llamado frutas con varios tipos de frutas
let frutas = ['manzana', 'pera', 'manzana', 'pera', 'pera', 'pera', 'pera', 'pera',
             'naranja', 'pera', 'manzana', 'uva', 'naranja', 'uva', 'uva', 'uva', 'uva', 
             'uva', 'uva', 'uva', 'uva', 'uva', 'uva', 'uva', 'uva', 'uva', 'uva', 'uva', 'uva'];

// Crear un objeto para almacenar la cantidad de cada tipo de fruta
let conteoFrutas = {};

// Usar un ciclo for para recorrer el arreglo y contar las frutas
for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i];
    if (conteoFrutas[fruta]) {
        conteoFrutas[fruta]++; // Incrementar el conteo si la fruta ya existe en el objeto
    } else {
        conteoFrutas[fruta] = 1; // Inicializar el conteo si la fruta no existe en el objeto
    }
}

// Imprimir en la consola la cantidad de cada tipo de fruta
console.log("Conteo de frutas:");
for (let fruta in conteoFrutas) {
    console.log(`${fruta}: ${conteoFrutas[fruta]}`);
}
