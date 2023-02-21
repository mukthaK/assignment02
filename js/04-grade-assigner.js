let score;
do {
    score = parseInt(prompt(`Enter a number between 1 and 100`));
} while (score < 1 || score > 100) ;

if (score >= 90) 
    console.log(`You received an A`);
else if (score >= 80) 
    console.log(`You received a B`);
else if (score >= 70) 
    console.log(`You received a C`);
else if (score >= 60) 
    console.log(`You received a D`);
else  
    console.log(`You received an F`);