import {CD} from './cd.class.js';

const cd1=new CD('AM','Arctic Monkeys',12,2013);
console.log(titulo==='AM'); //true
console.log(artista==='Arctic Monkeys'); //true
console.log(faixas===15); //false
console.log(anoLancamento===2013); //true

cd1.tocado(12);
console.log(ouvidoPorInteiro===true); //true

const cd2=new CD('Fallen','Evanescence',12,2003);
console.log(titulo==='Once'); //false
console.log(artista==='Arctic Monkeys'); //false
console.log(faixas===12); //true
console.log(anoLancamento===2013); //true

cd1.tocado(6);
console.log(ouvidoPorInteiro===false); //true

const cd3=new CD('Sappho','Zolita',6,2018);
console.log(titulo==='Sappho'); //true
console.log(artista==='Zolita'); //true
console.log(faixas===12); //false
console.log(anoLancamento===2007); //false

cd1.tocado(2);
console.log(ouvidoPorInteiro===false); //true
