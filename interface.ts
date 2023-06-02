interface WorkLog {
    name : string,
    email: string,
    _dBid : number,
    work ?: string,
    startTrial(): string,
    getCoupon(couponname: string , value: number): number
}

const chetan : WorkLog = {name: "Chetan" , email: "c@c.com" , _dBid: 1100123 ,
 startTrial: () => {
    return "trial sarted"
},
getCoupon: (couponname: "discout", off: 10) => {
    return 10
}}

chetan.email = "chetan@gmail.com";