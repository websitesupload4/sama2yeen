
$(document).ready(function(){
  $("#loading-screen").fadeOut(5000 , function () {
    $("body").css("overflow" , "auto");
  });
});


let remontada = $("#remontada").offset().top;

$(window).scroll(function () {
  let wScroll = $(window).scrollTop();
  if (wScroll > remontada - 150) {
    $("#navbarZiggo").css("backgroundColor", "rgba(0,0,0,0.6)");
    $("#arrowUp").fadeIn(1000)
  } else {
    $("#navbarZiggo").css("backgroundColor", "transparent");
    $("#arrowUp").fadeOut(1000)
  }
});

$("#arrowUp").click(function () {
  $("html , body").animate({ scrollTop: 0 }, 2000)
});


$(".nav-link").click(function () {
  let sec = $(this).attr("href");
  let offsetSec = $(`${sec}`).offset().top;
  $("html , body").animate({ scrollTop: offsetSec-50 }, 2000)
});


let allContainer = [
  { img: "images/about/1.png", name: "توماس سامح", grad: "اولى جامعة", ziggo: 579 },
  { img: "images/about/1.png", name: "بولس رضا", grad: "اولى جامعة", ziggo: 238 },
  { img: "images/about/1.png", name: "بيتر ايمن", grad: "اولى جامعة", ziggo: 296 },
  { img: "images/about/1.png", name: "باسل ايمن", grad: "اولى جامعة", ziggo: 50 },
  { img: "images/about/1.png", name: "جون مجدى", grad: "اولى جامعة", ziggo: 436 },
  { img: "images/about/1.png", name: "بيتر جوزيف", grad: "اولى جامعة", ziggo: 562 },
  { img: "images/about/1.png", name: "فادى لطفى", grad: "اولى جامعة", ziggo: 255 },
  { img: "images/about/1.png", name: "ميخائيل ملاك", grad: "اولى جامعة", ziggo: 90 },
  { img: "images/about/1.png", name: "بيشوى رضا", grad: "اولى جامعة", ziggo: 85 },
  { img: "images/about/1.png", name: "مينا سمير", grad: "اولى جامعة", ziggo: 182 },
  { img: "images/about/1.png", name: "كيرلس سليمان", grad: "اولى جامعة", ziggo: 120 },
  { img: "images/about/1.png", name: "روبير ايهاب", grad: "اولى جامعة", ziggo: 5 },
  { img: "images/about/1.png", name: "انطونيوس محب", grad: "اولى جامعة", ziggo: 197 },
  { img: "images/about/1.png", name: "كيرلس ادوار", grad: "اولى جامعة", ziggo: 20 },
  { img: "images/about/1.png", name: "كيرلس يوسف", grad: "اولى جامعة", ziggo: 20 },

  { img: "images/about/2.jpg", name: "اميرة ياسر", grad: "اولى جامعة", ziggo: 120 },
  { img: "images/about/2.jpg", name: "بتول شكل", grad: "اولى جامعة", ziggo: 867 },
  { img: "images/about/2.jpg", name: "ايرينى شكل", grad: "اولى جامعة", ziggo: 967 },
  { img: "images/about/2.jpg", name: "مارينا رافت", grad: "اولى جامعة", ziggo: 861 },
  { img: "images/about/2.jpg", name: "ماريا ابراهيم", grad: "اولى جامعة", ziggo: 422 },
  { img: "images/about/2.jpg", name: "مارينا ماجد", grad: "اولى جامعة", ziggo: 472 },
  { img: "images/about/2.jpg", name: "مريم ماجد", grad: "اولى جامعة", ziggo: 532 },
  { img: "images/about/2.jpg", name: "لورا ناجى", grad: "اولى جامعة", ziggo: 35 },
  { img: "images/about/2.jpg", name: "سارة لطفى", grad: "اولى جامعة", ziggo: 185 },
  { img: "images/about/2.jpg", name: "اميرة يوسف", grad: "اولى جامعة", ziggo: 81 },
  { img: "images/about/2.jpg", name: "حنان صفوت", grad: "اولى جامعة", ziggo: 345 },
  { img: "images/about/2.jpg", name: "حنان زاهى", grad: "اولى جامعة", ziggo: 150 },
  { img: "images/about/2.jpg", name: "ماريا عاطف", grad: "اولى جامعة", ziggo: 50 },
  { img: "images/about/2.jpg", name: "سيمون رزق", grad: "اولى جامعة", ziggo: 35 },
  { img: "images/about/2.jpg", name: "ساندرا هنرى", grad: "اولى جامعة", ziggo: 25 },
  { img: "images/about/2.jpg", name: "مايفل ماهر", grad: "اولى جامعة", ziggo: 172 },
  { img: "images/about/2.jpg", name: "مارتينا مدحت", grad: "اولى جامعة", ziggo: 65 },
  { img: "images/about/2.jpg", name: "مهرائيل عياد", grad: "اولى جامعة", ziggo: 30 },
  { img: "images/about/2.jpg", name: "بتول رومانى", grad: "اولى جامعة", ziggo: 10 },
  { img: "images/about/2.jpg", name: "كرستين اشرف", grad: "اولى جامعة", ziggo: 20 },

  { img: "images/about/1.png", name: "كيرلس ماجد", grad: "تانية جامعة", ziggo: 521 },
  { img: "images/about/1.png", name: "استيفن زكريا", grad: "تانية جامعة", ziggo: 245 },
  { img: "images/about/1.png", name: "بولا ملاك", grad: "تانية جامعة", ziggo: 390 },
  { img: "images/about/1.png", name: "ابانوب هشام", grad: "تانية جامعة", ziggo: 60 },
  { img: "images/about/1.png", name: "كيرلس فايز", grad: "تانية جامعة", ziggo: 314 },
  { img: "images/about/1.png", name: "بولا ابراهيم", grad: "تانية جامعة", ziggo: 234 },
  { img: "images/about/1.png", name: "مينا مرقس", grad: "تانية جامعة", ziggo: 30 },
  { img: "images/about/1.png", name: "موريس عزت", grad: "تانية جامعة", ziggo: 10 },
  { img: "images/about/1.png", name: "فادى خير", grad: "تانية جامعة", ziggo: 85 },
  { img: "images/about/1.png", name: "بولا ايعاب", grad: "تانية جامعة", ziggo: 5 },
  { img: "images/about/1.png", name: "ابانوب سلطان", grad: "تانية جامعة", ziggo: 10 },

  { img: "images/about/2.jpg", name: "كلير وليم", grad: "تانية جامعة", ziggo: 660 },
  { img: "images/about/2.jpg", name: "تريزا رضا", grad: "تانية جامعة", ziggo: 567 },
  { img: "images/about/2.jpg", name: "مارينا عاطف", grad: "تانية جامعة", ziggo: 452 },
  { img: "images/about/2.jpg", name: "كارين عماد", grad: "تانية جامعة", ziggo: 105 },
  { img: "images/about/2.jpg", name: "هدى شريف", grad: "تانية جامعة", ziggo: 150 },
  { img: "images/about/2.jpg", name: "مريم بشرى", grad: "تانية جامعة", ziggo: 310 },
  { img: "images/about/2.jpg", name: "فيفيان بولس", grad: "تانية جامعة", ziggo: 365 },
  { img: "images/about/2.jpg", name: "سلفانا بولس", grad: "تانية جامعة", ziggo: 365 },
  { img: "images/about/2.jpg", name: "رنا رومانى", grad: "تانية جامعة", ziggo: 175 },
  { img: "images/about/2.jpg", name: "نرمين اشرف", grad: "تانية جامعة", ziggo: 141 },
  { img: "images/about/2.jpg", name: "نرمين جورج", grad: "تانية جامعة", ziggo: 25 },
  { img: "images/about/2.jpg", name: "مادونا مجدى", grad: "تانية جامعة", ziggo: 75 },
  { img: "images/about/2.jpg", name: "يوستينا عماد", grad: "تانية جامعة", ziggo: 286 },
  { img: "images/about/2.jpg", name: "ميرا فايز", grad: "تانية جامعة", ziggo: 55 },
  { img: "images/about/2.jpg", name: "روجينا مكرم", grad: "تانية جامعة", ziggo: 35 },
  { img: "images/about/2.jpg", name: "مهرائيل وهيب", grad: "تانية جامعة", ziggo: 205 },
  { img: "images/about/2.jpg", name: "مارتينا ثروت", grad: "تانية جامعة", ziggo: 225 },
  { img: "images/about/2.jpg", name: "دميانة نبيل", grad: "تانية جامعة", ziggo: 40 },
  { img: "images/about/2.jpg", name: "بسنت اسامة", grad: "تانية جامعة", ziggo: 145 },
  { img: "images/about/2.jpg", name: "اناسيمون ايمن", grad: "تانية جامعة", ziggo: 133 },
  { img: "images/about/2.jpg", name: "ليديا رشدى", grad: "تانية جامعة", ziggo: 21 },
  { img: "images/about/2.jpg", name: "مريم ناجى", grad: "تانية جامعة", ziggo: 10 },
  { img: "images/about/2.jpg", name: "مهرائيل كرم", grad: "تانية جامعة", ziggo: 20 },
  { img: "images/about/2.jpg", name: "سمر محسن", grad: "تانية جامعة", ziggo: 5 },

  { img: "images/about/1.png", name: "عصام شنودة", grad: "ثالتة جامعة", ziggo: 165 },
  { img: "images/about/1.png", name: "كيرلس عادل", grad: "ثالتة جامعة", ziggo: 175 },
  { img: "images/about/1.png", name: "ماريو راضى", grad: "ثالتة جامعة", ziggo: 10 },
  { img: "images/about/1.png", name: "بيشوى القمص", grad: "ثالتة جامعة", ziggo: 30 },

  { img: "images/about/2.jpg", name: "نانسى رضا", grad: "ثالتة جامعة", ziggo: 447 },
  { img: "images/about/2.jpg", name: "ميرنا مجدى", grad: "ثالتة جامعة", ziggo: 15 },
  { img: "images/about/2.jpg", name: "امل مكرم", grad: "ثالتة جامعة", ziggo: 480 },
  { img: "images/about/2.jpg", name: "رفقة محب", grad: "ثالتة جامعة", ziggo: 621 },
  { img: "images/about/2.jpg", name: "مريم سمير", grad: "ثالتة جامعة", ziggo: 330 },
  { img: "images/about/2.jpg", name: "مادونا عماد", grad: "ثالتة جامعة", ziggo: 286 },
  { img: "images/about/2.jpg", name: "جينا فيليب", grad: "ثالتة جامعة", ziggo: 115 },
  { img: "images/about/2.jpg", name: "احلام زكريا", grad: "ثالتة جامعة", ziggo: 291 },
  { img: "images/about/2.jpg", name: "مورين ميشيل", grad: "ثالتة جامعة", ziggo: 227 },
  { img: "images/about/2.jpg", name: "مارينت ممدوح", grad: "ثالتة جامعة", ziggo: 261 },
  { img: "images/about/2.jpg", name: "ناردين فريد", grad: "ثالتة جامعة", ziggo: 85 },
  { img: "images/about/2.jpg", name: "شادية جمال", grad: "ثالتة جامعة", ziggo: 290 },

  { img: "images/about/1.png", name: "ملاك جورج", grad: "رابعة جامعة", ziggo: 715 },
  { img: "images/about/1.png", name: "ابانوب رومانى", grad: "رابعة جامعة", ziggo: 604 },
  { img: "images/about/1.png", name: "اندرو ظريف", grad: "رابعة جامعة", ziggo: 696 },
  { img: "images/about/1.png", name: "نزيه صديق", grad: "رابعة جامعة", ziggo: 75 },
  { img: "images/about/1.png", name: "ايهاب زكريا", grad: "رابعة جامعة", ziggo: 135 },
  { img: "images/about/1.png", name: "ماريو اشرف", grad: "رابعة جامعة", ziggo: 549 },
  { img: "images/about/1.png", name: "سعد رومانى", grad: "رابعة جامعة", ziggo: 40 },
  { img: "images/about/1.png", name: "جمال سامى", grad: "رابعة جامعة", ziggo: 97 },
  { img: "images/about/1.png", name: "تونى وليم", grad: "رابعة جامعة", ziggo: 10 },

  { img: "images/about/2.jpg", name: "دميانة يونان", grad: "رابعة جامعة", ziggo: 217 },
  { img: "images/about/2.jpg", name: "ساندى مسعد", grad: "رابعة جامعة", ziggo: 176 },
  { img: "images/about/2.jpg", name: "ساندرا بهجت", grad: "رابعة جامعة", ziggo: 200 },
  { img: "images/about/2.jpg", name: "كرستين رضا", grad: "رابعة جامعة", ziggo: 90 },
  { img: "images/about/2.jpg", name: "ديانا يوسف", grad: "رابعة جامعة", ziggo: 335 },
  { img: "images/about/2.jpg", name: "سيمون خلف", grad: "رابعة جامعة", ziggo: 30 },
  { img: "images/about/2.jpg", name: "ساندى رضا", grad: "رابعة جامعة", ziggo: 216 },
  { img: "images/about/2.jpg", name: "مادونا عماد", grad: "رابعة جامعة", ziggo: 130 },
  { img: "images/about/2.jpg", name: "مارينا مندى", grad: "رابعة جامعة", ziggo: 100 },
  { img: "images/about/2.jpg", name: "مارينا رمسيس", grad: "رابعة جامعة", ziggo: 20 },
  { img: "images/about/2.jpg", name: "ميرنا عدلى", grad: "رابعة جامعة", ziggo: 20 },
  { img: "images/about/2.jpg", name: "مريم رفيق", grad: "رابعة جامعة", ziggo: 10 },


];

let searchInput = document.getElementById("searchInput");


let top3 = [];



function gettop3(all, top3) {
    let max = 0;
    for (let i = 0; i < all.length; i++) {
        if (all[i].ziggo > max) {
            max = all[i].ziggo
        }


    }


    for (let i = 0; i < all.length; i++) {
      if (top3.length < 3){
        if (all[i].ziggo == max) {
            top3.push(all[i]);
            all.splice(i, 1)
        }
      }else{
        break;
      }
    }

   

    return top3;
}


function filtop3(top3) {
    if (top3.length < 3) {
        gettop3(allContainer, top3)
        filtop3(top3)
    }
}

filtop3(top3)


console.log(top3);
console.log(allContainer);

document.getElementById("ziggo-3").innerHTML = `
<div class="col-md-4 order-1 media-w-ziggo">
<div class="medal-ziggo position-relative">
  <div class="front  text-center">
    <img src=${top3[0].img} class="rounded-lg w-100">
    <p class="pt-3 pb-2">الأول</p>
    <h3 >${top3[0].name} </h3>
    <p>${top3[0].grad} </p>
    <div><i class="fa-solid fa-chess-king fa-2x"></i></div>
  </div>
  <div class="back text-center py-5  position-absolute">
    <p>معاك</p>
    <h2 class="text-success pb-3">${top3[0].ziggo} </h2>
    <img src="images/background/زيجو.png" class="w-100">
    <h2 class="text-success py-3">اسد يا ابنى صدقنى</h2>
  </div>
</div>
</div>
<div class="col-md-4 order-0 second-ziggo media-w-ziggo">
<div class="medal-ziggo position-relative">
  <div class="front  text-center">
    <img src=${top3[1].img}  class="rounded-lg w-100">
    <p class="pt-3 pb-2">الثانى</p>
    <h3 >${top3[1].name} </h3>
    <p>${top3[1].grad} </p>
    <div><i class="fa-solid fa-chess-queen fa-2x"></i></div>
  </div>
  <div class="back text-center py-5  position-absolute">
    <p>معاك</p>
    <h2 class="text-success pb-3">${top3[1].ziggo} </h2>
    <img src="images/background/زيجو.png" class="w-100">
    <h2 class="text-success py-3">شد جامد هتجيبه</h2>
  </div>
</div>
</div>
<div class="col-md-4 order-2 third-ziggo media-w-ziggo">
<div class="medal-ziggo position-relative">
  <div class="front  text-center ">
    <img src=${top3[2].img}  class="rounded-lg w-100">
    <p class="pt-3 pb-2">الثالث</p>
    <h3 >${top3[2].name} </h3>
    <p>${top3[2].grad} </p>
    <div class="pb-3"><i class="fa-solid fa-chess-knight fa-2x"></i></div>
  </div>
  <div class="back text-center py-5  position-absolute">
    <p>معاك</p>
    <h2 class="text-success pb-3">${top3[2].ziggo} </h2>
    <img src="images/background/زيجو.png" class="w-100">
    <h2 class="text-success py-3">اوعى تطلع من الترتيب</h2>
  </div>
</div>
</div> `;



(function display() {
  let cartona = "";

  for (let i = 0; i < allContainer.length; i++) {
    cartona += `
    <div class="col-md-2">
      <div class="medal-ziggo position-relative">
      <div class="front  text-center ">
        <img src=${allContainer[i].img} class="rounded-lg w-100">
        <h3 class="pt-3 pb-2">${allContainer[i].name}</h3>
        <p>${allContainer[i].grad}</p>
      </div>
      <div class="back text-center py-5  position-absolute">
        <p>معاك</p>
        <h2 class="text-success pb-3">${allContainer[i].ziggo}</h2>
        <img src="images/background/زيجو.png" class="w-100">
      </div>
    </div>
  </div>`
  }
  document.getElementById("ziggoOne").innerHTML = cartona;
})();



searchInput.addEventListener("keyup", function () {
  let cartona = ``;
  for (let i = 0; i < allContainer.length; i++) {
    if (allContainer[i].name.includes(searchInput.value) ) {
      cartona += `
            <div class="col-md-2">
              <div class="medal-ziggo position-relative">
              <div class="front  text-center ">
                <img src=${allContainer[i].img} class="rounded-lg w-100">
                <h3 class="pt-3 pb-2">${allContainer[i].name}</h3>
                <p>${allContainer[i].grad}</p>
              </div>
              <div class="back text-center py-5  position-absolute">
                <p>معاك</p>
                <h2 class="text-success pb-3">${allContainer[i].ziggo}</h2>
                <img src="images/background/زيجو.png" class="w-100">
              </div>
            </div>
          </div>`;
    }
  }
  if (cartona !== ``) {
    document.getElementById("ziggoOne").innerHTML = cartona;
  } else {
    cartona = `
            <div class="col-md-12">
              <div class="medal-ziggo position-relative">
                <div class="text-center ">
                  <h3 class="pt-3 pb-2">مفيش الاسم ده (اكتب اسمك عربى ومن غير همزة او تشكيل )</h3>
                </div>
              </div>
            </div>`;
    document.getElementById("ziggoOne").innerHTML = cartona;
  }
})


//////////////////
