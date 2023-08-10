// import chalk from 'chalk'; 
const chalk=require('chalk');


const login=(isUserLoggedIn)=>{
    if(isUserLoggedIn){
        console.log(chalk.bgGreenBright('Congratulations welcome to Dashboard')); 
    }else{
        console.log(chalk.bgRedBright('Login Failed. Please Enter Valid Credentials'));
    }
};
// 13909C
console.log(chalk.yellowBright('Enter Valid Credentials'));
console.log(chalk.hex('#83139C').bold('Bold gray!'));

login(true);

const votercheck= (age)=>
{
if(age>=18)
{
    console.log(chalk.greenBright("valid voter"));
}
else
{
    console.log(chalk.redBright("Invalid voter"));;
}
}
//calling voter check method
votercheck(18);
votercheck(16);

// checking for prime or not
const checkPrime = (digit) =>
{
    let counter = 0;
    for(i=1;i<=digit;i++)
    {
        if(digit % i == 0)
        {
            counter++;
        }
    }
    if(counter==2)
    {
        console.log(chalk.greenBright("the given number" + digit + "is prime"));
    }
    else
    {
        console.log(chalk.redBright("the given number" + digit + "is not prime"));
    }
}
checkPrime(7);//calling checkPrime by giving value

// Checking given no is polyndrome or not

 const checkPolyndrome = (str) =>
 {
 console.log(str);
 // using string.split to  char array
let arr = str.split("")
              
// Display output
console.log(arr);

let revstr = arr.reverse(); // reversing the arr character array
console.log(revstr);
// joining to make revstr into string and compare with str
let rev = revstr.join("");
console.log(rev);
if(str==rev)
{
    console.log(chalk.greenBright("Polyndrome"));
}
else
console.log("Not a Polyndrome");

/*
if(arr==revstr)
{
 
 console.log(chalk.greenBright("Given string is polyndrome"));
}
else
{
    console.log(chalk.redBright("the given string is not polyndrome"));
}*/
 }
 checkPolyndrome("MOM");