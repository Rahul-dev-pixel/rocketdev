const bcrypt = require('bcrypt');
const saltRounds = 10;
const chalk=require('chalk');

// SIGN -UP or RESET PASSWORD
const createPassword = (userPlainPassword) => {
    console.log(chalk.bgYellowBright("createPassword Function START"));
    bcrypt.hash(userPlainPassword, saltRounds, function (err, hash) {
        // Store hash in your password DB.
        if (err) {
            console.log(chalk.bgRedBright(err));
            return err;
            
        }
        console.log(chalk.bgBlueBright("Your Password is ",userPlainPassword, "and it is converted as"));
        console.log(chalk.bgBlueBright(hash));
        return hash;
    });
    console.log(chalk.bgYellowBright("createPassword Function END"));

}

// LOGIN 
const verifyPassword = (userPlainPassword, hashFromTheDatabase) => {
    console.log(chalk.bgYellowBright("verifyPassword Function START"));
    bcrypt.compare(userPlainPassword, hashFromTheDatabase, function (err, result) {
        // result == true
        if (err) {
            console.log(chalk.bgRedBright(err));
            return err;
        }
        if(result){
            console.log(chalk.bgGreenBright(result));
            console.log(chalk.bgGreenBright("Congratulations : Welcome to the application content"));
        }else{
            console.log(chalk.bgRedBright(result));
            console.log(chalk.bgRedBright("Invalid Password: Your verification is failed"));
        }
        
        
        return result;
        
    });
    console.log(chalk.bgYellowBright("verifyPassword Function END"));
}

module.exports = {
    createPassword,
    verifyPassword,
}

createPassword("meher");
verifyPassword("meher","$2b$10$lpoLBGk8QbCfpfLnGl2NuOFMpIo4zn0DshwdSorzRUdGDF2urG49O");


