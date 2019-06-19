
let change = { // this is a placeholder that initializes the data coming in
    totalChange : 0,
    quarters : 0,
    dimes : 0,
    nickels: 0 ,
    pennies: 0 
    
};



function calculateChange() {
    
    console.log('Button was Clicked.')// makes sure that the button clicks

    let amountDue = document.getElementById('amount-due').value * 100; //taking the amount and multipling it by 100 so that it breaks down the value and doesnt become a floating value
    let amountReceived = document.getElementById('amount-received').value * 100;
    let result = (amountReceived) - (amountDue);


let change$ = Math.floor((result)/100); //you are dividing by 100 in order to seperate the dollars from the change. you will get a whole number instead of decimals
    document.getElementById("dollars-output").innerHTML = change$; //you are gettin the exact amount of dollars and putting that into a variable
    //

let changeQ = Math.floor(((result)-(change$ * 100))/25);//get  the amount of money that is left "result" and subtract it by the dollar 
    document.getElementById('quarters-output').innerHTML =  changeQ;

let changeD = Math.floor(((result)-(change$ * 100)-(changeQ*25))/10);
    document.getElementById('dimes-output').innerHTML = changeD;

let changeN = Math.floor(((result)-(change$ * 100)-(changeQ*25)-(changeD*10))/5);
    document.getElementById('nickels-output').innerHTML = changeN;

let changeP = Math.ceil(((result)-(change$ * 100)-(changeQ*25)-(changeD*10)-(changeD*5))/1);
    document.getElementById('pennies-output').innerHTML = changeP;

}
document.getElementById("calculate-change").innerHTML = "Your change is: $" + result+ ".";

//this uses methods instead of hard math
//you are putting functions in a variable