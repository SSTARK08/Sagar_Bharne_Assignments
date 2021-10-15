/*1
const proteleratio=1836.152;
proteleratio=5;*/

/*2
if(true){
    let x=1848;
}
console.log(x);
*/

/*3
let Order={
    id:1,
    title:'Nuggets',
    price:10,
    printOrder:function(){
        console.log(this.title);
    },
    getPrice:function(){
        console.log(this.price);
    }
}
let clone_Order=Object.assign({},Order);
console.log(clone_Order);*/

/*4
let arr=['Tom','Ivan','Jerry'];
let arr2 = arr.map((str,index)=>({name:str,length:str.length}));
console.log(arr2);*/

/*
let add=function(a,b){
    let sum=a+b;
    console.log(sum);
};
add(2,3);

let userFriends=function(username,friends){
    console.log(username);
    let[...fnds]=friends;
    console.log(fnds);
    
}
userFriends('Stark',['Clint','Steve','Bruce','Natasha']);

let CapitalNames=function(...names){
    for(let name of names){
        console.log(name.toUpperCase());
    }
}
CapitalNames('clint','steve','bruce','natasha');*/

/*
let laptop_price=50000;
let desk_no=15;
let uname="Stark";
console.log(`Hi myself ${uname} with desk no. ${desk_no} having a PC of value ${laptop_price}Rs is having a issue in logging in it.`);*/

/*7a
let arr=['Clint','Steve','Bruce','Natasha'];
let [,,third,]=arr;
console.log(third);

//7b
let org={
    name:'Avengers',
    address:{
        street:'Bohemith lane',
        num:841616
    }
}
let fun=function(){
    let{name,address}=org;
    console.log(address.num);
}
fun();*/

//8
/*class Account{
    static sum=0;
    constructor(id,name,balance){
        Account.sum+=balance;
    }
    getBalance(){
        return Account.sum;
    }
}
class SavingAccount extends Account{
    constructor(id,name,balance,interest,cash_credit){
        balance+=cash_credit+interest;
        super(id,name,balance);
            console.log('Balance added to your saving account');
    }
}
class CurrentAccount extends Account{
    constructor(id,name,balance,interest,cash_credit){
        balance+=cash_credit+interest;
        super(id,name,balance);
            console.log('Balance added to your current account');
        }
    }
let acc1=new SavingAccount(1,'Stark',5000000,1055585,45000);
let acc2=new CurrentAccount(2,'Will',12,68585,9865);
let acc3=new SavingAccount(3,'Sarah',7846,5348,555);
let acc4=new CurrentAccount(4,'Floyd',876845,9486,98);
console.log(acc4.getBalance());*/


