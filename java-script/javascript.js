// login validation

var email=document.getElementById("email");
var password=document.getElementById("password");
var captcha=document.getElementById("captcha");

function login(){
if(email.value=="amitkumargkp817@gmail.com" && password.value==54321)
    {
        if(captcha.value=="Q23f42"){

       
        alert("Welcome to Kitchen Story: "+email.value);
        location.href="homepage.html";
        }  
        else{
            
            document.getElementById("captcha").innerText="Please type correct Captcha";
            location.href="login.html";
        }  
    }
    else if(email.value=="admin@gmail.com" && password.value=="admin")
    {
        alert("Welcome to Admin Page");
        location.href="adminlogin.html";
    }
    else{
        
        alert(" Login Not Successful \n Please try again " +email.value);
        location.href="login.html";
    }
}

// Search funcationality

var lsearch=document.getElementById("search");

function searchfunc(){
    if(search.value=="pizza"){
        location.href="pizza.html";
    }
    else if(search.value=="burger"){
        location.href="burger.html";
    }
    else if(search.value=="ice cream"){
        location.href="ice-cream.html";l
    
    }
    else{
        alert("Please type a valid food");
        location.href="homepage.html";
    }
}

// Continue Button 

function back(){
    location.href="homepage.html";
}

// logout function

function logout(){
    alert("You have been logged out");
    location.href="login.html";
}

var burger1_p=80, burger2_p=100;
var burger1_q=0, burger2_q=0;
var bill_b1="";
var bill_b2="";
i=0;
j=0;
k=0;

// for burger1

document.getElementById("burger1").addEventListener("click", function(){
    while(j<1){
        i=i+1;
        j=j+1;
    }
    if(this.value=="" || this.value==0){
        i=i-1;
        j=0;
        burger1_q=0;
        bill_b1="";
        printbill()

    }
    else{

        

        burger1_q=document.getElementById("burger1").value;
        bill_b1="<tr><td>Mc-Donald's Burger</td><td>"+burger1_q+"</td><td>"+burger1_q*burger1_p+"</td></tr>"
        printbill()
    }
});

// for burger2
document.getElementById("burger2").addEventListener("click", function(){
    while(k<1){
        i=i+1;
        k=k+1;
    }
    if(this.value=="" || this.value==0){
        i=i-1;
        k=0;

        burger2_q=0;
        bill_b2="";
        printbill()

    }
    else{

        burger2_q=document.getElementById("burger2").value;
        bill_b2="<tr><td>KFC Burger</td><td>"+burger2_q+"</td><td>"+burger2_q*burger2_p+"</td></tr>"
        printbill()
    }
});



function printbill(){
    
    document.getElementById("cartvalue").innerHTML=bill_b1+bill_b2;
    document.getElementById("amount").innerText=burger1_p*burger1_q + burger2_p*burger2_q;
    document.getElementById("count").innerText=i;


}


function checkout(){

    alert("Your Order Value is" +(burger1_p*burger1_q + burger2_p*burger2_q));
    location.href="order-confirmation.html";
}
