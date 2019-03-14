var SStore = { added:[] };
    getlocal();
var vcart={
    korpa_new: function(){
        var pel=[];
        
        for(var i=0;i<data.products.length;i++){
            for(var j=0;j<SStore.added.length;j++){
                if(data.products[i].number===SStore.added[j]){
                    // console.log(data.products[i].name);
                    pel[i]=document.createElement("div");
                    pel[i].classList.add("items");

                    var namep=document.createElement("p");
                    namep.innerHTML= data.products[i].name;
                    pel[i].appendChild(namep);

                    var pic=document.createElement("img");
                    pic.classList.add("slika");
                    pic.src= data.products[i].image;
                    pel[i].appendChild(pic);

                    var pri=document.createElement("p");
                    pri.classList.add("price")
                    pri.innerHTML=data.products[i].price + "$";
                    pel[i].appendChild(pri);

                    var del=document.createElement("img");
                    del.classList.add("rem");
                    del.src= ("Slike/remove.png");
                    del.setAttribute("data-barkod", data.products[i].number);
                    del.addEventListener("click", function(){
                        var br1=this.getAttribute("data-barkod");
                        var ind=SStore.added.indexOf(br1);
                        a = JSON.parse(localStorage.getItem("cart"));
                        a.splice(ind, 1);
                        localStorage.setItem('cart', JSON.stringify(a));
                        var ind1 = -1;
                        for(var i=0; i<data.products.length;i++){ //trazenje indeksa od data proizvodi broj
                            if(br1==data.products[i].number)
                                ind1=i;
                        };
                        if(ind1>-1){ //ako je indeks veci od -1 onda se brise iz htmla
                            pel[ind1].remove(); // brisanje iz pel niza i htmla 
                            delete pel[ind1];
                        }
                        location.reload();
                        alert("Izbacili ste iz korpe")
                    });
                    pel[i].appendChild(del);

                    document.querySelector("#vcarts").appendChild(pel[i]);
                }
            }
        }
        if(SStore.added.length==0){
            document.getElementById("empty").style.display = "block";
            document.querySelector(".btn").disabled = true;
        };
    },
    checkout: function(){
        localStorage.clear();
        location.reload();
    },
    totalprice: 0,
    total: function(){
        for(var i=0;i<data.products.length;i++){
            for(var j=0;j<SStore.added.length;j++){
                if(data.products[i].number===SStore.added[j]){
                    vcart.totalprice+=data.products[i].price;
                }
            }
        }
        document.querySelector(".total").innerHTML ="Total price: "+ "<br>" + vcart.totalprice + "$";
    },
}
vcart.korpa_new();
document.querySelector(".btn").addEventListener("click", function(){
    vcart.checkout();
});
vcart.total();