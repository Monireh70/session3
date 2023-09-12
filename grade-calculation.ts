const result:number = 200;

if( result > 100 || result < 0 ){
    console.log("Result is not Valid!");
}else if( result >= 90 ){
    console.log("Your Grade is A")
}else if ( result >= 80 ){
    console.log("Your Grade is B")
}else if ( result >= 70 ){
    console.log("Your Grade is C")
}else if ( result >= 60 ){
    console.log("Your Grade is D")
}else if ( result >= 50  ){
    console.log("Your Grade is E")
}else {
    console.log("Your Grade is F")
}