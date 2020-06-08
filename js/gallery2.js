$(".menu-Pop2").mouseup(function(e) {
    var container = $(".box-menu2");
    var container1 = $("#prev2");
    var container3 = $("#next2");

    if (!container.is(e.target) && container.has(e.target).length === 0 && 
    !container1.is(e.target) && container1.has(e.target).length === 0 && 
    !container3.is(e.target) && container3.has(e.target).length === 0) {
$(".menu-Pop2").hide();
    }
});
let next2 = document.getElementById("next2");
let prev2 = document.getElementById("prev2");
let myItems2 = Array.from(document.getElementsByClassName("restaurant-img"));
let myBigBox2 = document.getElementsByClassName("menu-Pop2")[0];
let mySmallBox2 = document.getElementsByClassName("box-menu2")[0];

let close2 = document.getElementById("close2");
let myCurrent2 = 0;
var widthGalleryMenu = window.innerWidth;
mySmallBox2.addEventListener('click',function (event){
     var menuEvent = event.clientX;
     if(widthGalleryMenu<700)
     {
          if(menuEvent<250)
          {
               prevItem2(); 
          }else{
               nextItem2();
          }
     }else if(widthGalleryMenu>700){
          if(menuEvent<700)
          {
               prevItem2(); 
          }else{
               nextItem2();
          }
     }
   })

for (let i = 0; i < myItems2.length; i++) {
    myItems2[i].addEventListener("click", function (e) {
        myBigBox2.style.display = "flex";
        let mySrc2 = e.target.style.backgroundImage;
        myBigBox2.firstElementChild.style.backgroundImage = mySrc2
        myCurrent2 = myItems2.indexOf(e.target);
    })
}
function nextItem2() {
    myCurrent2++;
    if (myCurrent2 == myItems2.length) {
        myCurrent2 = 0;
    }
    myBigBox2.firstElementChild.style.backgroundImage = myItems2[myCurrent2].style.backgroundImage
}
document.addEventListener("keyup", function (e) {
    if (e.keyCode == 39) {
        nextItem2();
    } else if (e.keyCode == 37) {
        prevItem2();
    } else if (e.keyCode == 27) {
        closeItem2();
    }
});
function prevItem2() {
    myCurrent2--;
    if (myCurrent2 < 0) {
        myCurrent2 = myItems2.length - 1;
    }
    myBigBox2.firstElementChild.style.backgroundImage = myItems2[myCurrent2].style.backgroundImage
}
function closeItem2() {
    myBigBox2.style.display = "none"
}
next2.addEventListener("click", nextItem2);
prev2.addEventListener("click", prevItem2);
close2.addEventListener("click", closeItem2);