/*
 * EJERCICIO:
 * - Muestra ejemplos de creación de todas las estructuras soportadas por defecto en tu lenguaje.
 * - Utiliza operaciones de inserción, borrado, actualización y ordenación.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea una agenda de contactos por terminal.
 * - Debes implementar funcionalidades de búsqueda, inserción, actualización y eliminación de contactos.
 * - Cada contacto debe tener un nombre y un número de teléfono.
 * - El programa solicita en primer lugar cuál es la operación que se quiere realizar, y a continuación
 *   los datos necesarios para llevarla a cabo.
 * - El programa no puede dejar introducir números de teléfono no númericos y con más de 11 dígitos.
 *   (o el número de dígitos que quieras)
 * - También se debe proponer una operación de finalización del programa.
 */

/***ESTRUCTURAS DE DATOS EN JS - PT1***/

//Arrays

let arrayStructure = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arrayStructure.push(10); //Inserción
arrayStructure.splice(7, 1); //Borrado
arrayStructure.pop(); //Borrado - Elimina el útlimo elemento del array
arrayStructure.shift(); //Borrado - Elimina el primer elemento del array
arrayStructure[6] = 8; //Actualización
let index =arrayStructure.findIndex(element => element === 6); //Busqueda
arrayStructure = arrayStructure.sort(
  (a, b) => b - a
); //Ordenación



