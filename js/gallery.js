$(".menu-Pop").mouseup(function(e) {
    var container5 = $(".box-menu");
    var container6 = $("#prev");
    var container7 = $("#next");

    if (!container5.is(e.target) && container5.has(e.target).length === 0 && 
    !container6.is(e.target) && container6.has(e.target).length === 0 && 
    !container7.is(e.target) && container7.has(e.target).length === 0) {
$(".menu-Pop").hide();
    }
});
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let status=false;
let myItems = Array.from(document.getElementsByClassName("menu"));
let myBigBox = document.getElementsByClassName("menu-Pop")[0];
let mySmallBox = document.getElementsByClassName("box-menu")[0];
let close = document.getElementById("close");
let myCurrent = 0;
for (let i = 0; i < myItems.length; i++) {
    myItems[i].addEventListener("click", function (e) {
        myBigBox.style.display = "flex";
        let mySrc = e.target.style.backgroundImage;
        myBigBox.firstElementChild.style.backgroundImage = mySrc 
        myCurrent = myItems.indexOf(e.target);
        status=true;
    })
}
var widthMenu = window.innerWidth;

mySmallBox.addEventListener('click',function (event){
     var galleryEvent = event.clientX;
     if(widthMenu<700)
     {
          if(galleryEvent<250)
          {
               prevItem(); 
          }else{
               nextItem();
          }
     }else if(widthMenu>700){
          if(galleryEvent<700)
          {
               prevItem(); 
          }else{
               nextItem();
          }
     }
   })
function nextItem() {
    myCurrent++;
    if (myCurrent == myItems.length) {
        myCurrent = 0;
    }
    myBigBox.firstElementChild.style.backgroundImage =  myItems[myCurrent].style.backgroundImage
    status=true;
}
document.addEventListener("keyup", function (e) {
    if (e.keyCode == 39) {
        nextItem();
        status=true;

    } else if (e.keyCode == 37) {
        prevItem();
        status=true;

    } else if (e.keyCode == 27) {
        closeItem();
        status=false;

    }
});
function prevItem() {
    myCurrent--;
    if (myCurrent < 0) {
        myCurrent = myItems.length - 1;
    }
    status=true;
    myBigBox.firstElementChild.style.backgroundImage = myItems[myCurrent].style.backgroundImage
}
function closeItem() {
    myBigBox.style.display = "none"
    status=false;
}
next.addEventListener("click", nextItem);
prev.addEventListener("click", prevItem);
close.addEventListener("click", closeItem);