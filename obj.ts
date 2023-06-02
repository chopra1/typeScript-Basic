//object types
function printCoordinates(pt: { x: number, y: number }) {
    console.log("The co-ordinate x value is " + pt.x);
    console.log("the co-ordinates y value is " + pt.y);
}
printCoordinates({ x: 12, y: 34 });


//Optional properties
function printName(obj: { first: string , last?: string }) {
    //console.log(obj.last.toUpperCase());  error - undefined

    if(obj.last !== undefined) {
        console.log(obj.last.toUpperCase());
    }
    console.log(obj.last?.toUpperCase());
}
printName({ first: "Mark"});
printName({ first: "Alice" , last: "Allison" });


//function with union types
function printId(id: string | number) {
    console.log("Your ID is " + id)
    //console.log("Your id is " + id.toUpperCase());
    if(typeof id === "string") {
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }
}
printId(123);

function welcomePeople(x: string | string[]) {
    if(Array.isArray(x)){
        console.log("Hello " + x.join("and Welcome"));
    } else {
        console.log("Hello and welcome " + x);
    }
    return x.slice(0,3);
    //If every member in a union has a property in common, you can use that property without narrowing:
}

const user = {
    name: "hitesh", email: "h@h.com", isActive:true
}
function creataUser({name:string, isPaid:boolean}){}
    let newUser = {name:"Chandan", isPaid:false, email:"chandu@g.com"}
creataUser(newUser)

function createCourse():{name:string, price:number}{
    return {name:"reactjs", price: 0}
}

export{}
