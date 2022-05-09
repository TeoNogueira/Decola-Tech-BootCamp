/*
Var - É acessível ao Escopo global e local, pode ter seu valor alterado, se não tiver um valor  inicial  será tratada como null;

Let - É acessível ao Escopo local de bloco, pode ter seu valor alterado, se não tiver um valor  inicial  será tratada como null;

Const - É acessível ao Escopo local de bloco, pode ter seu valor alterado, se não tiver um valor  inicial  será tratada como null;

*/

var test = 'string'

let testtt = ' STRING '
 testtt = ' Hello ' // Alteration in testtt 


const testt = 'String'
// testt = 'Bk' //// ERROR Uncaught typeError: Assigment to constant variable.

console.log(testt + testtt + test)

