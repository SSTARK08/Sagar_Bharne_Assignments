class Rectangle { //1 2
    constructor(wd, ht) {
        this.wd = wd;
        this.ht = ht;
        this.getArea = function () {
            console.log("area= " + (this.wd * this.ht));
        };
    }
}


var r1 = new Rectangle(47, 19);
var r2 = new Rectangle(88, 77);
console.log("r1 wd= " + r1.wd + " r1 ht= " + r1.ht);
r2.wd = 60;
r2.ht = 55;
console.log("r2 wd= " + r2.wd + " r2 ht= " + r2.ht);
r1.getArea();
r2.getArea();


class Person {}
var per1 = new Person();
per1.f_Name = "Albus";
per1.m_Name = "Severus";
per1.l_Name = "Potter";

per1.f_Name = "Barney";
per1.m_Name = "Wait for it...";
per1.l_Name = "Stinson";

console.log("per1 Name= " + per1.f_Name);
console.log("per1 Middle Name= " + per1.m_Name);
console.log("per1 LastName= " + per1.l_Name);


//6
var str = '({"f_Name":"Tony", "l_Name":"Stark"})';
var per2 = eval(str);
console.log('per2 First Name= ' + per2.f_Name);
console.log('per2 Last Name= ' + per2.l_Name);


//7.
var str1 = '{"f_Name":"Baba", "l_Name":"Voss"}';
var per3 = JSON.parse(str1);
console.log('per3 First Name= ' + per3.f_Name);
console.log('per3 Last Name= ' + per3.l_Name);

//8 9 10
function person(fname, lname, age, skill, dateofbirth, address, married, profession) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.skill = skill;
    this.dateofbirth = dateofbirth;
    this.address = address;
    this.married = married;
    this.profession = profession;

}
var person1 = new person("nikhil", "goud", 22, ['c'], "24/10/1996", {
    city: "hyberabad",
    pincode: "521185"
}, "false", "sr analyst");
var person2 = new person("harish", "chinna", 21, "HTML", "08/06/1997", {
    city: "Ammeerpet",
    pincode: "500038"
}, "false", "jr analyst");

print = function () {
    console.log(person1);
    console.log(person2);
}();

amitabh = new person("amitabh", "bachan", 22, ['c'], "24/10/1996", {
    city: "hyberabad",
    pincode: "521185"
}, "false", "sr analyst");
abhishek = new person("abhishek", 21, "HTML", "08/06/1997", "false", "jr analyst");
var abhishek = Object.create(amitabh);
Aaradhya = new person("Aaradhya", 18, "C#", "10/5/2002", "fresher");
var Aaradhya = Object.create(amitabh, abhishek);
print = function () {
    console.log(amitabh);
    console.log(abhishek.lname);
    console.log(abhishek.address);
    console.log(Aaradhya);
}();

//11

class BankAccount {
    constructor(accountNumber, accountHolderName, accountBalance) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.accountBalance = accountBalance;
        this.getCurrentBal = function(){
            console.log(this.accountBalance);
        };
    }
}

class SavingsAccount extends BankAccount {
    constructor(accountNumber, accountHolderName, accountBalance, isSalary) {
        super(accountNumber, accountHolderName, accountBalance);
        this.isSalary = isSalary;
        this.withdraw = function(amount){
            this.accountBalance -= amount;
            if (this.accountBalance< 0){
                return -1;
            }
                
        };
    }

}

class CurrentAccount extends BankAccount {
    constructor(accountNumber, accountHolderName, accountBalance, odLimit) {
        super(accountNumber, accountHolderName, accountBalance);
        this.odLimit = odLimit;
        this.withdraw = function(amount){
            this.accountBalance -= amount;
            if (this.accountBalance < -odLimit){
                return -1;
            }
                
        };
    }

}
var Customer1 = new SavingsAccount(01585566174533, 'Tony Stark', 250000000, true);
Customer1.withdraw(5000);
Customer1.getCurrentBal();

var Customer2 = new CurrentAccount(01585566173224, 'Ivan Vanko', 23, 5000);
Customer2.withdraw(10000);
Customer2.getCurrentBal();
