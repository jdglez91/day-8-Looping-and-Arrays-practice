let i = 20;
do {
    // Magic goes here;
    if ( i % 5 ===0){
        console.log(i + "!");
        i--;
        continue;
    }
    console.log(i); 
    i--;
} while (i > 0);
console.log('LIFTOFF')