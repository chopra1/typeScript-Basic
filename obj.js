//object types
function printCoordinates(pt) {
    console.log("The co-ordinate x value is " + pt.x);
    console.log("the co-ordinates y value is " + pt.y);
}
printCoordinates({ x: 12, y: 34 });
//Optional properties
function printName(obj) {
    //console.log(obj.last.toUpperCase());  error - undefined
    var _a;
    if (obj.last !== undefined) {
        console.log(obj.last.toUpperCase());
    }
    console.log((_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase());
}
printName({ first: "Mark" });
printName({ first: "Alice", last: "Allison" });
//function with union types
function printId(id) {
    console.log("Your ID is " + id);
    //console.log("Your id is " + id.toUpperCase());
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
printId(123);
function welcomePeople(x) {
    if (Array.isArray(x)) {
        console.log("Hello " + x.join("and Welcome"));
    }
    else {
        console.log("Hello and welcome " + x);
    }
    return x.slice(0, 3);
    //If every member in a union has a property in common, you can use that property without narrowing:
}
var user = {
    name: "hitesh", email: "h@h.com", isActive: true
};
function creataUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "Chandan", isPaid: false, email: "chandu@g.com" };
creataUser(newUser);
function createCourse() {
    return { name: "reactjs", price: 0 };
}
