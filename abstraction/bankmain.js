"use strict";
class Bank{
    static bankName="SBI";
    #balance;
    constructor(balance){
        this.#balance=balance;
    }

    deposit(amount){
        if(amount>0){
            this.#balance+=amount;
            console.log("Amount deposit"+amount+"\nBalance is"+this.#balance);
        }
        else{
            alert("Invalid amount");
        }
    }

    withdraw(amount){
        if(amount>0 && this.#balance>=amount){
            this.#balance-=amount;
            console.log("Amount withdrawn"+amount+"\nBalance is"+this.#balance);
        }
        else{
            alert("Invalid amount");
        }
    }


    getBalance(){
        return this.#balance;
    }

   

}