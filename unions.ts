let score : number | string = 33;
score = 44;
score = "55";

type Member = {
    name : string,
    id : number
}

type PremiumMember = {
    username : string
}

let Raj : Member | PremiumMember = {name: "Raj", id: 3}
Raj = {username: "raj32", id: 3}

function getDBid(id: number | string) {
    if (typeof id === "string"){
        id.toLowerCase()
    } else{
        return id;
    }
}

let seatAllotment : "aisle" | "middle" | "window"
//seatAllotment = "crew"