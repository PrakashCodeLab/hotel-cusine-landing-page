const cardFoodBody = document.querySelector('.section__food1');


const FoodData = [{
        foodName: "Continental Breakfast",
        foodPrice: 21,
        img: "img/breakfast 1.jpg",
    },
    {
        foodName: "English Breakfast",
        foodPrice: 48,
        img: "img/breakfast 2.jpg",
    },

    {
        foodName: "French Toast",
        foodPrice: 31,
        img: "img/breakfast 3.jpg",
    },

    {
        foodName: "American ",
        foodPrice: 15,
        img: "img/breakfast 4.jpg",
    },
    {
        foodName: "Waffles",
        foodPrice: 20,
        img: "img/breakfast 5.jpg",
    },
    {
        foodName: "Pancakes",
        foodPrice: 51,
        img: "img/breakfast 6.jpg",
    },
    {
        foodName: "Omelettes",
        foodPrice: 40,
        img: "img/breakfast 7.jpg",
    },
    {
        foodName: " Burritos",
        foodPrice: 28,
        img: "img/breakfast 8.jpg",
    }

];

const cardBody = FoodData.map((food) => {
    return `<div class="food__order__body">
            
            <img src="${food.img}" alt="foods" class="img__card"></img> 
             
         <div class="food__card__content">
              <h5>$ ${food.foodPrice}</h5>
             
             <p>${food.foodName}</p>
             
             <span class="food__card__star">
                 <i class="bi bi-star"></i>
                 <i class="bi bi-star"></i>
                 <i class="bi bi-star"></i>
                 <i class="bi bi-star"></i>
                 <i class="bi bi-star"></i>
             </span>
             
             <a class="btn btn__order" href="#">order now</a>
         </div>    
             
            
             
             
         </div>  `
}).join("");

cardFoodBody.innerHTML = cardBody;




const section2 = document.querySelector('.section__food2');


const cardFoodLunch = [{
        title: "Chicken Tikka Masala",
        price: 40,
        img: "img/lunch1.jpg"
    },
    {
        title: "Pad Thai",
        price: 80,
        img: "img/lunch2.jpg"
    },

    {
        title: "Chicken Shawarma",
        price: 67,
        img: "img/lunch3.jpg"
    },

    {
        title: "Bibimbap",
        price: 50,
        img: "img/lunch4.jpg"
    },

    {
        title: "Spaghetti Carbonara",
        price: 80,
        img: "img/lunch5.jpg"
    },

    {
        title: "Chicken Caesar Salad",
        price: 29,
        img: "img/lunch6.jpg"
    },

    {
        title: "Beef Bulgogi",
        price: 80,
        img: "img/lunch7.jpg"
    },

    {
        title: "Fish and Chips",
        price: 60,
        img: "img/lunch8.jpg"
    },



];


const foodlunch = cardFoodLunch.map((lunchItem) => {
    return `<div class="food__order__body">
            
            <img src="${lunchItem.img}" alt="foods" class="img__card"></img> 
             
         <div class="food__card__content">
              <h5>$ ${lunchItem.price}</h5>
             
             <p>${lunchItem.title}</p>
             
             <span class="food__card__star">
                 <i class="bi bi-star"></i>
                 <i class="bi bi-star"></i>
                 <i class="bi bi-star"></i>
                 <i class="bi bi-star"></i>
                 <i class="bi bi-star"></i>
             </span>
             
             <a class="btn btn__order" href="#">order now</a>
         </div>    
             
            
             
             
         </div>  `



}).join("");

section2.innerHTML = foodlunch;




const section3 = document.querySelector('.section__food3');


const foodDinner = [{
        title: "Lasagna",
        price: 29,
        img: "img/dinner1.jpg",
    },

    {
        title: "Pad Thai",
        price: 120,
        img: "img/dinner2.jpg",
    },

    {
        title: "Tacos",
        price: 67,
        img: "img/dinner3.jpg",
    },

    {
        title: "Butter Chicken",
        price: 78,
        img: "img/dinner4.jpg",
    },

    {
        title: "Steak Frites",
        price: 15,
        img: "img/dinner5.jpg",
    },

    {
        title: "Paella",
        price: 78,
        img: "img/dinner6.jpg",
    },

    {
        title: "Sushi",
        price: 24,
        img: "img/dinner7.jpg",
    },
    {
        title: "BBQ Ribs",
        price: 49,
        img: "img/dinner8.jpg",
    },

];


const fooddinner = foodDinner.map((dinneritem) => {
    return `<div class="food__order__body">
            
            <img src="${dinneritem.img}" alt="foods" class="img__card"></img> 
             
         <div class="food__card__content">
              <h5>$ ${dinneritem.price}</h5>
             
             <p>${dinneritem.title}</p>
             
             <span class="food__card__star">
                 <i class="bi bi-star"></i>
                 <i class="bi bi-star"></i>
                 <i class="bi bi-star"></i>
                 <i class="bi bi-star"></i>
                 <i class="bi bi-star"></i>
             </span>
             
             <a class="btn btn__order" href="#">order now</a>
         </div>    
             
            
             
             
         </div> `
}).join("")


section3.innerHTML = fooddinner;


const sectionFood = document.querySelectorAll('.section__food__order');

const foodLink = document.querySelectorAll('.link__food');

const linkActivd = document.querySelectorAll('.active__link');


foodLink.forEach((link, index) => {
    link.addEventListener('click', () => {
        sectionFood.forEach((section, secIndex) => {
            if (index === secIndex) {
                section.style.display = "grid"

            } else {
                section.style.display = "none"

            }
        })
    })
});


const yearfoot = document.querySelector('.foot__time');

const date = new Date();


const year = date.getFullYear();

yearfoot.innerText = year;


const navbarsec = document.querySelector('.navbar__link--sec');

const hamburger = document.querySelector('.navbar__hamburger');

const bodyWrap = document.querySelector('.body__wrap');

hamburger.addEventListener('click', () => {

    navbarsec.classList.toggle('navbar__link--active')

    bodyWrap.classList.toggle('body__link');

    const navLink = document.querySelectorAll('.link');


    navLink.forEach((links) => {
        links.addEventListener('click', () => {
            navbarsec.classList.remove('navbar__link--active')

            bodyWrap.classList.remove('body__link');
        })
    })



})




