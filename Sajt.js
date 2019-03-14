var SStore={
    added: [],
    proizvodi: function(ty, cl, loc){
        var pel=[];
        var kupljeni=[];
        for(var i=0; i<data.products.length; i++){
            if(data.products[i].type == ty){
                pel[i]=document.createElement("div");
                pel[i].classList.add(cl);

                var namep=document.createElement("p");
                namep.innerHTML= data.products[i].name;
                pel[i].appendChild(namep);

                var pic=document.createElement("img");
                pic.src= data.products[i].image;
                pel[i].appendChild(pic);

                var pri=document.createElement("p");
                pri.innerHTML=data.products[i].price + "$";
                pel[i].appendChild(pri);

                var add=document.createElement("img");
                add.src= ("Slike/addcart2.png");
                // that = this;
                add.setAttribute("data-barkod", data.products[i].number);
                add.addEventListener("click", function () {
                    var br = this.getAttribute("data-barkod");
                    SStore.added.push(br);
                    alert("Product added");
                    for (var i = 0; i < SStore.added.length - 1; i++) {
                        if (SStore.added[i] == br) {
                            SStore.added.pop();
                            alert("Product already exists");
                        }
                    }
                    console.log(SStore.added);
                    localStorage.setItem("cart", JSON.stringify(SStore.added)); //local storage unos
                })

                pel[i].appendChild(add);

                document.querySelector(loc).appendChild(pel[i]);
            }
        }
        
    },
    pozovi_korpu:function(){
        window.open("Korpa.html", "_blank"); //otvara sajt u novom tabu
    },
    c: 0,
    scrlaptop: function(){
        var dz=setInterval(function(){
            window.scrollBy(0,30);
            c++;
            if(window.pageYOffset>1410) //pozicija ekrana
                clearInterval(dz);
        },10);
    },
    scrphone: function(){
        var dz=setInterval(function(){
            window.scrollBy(0,30);
            c++;
            if(window.pageYOffset>2475) //pozicija ekrana
                clearInterval(dz);
        },10);
    },
    scrwatch: function(){
        var dz=setInterval(function(){
            window.scrollBy(0,30);
            c++;
            if(window.pageYOffset>3560) //pozicija ekrana
                clearInterval(dz);
        },10);
    },
    scrinfo: function(){
        var dz=setInterval(function(){
            window.scrollBy(0,30);
            c++;
            if(window.pageYOffset>4640) //pozicija ekrana
                clearInterval(dz);
        },10);
    },
    showtop: function(){
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
            document.getElementById("topbut").style.display = "block";
        else
            document.getElementById("topbut").style.display = "none";
    },
    backtop: function(){
        document.documentElement.scrollTop = 0;
    }
}

SStore.proizvodi("laptop", "laptops", "#laptop");
SStore.proizvodi("smartphone", "smartphones", "#smartphone");
SStore.proizvodi("smartwatch", "smartwatches", "#smartwatch");

document.querySelector("#cart").addEventListener("click", function(){
    SStore.pozovi_korpu();
});
document.querySelector("#top").addEventListener("click", function(){
    SStore.scrlaptop();
});
document.querySelector("#phone").addEventListener("click", function(){
    SStore.scrphone();
});
document.querySelector("#watch").addEventListener("click", function(){
    SStore.scrwatch();
});
document.querySelector("#infor").addEventListener("click", function(){
    SStore.scrinfo();
});
window.onscroll = function(){SStore.showtop()};
document.querySelector("#topbut").addEventListener("click", function(){
    SStore.backtop();
});
getlocal();
// localStorage.clear();