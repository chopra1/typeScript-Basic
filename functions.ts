function addTwo(num:number):number{
    return num + 2;
}
addTwo(5)

function getUpper(val:string){
    return val.toUpperCase()
}
getUpper('Myself')

function signUpUser(name:string, email:string, isPaid:boolean=false){}
signUpUser("chetan", "c@c.com", false);
signUpUser("Himanshu", "h@history.com");

let loginUser = (name, email, isPaid) => {
}

const heroes = ["thor", "spiter-man", "iron-man"]
heroes.map((hero): string => {return `Hero is  ${hero}`})   

function consoleErr(errMessage:string):void {
    console.log(errMessage);
}

function handleErr(errmsg:string):never {
    throw new Error(errmsg);
}

export{}

