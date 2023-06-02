console.log("Hello World!");

function welcome(name:string, date:Date){
    console.log(`Hello ${name} , Today is ${date.toDateString()}`);
}
welcome('Michael', new Date());

let greetings : string = "Hello Chetan";
console.log(greetings.toUpperCase());

let userID : number = 1234;
console.log(userID.toPrecision());

let isLoggedIn : Boolean = false;
console.log(isLoggedIn.valueOf());

//This will remove red lines from the code
export{}