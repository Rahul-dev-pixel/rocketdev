// basic loops

const Fruits = ["banana" , "Orange" , "grapes"] ;
//type
console.log(typeof(Fruits));
//printing an array
for(x in Fruits){
    console.log(Fruits[x]);
}

const Person = { name : "Priyanka", age : 29 , company : "S&P Global"};

//printing object using for loop

//printing array using for loop

const Marks1 = [78,84,87, 98,89];

for(let i=0; i< Marks1.length ; i++){
    console.log(Marks1[i]);
}

const Sorted = Marks1.sort();
console.log("Sorted Array" ) ;

for(let i=0; i<=Sorted.length ; i++){
        console.log(Sorted[i]) ;
}


let i=0;
console.log("Using While Sorted Array" ) ;

while(i<Sorted.length){
    console.log(Sorted[i]);
    i++;
}

console.log("Using do-While Sorted Array" ) ;

let j=0;
do{
    console.log(Sorted[j]);
    j++;
} while(j<Sorted.length)
