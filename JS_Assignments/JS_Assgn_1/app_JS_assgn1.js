/*1
var unum= prompt("Plz enter a number");
var sum=0;
for(i=1;i<=unum;i++){
        sum+=i;
}
console.log(sum);*/

/*2
var unum= prompt("Plz enter a number");
var sum=0;
for(i=1;i<=unum;i++){
    if((i%3)==0 || (i%5)==0){
        sum+=i;
    }
}
console.log(sum);*/

/*3
var pcheck= prompt("Plz enter a number for checking even or odd");
function parity(pcheck){
    if((pcheck%2)==0){
        return 1;
    }
    else{
        return 0;
    }
};
if(parity(pcheck)){
    console.log('even');
}
else{
    console.log('odd');
}*/


/*function coinflip(){
    return(Math.floor(Math.random()*2)===0)? 'Heads': 'Tails';
}

var countH=0;
function headsRatio(x){
    for(i=0;i<x;i++){
        if(coinflip()==='Heads'){
            countH++;
        }
    }
    console.log(countH/x);
}
headsRatio(10);
headsRatio(10);
headsRatio(10000);
headsRatio(100000000);*/

/*5
var yr= prompt("Plz enter a year");
while(true){ //find the 1st leap yr
    if((yr%4==0 && yr%100!=0) || yr%400==0){
        break;
    }
    else{
        yr++;
    }
}
for(i=0;i<20;i++){
    yr=parseInt(yr)+4;
    if((yr%4==0 && yr%100!=0) || yr%400==0){
        console.log(""); //for lets say yr like 2100
    }
    else{
        yr++;
    }
    console.log(yr+'\n');
}*/


/*6
function printList(list){
    var list=["Hello","World","in","a","frame"];
    console.log('********');
    for(var i=0;i< list.length ;i++){
        console.log('* '+list[i]+' *');
}
    console.log('********');
}

printList();*/


/*7
var dol= prompt("Plz enter value in dollars");
console.log(dol+' dollar is:');
console.log((dol*74.28)+' INR(Indian Rupee)');
console.log((dol*109.14)+' Yen(Japanese Yen)');
console.log((dol*0.84)+' Euro(Euro)');
console.log((dol*0.72)+' Pound sterling(Pound sterling)');*/

/*8
function arrconcat() {
    var arr1 = ['a', 'b', 'c'];
    var arr2 = [1, 2, 3];
    var arr3 = arr1.concat(arr2);
    console.log(arr3);
}
arrconcat();*/

/*9
function arrconcatalt() {
    var arr1 = ['a', 'b', 'c'];
    var arr2 = [1, 2, 3];
    var arr3 = [];
    var i=0,i1=0,i2=0;
    while(i<arr1.length + arr2.length){
        if(i1>i2){
            arr3[i]=arr2[i2];
            i2++;
        }
        else{
            arr3[i]=arr1[i1];
            i1++;
        }
        i++;
    }
    console.log(arr3);
}
arrconcatalt();*/

/*10
function fibseries() {
    var first = 1,
        second = 1,
        third, n = 100;
    var fibarr=[1,1];
    for (i = 1; i <= n; i++) {
        third=first+second;
        first=second;
        second=third;
        fibarr.push(third);
    }
    console.log(fibarr);
}
fibseries();*/

/*11
function reversearr(){
    var arr1=[1,2,'a','hi',true,5];
    var arr2=arr1.reverse();
    console.log(arr2);
}
reversearr();
*/


//12
/*function longtoken(str) {
    var res = '',
        k = 0,
        list = [];
    for (i = 0; i < str.length; i++) {
        if (str[i] != 'a' && str[i] != 'b') {
            var temp = '';
            for(j=i;j<str.length;j++){
                temp += str[j];
           
            if (str[j + 1] == 'a' || str[j + 1] == 'b') {
                //console.log(temp);
                list.push(temp);
                break;
            }
            }
            

        } else {
            continue;
        }

    }
    console.log(list);
    for(z=1;z<list.length;z++){
        var maxi=list[0].length;
        if(maxi<list[z].length){
            res=list[z];
        }
        
    }
    console.log(res);
}
longtoken('ababcdababefgababhiab');*/

/*13
function usingfor(){
    var list=[2,45,8,7,6,2,3,9],sum=0;
    for(i=0;i<list.length;i++){
        sum+=list[i];
    }
    console.log(sum);
}
function usingwhile(){
    var list=[2,45,8,7,6,2,3,9],sum=0,i=0;
    while(i<list.length){
        sum+=list[i];
        i++;
    }
    console.log(sum);
}
function usingdowhile(){
    var list=[2,45,8,7,6,2,3,9],sum=0,i=0;
    do{
        sum+=list[i];
        i++;
    }while(i<list.length)
    console.log(sum);
}
usingdowhile();
usingwhile();
usingfor();*/

/*14
var arrrand=Array.from({length:100},()=>Math.floor(Math.random()*101)+1);
console.log(arrrand);

var maxarr=Math.max(...arrrand);
console.log(maxarr);

var minarr=Math.min(...arrrand);
console.log(minarr);

var ec=0,oc=0,sum=0;
for(i=0;i<arrrand.length;i++){
    sum+=arrrand[i];
    if(arrrand[i]%2==0){
        ec++;
    }else{
        oc++;
    }
}
if(ec>oc){
    console.log('High even count');
}
else{
    console.log('High odd count');
}
console.log('Sum= '+sum);
console.log('Avg= '+sum/100);*/


/*15
function sortarr(){
    var randarr=Array.from({length:20},()=>Math.floor(Math.random()*100));
    var temp;
    for(i=0;i<randarr.length-1;i++){
        for(j=0; j<randarr.length-i-1;j++){
            if(randarr[j]>randarr[j+1])
                {
                    temp = randarr[j];
                    randarr[j] = randarr[j+1];
                    randarr[j+1] = temp;
                }
        }
    }
    for(z=0;z<randarr.length;z++)
    {
       console.log(randarr[z]);
    }
}
sortarr();*/

//16
/*
var prow = prompt('Plz enter the no. of rows you want');
var pcol = prompt('Plz enter the no. of columns you want');
for(i=0;i<parseInt(prow);i++){
    var tab=document.getElementById('mytable').insertRow(i);
    for(j=0;j<parseInt(pcol);j++){
        var col=tab.insertCell(j);
    }
}*/

/*17
function rotarr(){
    var arr=[1,2,3,4,5,6],d=2,temp,i,j,n=arr.length;
    for(i=0;i<d;i++){
        temp=arr[0];
        for(j=0;j<n-1;j++){
            arr[j]=arr[j+1];
        }
        arr[n-1]=temp;
    }
    console.log(arr);
}
rotarr();*/


/*18
Platin();
function joinstr(str){
    var temp='';
    temp = str[0];
    var res = '';
    res = str.substring(1) + temp + 'ay';
    return res;
}

function Platin() {
    var str=prompt('Enter a string to be converted to Pig Latin');
    var s = str.split(' ');
    var result='';
    for (i = 0; i < s.length; i++) {

        result+=joinstr(s[i])+' ' ;
    }

    console.log(result);
}*/

/*var a, b;
var promise1 = new Promise(function (resolve, reject) {
    a = Math.floor(Math.random() * 10) + 1;
    if (a > 5) {
        resolve(a);
    }
    else {
        reject(0);
    }
});
var promise2 = new Promise(function (resolve, reject) {
    b = Math.floor(Math.random() * 51) + 1;
    if (b > 10) {
        resolve(b);
    }
    else {
        reject(0);
    }
});
Promise.all([promise1, promise2]).then(function (values) { console.log('All promises have been fullfiled with ' + (a + b)); });*/


var chatr1 = new Map();
var chatr2 = new Map();
var user1 = new Set(["Hallo"]);
var user2 = new Set(["Hi"]);
var user3 = new Set(["Wie gehts?"]);
var user4 = new Set(["c2u1", "Guten Morgen"]);
var user5 = new Set(["c2u2", "Mir gut gehts"]);
var user6 = new Set(["c2u3", "Gern geschehen"]);
chatr1.set("user1 Stark", user1);
chatr1.set("user2 Capt", user2);
chatr1.set("user3 Vision", user3);
chatr2.set("user1 Allrounder", user4);
chatr2.set("user2 Attacker", user5);
chatr2.set("user3 Defender", user6);
function printusersofchat(chatrm) {
    for (var _i = 0, _a = chatrm.keys(); _i < _a.length; _i++) {
        var key = _a[_i];
        console.log("\n", key);
    }
}
function printchatsofchat(chatrm) {
    var chats = new Set();
    for (var _i = 0, _a = chatrm.values(); _i < _a.length; _i++) {
        var key = _a[_i];
        key.forEach(chats.add, chats);
    }
    console.log("\n", chats);
}
console.log("\nUsers of chatroom 1 :");
printusersofchat(chatr1);
console.log("\nUsers of chatroom 2 :");
printusersofchat(chatr2);
console.log("\n Chats from chatroom 1 :");
printchatsofchat(chatr1);
console.log("\n Chats from chatroom 2 :");
printchatsofchat(chatr2);
