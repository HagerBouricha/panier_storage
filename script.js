const panier = document.getElementById("panier");

let x = +localStorage.getItem("counter");
panier.innerText = x;
//  * localStorage.setItem("counter") ;
// * localStorage.getItem("counter");

function moveToBuy(_item){
    x +=1 ; 
    localStorage.setItem("counter",x);

   panier.innerText = x;

   if(localStorage.getItem(_item)){
    let nb = +localStorage.getItem(_item)+1;
    localStorage.setItem(_item,nb)
   }else{
    localStorage.setItem(_item,1);
   }
  
}



function resetPanier(){
    localStorage.clear();
    panier.innerText = 0;
    x = 0;
}