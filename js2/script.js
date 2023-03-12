let i;
const Nmax = 100;
const fizzStr = 'Fizz'
const fizzbuzzStr = 'Fizzbuzz'
const buzzStr = 'buzz'

let sqrContainer = document.getElementById('square-container')

for(i=1; i<=Nmax; i++){
    if((i % 3 === 0) && (i % 5 === 0)){
        sqrContainer.appendChild(squareGen(fizzbuzzStr, 'fizzbuzz-style'))
    }else if(i % 5 === 0){
        sqrContainer.appendChild(squareGen(buzzStr, 'buzz-style'))
    }
    else if(i % 3 === 0){
        sqrContainer.appendChild(squareGen(fizzStr, 'fizz-style'))
    }
    else{
        sqrContainer.appendChild(squareGen(i))
    }
}


function squareGen(text, classP) {
    const div = document.createElement('div');
    div.classList.add('square', 'd-flex', 'justify-content-center', 'align-items-center', classP);
    div.innerHTML = `<small>${text}</small>`;
    return div;
}