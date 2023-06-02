type User  = {
    name: string;
    email: string;
    isActive: boolean;
    readonly _id: string;
    creditCardDedails?: number;
}

function createUser(user : User):User{
    return {name: "Nayak", email: "naya@gmail.com", isActive: false, _id: "1234"}
}
createUser({name: "", email: "", isActive: false, _id:"1234"})

let myUser: User = {
    name: "Jay",
    email: "h@h.com",
    isActive : false,
    _id : "1234",
    } 

myUser.email = "h@gmail.com";
//myUser._id = "abcd";

type cardNumber = {
    cardNumber : bigint;
}

type cardDate = {
    cardDate : Date;
}

type cardDetails = cardNumber & cardDate & {
    cvv : number;
}


export{}