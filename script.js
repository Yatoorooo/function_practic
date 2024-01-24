'use strict';

const myArr = [1,2,3,4,5, 'name', 'name', 6, 8 ];


function isNumberElem(array){
    const nubmerElem  = array.filter(item => typeof item === 'number');
    if(nubmerElem.length === 0 ){
        return 0;
    }
    const summ = nubmerElem.reduce((acc, val) => acc + val, 0);
    const avarege = summ / nubmerElem.length;
    return avarege;  

};

const result = isNumberElem(myArr);
console.log(result);

const x = 5;
const znak = '*';
const y = 5;
function doMath (x, znak, y){
    x = parseInt(x);
    y = parseInt(y);
    if(znak === '+'){
        return x + y;
    };
    if(znak === '-'){
        return x - y;
    };
    if(znak === '*'){
        return x * y;
    }; 
    if(znak === '/' && y !== 0){
        return x / y;
    };
    if(znak === '^'){
        return x % y;
    }
    
};


console.log( doMath(x, znak, y));


function fillArr(rows, cols){
 const userArr = [];
 for(let i = 0; i < rows; i++) {
   const innerArr = [];
   for(let j = 0; j < innerArr; i++){
    const element = prompt(`Введіть значення для елементу (${i + 1}, ${j + 1}):`);
    innerArr.push(element);
   }
   userArr.push(innerArr);
 }
return userArr;
};
const rows = parseInt(prompt('Введіть кількість рядків:'), 10);
const cols = parseInt(prompt('Введіть кількість стовпців:'), 10);

const userArray = fillArr(rows, cols);
console.log(userArray);





function removeCharter (inputString, charsToRemove){
    let charters = inputString.split('');
    let filtrCharters = charters.filter(char => !charsToRemove.includes(char));
    return filtrCharters.join('');
}
let resultat = removeCharter(" hello world", ['l', 'd']);
console.log(resultat);