var plus=document.getElementById("plus");
var minus=document.getElementById("minus");
var item=document.getElementById("item");
var plus1=document.getElementById("plus1");
var minus1=document.getElementById("minus1");
var item1=document.getElementById("item1");
var email=document.getElementById("email");
var phone=document.getElementById("phone");
var name=document.getElementById("name");
var adress=document.getElementById("adress");
var city=document.getElementById("city");


function plusfunction(){ 
    item.textContent= Number(item.textContent)+1;
}

function minusfunction(){
if(item.textContent>1)
    item.textContent=item.textContent-1;
}

function plusfunction1(){ 
    item1.textContent= Number(item1.textContent)+1;
}

function minusfunction1(){
if(item1.textContent>1)
    item1.textContent=item1.textContent-1;
}
function hide(){
email.style.backgroundImage='none';


}
function show(){
email.style.backgroundImage='url(/wired-outline-177-envelope-mail-send.gif)';

}
function hide1(){
    phone.style.backgroundImage='none';
}
function show1(){
phone.style.backgroundImage='url(/system-solid-58-call-phone.gif)';
}
function show2(){
name1.style.backgroundImage='url(/wired-outline-21-avatar.gif)';

}
function hide2(){
name1.style.backgroundImage='none';

}
function show3(){
    adress.style.backgroundImage='url(/wired-outline-63-home.gif)';
    
    }
    function hide3(){
    adress.style.backgroundImage='none';
    
    }

    function show4(){
        city.style.backgroundImage='url(/wired-outline-2022-krakow-city.gif)';
        
        }
        function hide4(){
        city.style.backgroundImage='none';
        
        }
        
    

