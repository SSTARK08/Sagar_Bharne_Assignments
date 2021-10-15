/*1
var a:number,b:number;
var promise1= new Promise(function(resolve,reject){
    a=Math.floor(Math.random()*10)+1;
    if(a>5){
        resolve(a);
    }
    else{
        reject(0);
    }    
});
var promise2=new Promise(function(resolve,reject){
    b=Math.floor(Math.random()*51)+1;
    if(b>10){
        resolve(b);
    }
    else{
        reject(0);
    }
});
Promise.all([promise1,promise2]).then(values =>{console.log('All promises have been fullfiled'+(a+b));});*/


/*2
class Account{
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

interface Printable{
    fname?:string,
    lname?:string,
    id?: number,
    circumference?:number,
    area?:number
};
 
let Circle :Printable = {
    circumference:7844,
   area:84851
};

let Employee :Printable = {
    fname: 'Sam',
    lname:'Stark',
    id:84617416512
};

function printAll(Circle, Employee){
    console.log(Circle);
    console.log(Employee);
}
printAll(Circle,Employee);