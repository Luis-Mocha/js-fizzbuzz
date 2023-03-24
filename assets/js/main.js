let numberElement;

for (let index = 1; index <= 100; index++) {
    
    numberElement = index;

    if (numberElement % 3 == 0 && numberElement % 5 == 0) {
        numberElement = 'Fizzbuzz';
    } else if (numberElement % 5 == 0) {
        numberElement = 'Buzz';
    } else if (numberElement % 3 == 0) {
        numberElement = 'Fizz';
    }
    
    console.log(numberElement)
}




