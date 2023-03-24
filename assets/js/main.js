// Creo un div dove inserire i miei "box" e lo inserisco nel DOM
const boxContainer = document.createElement('div');
boxContainer.id = 'box-container';
boxContainer.classList.add('container')
const mainDom = document.querySelector("main");
console.log(mainDom)
mainDom.appendChild(boxContainer);

//creo un array con 100 numeri
let numberList = [];
for (let i = 1; i <= 100; i++) {
    numberList.push(i);
}
console.log(numberList)

// Creo array con numeri e parole al posto giusto
for (let i = 0; i <= 100; i++) {

    if (numberList[i] % 3 == 0 && numberList[i] % 5 == 0) {

        numberList[i] = 'FizzBuzz';

    } else if (numberList[i] % 3 == 0) {

        numberList[i] = 'Fizz';

    } else if (numberList[i] % 5 == 0) {

        numberList[i] = 'Buzz';
    }
};
console.log(numberList)

// Creo un elemento html per ogni numero/parola
let numberBox;
for (let i = 0; i < 100; i++) {

    if (numberList[i] == 'FizzBuzz' || numberList[i] == 'Fizz' || numberList[i] == 'Buzz' ) {
        numberBox = `<div class="box box-${i+1} box-${numberList[i]}">${numberList[i]}</div>`;
    } else {
        numberBox = `<div class="box box-${i+1}">${numberList[i]}</div>`;
    }
    
    boxContainer.innerHTML += numberBox;
}