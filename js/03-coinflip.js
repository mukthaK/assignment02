let coinFlip = Math.round(Math.random());
let choice = prompt(`Heads or Tails (h/t) ?`).toLowerCase();
let result;

/* Random number results in either 0 or 1. If less than 1, heads. Else Tails. 0=Heads 1=Tails */
if (coinFlip < 1) result = 'h';
else result = 't';

if (result == 'h') {
    if (choice =='h') {
        alert(`The flip was heads and you chose heads...you win!`);
    } else {
        alert(`The flip was heads but you chose tails...you lose!`);
    }    
} else if (result == 't') {
    if (choice =='t') {
        alert(`The flip was tails and you chose tails...you win!`);
    } else {
        alert(`The flip was tails but you chose heads...you lose!`);
    }   
} 
