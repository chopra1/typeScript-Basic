const tuple : (string | number)[] = ["Hello", 23]

let tUser : [string , number , boolean]
tUser = ["Wi-Fi", 1010 , true]  

let rgb : [number , number, number] = [225, 456, 456]

type ApplyMethod = [string, number]
const check: ApplyMethod = ["check push()" , 1]
//check[1] = "changed";  error
//check.push(true)  error