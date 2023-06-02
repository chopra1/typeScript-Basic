function padLeft(padding: number | string , input: string) {
    if (typeof padding === "number") {
        return " ".repeat(padding) + input;
    }  //padding is number
    return padding + input;
}  //padding is string

function printAll(strs: string | string[] | null) {
    if(typeof strs && strs === "object"){  //gotten rid of the error above by checking if strs is truthy.
        for (const s of strs){
            console.log(s);
        }
    }else if(typeof strs === "string"){
        console.log(strs)
    }
}

Boolean("Hello World");
!!"Hello World";

//One last word on narrowing by truthiness is that Boolean negations with ! filter out from negated branches.
function multiplyAll(
    value: number[] | undefined,
    factor: number
    ): number[] | undefined {
        if (!value) {
            return value;
        } else {
            return value.map((x) => x * factor);
        }
    }  


//Equality narrowing
function example( x: string | number , y: string | boolean) {
    if ( x === y ) {
        x.toUpperCase();
        y.toLowerCase();
    } else {
        console.log(x);
        console.log(y);
    }
}


//loose equality
interface Container {
    value: number | null | undefined;
}
function multiplyValue(container: Container, factor: number){
    if (container.value != null){
        console.log(container.value);
        container.value *= factor;
    }    
}