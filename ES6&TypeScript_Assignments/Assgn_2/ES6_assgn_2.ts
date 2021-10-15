/*2
let getNextArmstrong = {
    [Symbol.iterator](){
        let low=10,value;
        return{
            next(){
                function getNextArmstrong(low) {
                    var num = low+1;
                    while(true){
                        var str = num.toString();
                        var sum = 0;
                      for(var i = 0;i<str.length;i++){
                            sum = sum + Math.pow(parseInt(str[i]),str.length);
                        }
                        if(sum == num){
                            return sum;
                        }
                        else{
                            num++;
                        }
                    }
                   
                }
                [value,low]=[getNextArmstrong(low),getNextArmstrong(low)];
                return{value};
            }
        };
    }
};
for (let n of getNextArmstrong){
    console.log(n);
    if(n>10000){
        break;
    }
    
}*/

/*3
function * getNextarmstrong(low) {
    while(true){
        if(low>1000){
            return{done:true,'value':low};
        }
        low++;
    do{
        var str = low.toString();

        var sum = 0;

        for(var i = 0;i<str.length;i++){
            sum = sum + Math.pow(parseInt(str[i]),str.length);
        }

        if(sum == low){
            low = sum;
            break;
        }
        else
            low++;
    }while(true);
    yield low;
    }
}
var arr = getNextarmstrong(10);  
let temp = arr.next();
console.log(temp);*/

/*4
let chatr1 = new Map();
let chatr2 = new Map();
let user1 = new Set(["Hallo"]);
let user2 = new Set(["Hi"]);
let user3 = new Set(["Wie gehts?"]);
let user4 = new Set(["C3U1","Guten Morgen"]);
let user5 = new Set(["C3U2","Mir gut gehts"]);
let user6 = new Set(["C3U3","Gern geschehen"]);
chatr1.set("user1 Stark",user1);
chatr1.set("user2 Capt",user2);
chatr1.set("user3 Vision",user3);
chatr2.set("user1 Allrounder",user4);
chatr2.set("user2 Attacker",user5);
chatr2.set("user3 Defender",user6);
function printusersofchat(chatrm){
    for(let key of chatrm.keys()){
        console.log("\n",key);
    }
}
function printchatsofchat(chatrm){
    let chats = new Set();
    for(let key of chatrm.values()){
       key.forEach(chats.add,chats);
    }
    console.log("\n",chats);
}
console.log("\nUsers of chatroom 1 :");
printusersofchat(chatr1);

console.log("\nUsers of chatroom 2 :");
printusersofchat(chatr2);

console.log("\n Chats from chatroom 1 :");
printchatsofchat(chatr1);

console.log("\n Chats from chatroom 2 :");
printchatsofchat(chatr2);*/

class Fib implements IterableIterator<number>
 {  protected fn1 = 0; 
   protected fn2 = 1; 
    constructor(protected maxValue?: number) {} public next(): IteratorResult<number> {  
          var current = this.fn1;  
            this.fn1 = this.fn2;   
             this.fn2 = current + this.fn1;  
               if (this.maxValue != null && current >= this.maxValue) 
               {     
                  return {     
                       done: true,   
                            value: null    
                            }     
                          }    
                           return {   
                                done: false,   
                                   value: current    
                                  }  } 
                                    [Symbol.iterator](): IterableIterator<number> {    
                                      return this;  
                                    }}
                                    let fib = new Fib();
                                    fib.next();
                                    fib.next();
                                    fib.next();
                                    fib.next();
                                    fib.next();
                                    fib.next(); 
                                    let fibMax50 = new Fib(50);
                                    console.log(Array.from(fibMax50));
                                    let fibMax21 = new Fib(21);
                                    for(let num of fibMax21) 
                                    {  console.log(num)};
