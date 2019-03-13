var data={
    products:[
        {name: "MacBook Air 13' 2018",
        price: 1099,
        image: "Products/macbookair.jpg",
        number: "15",
        type: "laptop",
        },
        {
        name: "MacBook Pro 13' 2017",
        price: 1999,
        image: "Products/macbookpro13.jpg",
        number: "12",
        type: "laptop",
        },
        {
        name: "Macbook Pro 15' 2018",
        price: 2399,
        image: "Products/macbookpro15.jpg",
        number: "17",
        type: "laptop",
        },
        {
        name: "Surface Pro 13' 2018",
        price: 1199,
        image: "Products/surfacepro.jpg",
        number: "11",
        type: "laptop",
        },
        {
        name: "Razer Blade 13' ",
        price: 1399,
        image: "Products/razerblade.jpg",
        number: "13",
        type: "laptop",
        },
        {
        name: "Apple iPhone 7",
        price: 499,
        image: "Products/iphone7.jpg",
        number: "24",
        type: "smartphone",
        },
        {
        name: "Apple iPhone 8",
        price: 599,
        image: "Products/iphone8.png",
        number: "25",
        type: "smartphone",
        },
        {
        name: "Apple iPhone X",
        price: 699,
        image: "Products/iphonex.png",
        number: "26",
        type: "smartphone",
        },
        {
        name: "Google Pixel 3",
        price: 649,
        image: "Products/pixel3.jpg",
        number: "28",
        type: "smartphone",
        },
        {
        name: "Samsung Galaxy S9",
        price: 699,
        image: "Products/galaxys9.png",
        number: "29",
        type: "smartphone",
        },
        {
        name: "Apple Watch Series 4",
        price: 299,
        image: "Products/applewatch4.png",
        number: "33",
        type: "smartwatch",
        },
        {
        name: "Apple Watch Series 3",
        price: 179,
        image: "Products/applewatch3.jpg",
        number: "32",
        type: "smartwatch",
        },
        {
        name: "Samsung Galaxy Gear S3",
        price: 229,
        image: "Products/gears3.jpg",
        number: "36",
        type: "smartwatch",
        },
        {
        name: "Samsung Galaxy Gear S2",
        price: 289,
        image: "Products/gears2.jpg",
        number: "37",
        type: "smartwatch",
        },
        {
        name: "Fossil Smartwatch",
        price: 199,
        image: "Products/fossil.jpg",
        number: "39",
        type: "smartwatch"
        },
    ]
}
function getlocal(){
    var st = localStorage.getItem("cart");
        if(st){
            var lcart = JSON.parse(st);
            if(lcart!==null)
                SStore.added=lcart;
            else
                SStore.added=[];
        }else
            SStore.added=[];
        console.log(lcart);
};