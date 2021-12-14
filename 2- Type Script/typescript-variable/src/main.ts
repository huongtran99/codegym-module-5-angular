let width: number;
let height: number;

width = 20.5;
height = 20;

let area: any = width * height;
console.log(`Diện tích hình chữ nhật: ${area}`);
console.log("Hello World")

let sum: number = 0;
let count: number = 0;
for (let i = 2; count < 30; i++) {
    let isPrime: boolean = true;
    if (i == 2) {
        sum += i;
        count++;
        continue;
    }
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j == 0) {
            isPrime = false;
            break;
        }
    }
    if(!isPrime){
        continue;
    }
    sum += i;
    count++;
}
console.log(sum);


function isPrime(number: number): boolean {
    let isPrime = true;
    if (number < 2) {
        isPrime = false;
    } else if (number > 2) {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    return isPrime;
}

let array = [1, 5, 9, 2, 6, 15, 19, 35, 51, 53];
let s = 0;
for (let number of array) {
    if (isPrime(number)) {
        s += number;
    }
}
console.log("Tổng các số nguyên tố trong mảng trên là: " + s);