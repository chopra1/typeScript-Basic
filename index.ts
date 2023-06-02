//You can explicitily describe the object's shape using an (interface) declaration.
//Interfaces may only be used to declare the shapes of objects, not rename primitives.
//Interface names will always appear in their original form in error messages, but only when they are used by name.
interface User {
    name : string;
    id : number;
}

const user : User = {
    name : "Hemal",
    id : 1,
 // username : "Hemal"
}//done


//OOP concepts
//interface , class, constructor, declare
interface Owner {
    name : string;
    id : number;
}

class UserAccount {
    name : string;
    id : number;    
    
    constructor(name : string, id : number){
        this.name = name;
        this.id = id;
    }
}
const person : Owner = new UserAccount("Happy", 2);


//Composing types
//do it by union types or generic types
//union types - a type could be one of many type
type MyBool = true | false;
type WindowStates = "closed" | "open" | "minimised";
type LockStates = "Locked" | "unlocked";
type EvenNumbersBelowTen = 2 | 4 | 6 | 8;

function getLength(obj: string | string[]){
    return obj.length;
}

//generic types - provide variables to type, Commonly an Array. Am Array with generics provide describe type values of array
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectArray = Array< { name : string } >;   


//Structural Type System
//Structured typing / duck typing
//In a structured typing if two objects have the same shape, they are consiered to be of same type.
interface Point{
    x: number;
    y : number;
}
function logPoint(p: Point){
    console.log(`${p.x}, ${p.y}`)
}
const point = {x:11, y:12} ;
logPoint(point);

const point1 = {x:12, y:34, z:54};
logPoint(point1);

const point2 = {x:34}
//logPoint(point2); //error

const point3 = {x:56, y:true}
//logPoint(point3); //error


class ViewPoint {
    x:number;
    y:number;
    constructor(x:number, y:number){
        this.x=x;
        this.y=y;
    }
}
const newViewPoint = new ViewPoint(45, 67)
//no matter how objects or class conform the shape if the objects or class has all the required properties, TypeScript will say they match.
logPoint(newViewPoint);


//datatype (any)
// Any is the TypeScript escape clause. You can use any to either declare a section of your code to be dynamic and
// JavaScript like with the trade-off of type safety. or to work around limitations in the type system.
//A good case of any is JSON parsing
const myObj = JSON.parse("{}");
// Any declares to TypeScript to trust your code as being safe because you know more about it. 
// any is much like a 'type wildcard' which you can replace with any type (except never) to make one type assignable to the other.

declare function debug(value: any): void;
debug("a string");
debug(23);
debug({ color: "blue" });
// Each call to debug is allowed because you could replace the any with the type of the argument to match.

// TypeScript will take into account the position of the anys in different forms, for example with these tuples for the function argument.
declare function swap(x: [number, string]): [string, number];
declare const pair: [any, any];
swap(pair);
// The call to swap is allowed because the argument can be matched by replacing the first any in pair with number and the second `any` with string.
// Unknown is a sibling type to any,
// if any is about saying "I know what's best",
// then unknown is a way to say "I'm not sure what is best, so you need to tell TS the type" example:unknown-and-never.


//Type Assertions
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;  //OR
const canvas = <HTMLCanvasElement>document.getElementById("main_canvas"); 


//Literal types
const constantString = "Hello World";
// Because `con stantString` can only represent 1 possible string, it has a literal type representation
constantString;


//literal Inference
//const req = { url: "https://example.com" , method: "GET" as "GET"};
//handleRequest(req.url , req.method as "GET");

//There are two ways to work around this.
//You can change the inference by adding a type assertion in either location:
// Change 1:
//const req = { url: "https://example.com", method: "GET" as "GET" };
// Change 2
//handleRequest(req.url, req.method as "GET");
//Try Change 1 means “I intend for req.method to always have the literal type "GET"”.
// Change 2 means “I know for other reasons that req.method has the value "GET"“. You can use as const to convert the entire object to be type literals:

//const req = { url: "https://example.com", method: "GET" } as const;
//handleRequest(req.url, req.method);
//The (as const) suffix acts like const but for the type system, ensuring that all properties are assigned the literal type instead of a more general version like string or number. 


//Non-null Assertion Operator (Postfix !)
//TypeScript also has a special syntax for removing null and undefined from a type without doing any explicit checking. 
//Writing ! after any expression is effectively a type assertion that the value isn’t null or undefined:
function liveDangerously(x?: number | null) {
    console.log(x!.toFixed());
}