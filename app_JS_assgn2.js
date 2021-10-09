/*1
composedValue(square,double,5);
function composedValue(sq,dob,x){
    console.log(square(double(x)));
}
function square(x){
    return x*x;
}
function double(x){
    return x*2;
}*/

/*2
function compose(square,double){
    return function(x){
        return square(double(x));
    }
}
function square(x){
    return x*x;
}
function double(x){
    return x*2;
}
var f1=compose(square,double);
console.log(f1(5));
*/

/*3
find([1,3,5,4,2],isEven);
function isEven(x){
        if(x%2==0){
            return true;
        }
        else{
            false;
        }
    }
function find(arr,isEven){
    for(i=0;i<arr.length;i++){
        if(isEven(arr[i])){
            console.log(arr[i]);
            break;//only for 1st element of array that passes
        }
    }
}*/


/*4
map([1,2,3,4,5],square);
function map(arr,square){
    var res=[];
    for(i=0;i<arr.length;i++){
        var y=square(arr[i]);
        res.push(y);
    }
    console.log(res);
}
function square(x){
    return x*x;
}*/


/*5
function isEven(x){
        if(x%2==0){
            return true;
        }
        else{
            false;
        }
    }
function find(){
    if(isEven(arr[y])){
        console.log(arr[y]);
        return;
    }
    else{
        y++;
        find();
    }
}
var y=0,arr=[1,3,5,4,2];
find();*/

//6
/*
function map() {

    if (z == arr.length) {
        return;
    } else {
        y = square(arr[z]);
        console.log(y);
        z++;
        map();
    }
}
    //console.log(res);

    function square(x) {
        return x * x;
    }
    var res = [],
        z = 0,y=0,
        arr = [1, 3, 5, 4, 2];
    map();*/

/*7
function square(x){
    return x*x;
}
console.log('square is a function '+square);*/
