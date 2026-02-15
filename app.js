const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();

function isEven(x){
    if (x % 2 == 0){
        return true;
    } 
    return false;
}

const x = Number(input);

isEven(x);