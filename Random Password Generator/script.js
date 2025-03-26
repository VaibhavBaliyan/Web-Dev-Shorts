// RANDOM PASSWORD GENERATOR

function generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+~`-={}|:;,<.>/?";

    let allowedChars="";
    let password = "";

    allowedChars += includeLowercase ? lowercase : "";
    allowedChars += includeUppercase ? uppercase : "";
    allowedChars += includeNumbers ? numbers : "";
    allowedChars += includeSymbols ? symbols : "";

    if(passwordLength <= 0){
        return `Password length must be greater than 0`;
    }
    if(allowedChars.length === 0){
        return `At least one character type must be selected`;
    }

    for(let i = 0; i < passwordLength; i++){
        const randomIndex =  Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const Password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);

console.log(`Generated Password: ${Password}`);
