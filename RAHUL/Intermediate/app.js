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