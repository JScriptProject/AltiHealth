"use strict";

// grab element

const selectElement = selector =>{
    const element = document.querySelector(selector);

    if(element) return element;
    throw new Error(`Something went wrong | Make sure the ${selector} is correct`);  
}

const moboToggleBtn = selectElement(".list-toggle-btn");

const moboPressed = ()=>{
    const menuToggleBtn = selectElement(".menu-toggle-btn");
    const moboMenu = selectElement(".menu");
    const bodyEle = selectElement("body")
    menuToggleBtn.classList.toggle("activated");
    moboMenu.classList.toggle("d-hidden");
    bodyEle.classList.toggle("overlay");
}

console.log(moboToggleBtn);
moboToggleBtn.addEventListener("click", moboPressed);


// Swiper for banner

const swiper2 = new Swiper('.swiper-banner',{
    slidesPerView: 1,
    spaceBetween: 1,
    navigation: {
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
    }, 
    pagination:{
        el: '.swiper-pagination'
    },
    breakpoints:{
        700:{
            slidesPerView: 1
        },
        1200:{
            slidesPerView: 1
        }
    }
})

// swipper for doctors

const swiper1 = new Swiper('.swiper-dr',{
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
    }, 
    breakpoints:{
        600:{
            slidesPerView: 2
        },
        850:{
            slidesPerView: 3
        },
        1200:{
            slidesPerView: 3
        }
    }
})

const DoctorInfo={

    alex: {
        spec: ["Cardiology", "Neurology", "Orthopedics"]
    },
    emma: {
        spec: ["Dermatology", "Pediatrics", "Psychiatry"]
    },
    samuel: {
        spec: ["Gastroenterology", "Endocrinology", "Rheumatology"]
    },
    olivia: {
        spec: ["Obstetrics", "Ophthalmology", "Pathology"]
    },
    liam: {
        spec: ["Urology", "Oncology", "Pulmonology"]
    }
};

const swiperSlideBlock  = document.querySelectorAll(".swiper-slide-block");

const newInnerBlock = document.createElement("div");
newInnerBlock.classList.add("newInnerBlock");

swiperSlideBlock.forEach(swiperBlock => {
    swiperBlock.addEventListener("mouseenter", function(){
        swiperBlock.appendChild(newInnerBlock);
        const clickedDr = swiperBlock.dataset.name;
        const selectedDr = DoctorInfo[clickedDr];
        console.log(selectedDr.spec[0]);  
        newInnerBlock.innerHTML=`<p class="innerBlock-spec">Specialities</p>
                                  <p class="innerBlock-spec-list">${selectedDr.spec[0]}, ${selectedDr.spec[1]}, ${selectedDr.spec[2]}</p>
                                  <a href="#"  class="innerBlock-icon"><i class="ri-color-filter-fill"></i></a>`;
    });

    swiperBlock.addEventListener("mouseleave", function(){
            newInnerBlock.remove();
    });
});


