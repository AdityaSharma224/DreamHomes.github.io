//first
var slides=document.querySelector('.slider-items').children;
var nextSlide=document.querySelector(".right-slide");
var prevSlide=document.querySelector(".left-slide");
var totalSlides=slides.length;

//second
var slides2=document.querySelector('.slider-items2').children;
var nextSlide2=document.querySelector(".right-slide2");
var prevSlide2=document.querySelector(".left-slide2");
var totalSlides2=slides2.length;


//third
var slides3=document.querySelector('.slider-items3').children;
var nextSlide3=document.querySelector(".right-slide3");
var prevSlide3=document.querySelector(".left-slide3");
var totalSlides3=slides3.length;

//fourth
var slides4=document.querySelector('.slider-items4').children;
var nextSlide4=document.querySelector(".right-slide4");
var prevSlide4=document.querySelector(".left-slide4");
var totalSlides4=slides4.length;

//fifth
var slides5=document.querySelector('.slider-items5').children;
var nextSlide5=document.querySelector(".right-slide5");
var prevSlide5=document.querySelector(".left-slide5");
var totalSlides5=slides5.length;

//sixth
var slides6=document.querySelector('.slider-items6').children;
var nextSlide6=document.querySelector(".right-slide6");
var prevSlide6=document.querySelector(".left-slide6");
var totalSlides6=slides6.length;

//seventh
var slides7=document.querySelector('.slider-items7').children;
var nextSlide7=document.querySelector(".right-slide7");
var prevSlide7=document.querySelector(".left-slide7");
var totalSlides7=slides7.length;


var index=0;
//first
nextSlide.onclick=function () {
     next("next");
}
prevSlide.onclick=function () {
     next("prev");
}

//second
nextSlide2.onclick=function () {
     next2("next2");
}
prevSlide2.onclick=function () {
     next2("prev2");
}


//third
nextSlide3.onclick=function () {
     next3("next3");
}
prevSlide3.onclick=function () {
     next3("prev3");
}

//fourth
nextSlide4.onclick=function () {
     next4("next4");
}
prevSlide2.onclick=function () {
     next4("prev4");
}

//fifth
nextSlide5.onclick=function () {
     next5("next5");
}
prevSlide5.onclick=function () {
     next5("prev5");
}

//sixth
nextSlide6.onclick=function () {
     next6("next6");
}
prevSlide6.onclick=function () {
     next6("prev6");
}


//seventh
nextSlide7.onclick=function () {
     next7("next7");
}
prevSlide7.onclick=function () {
     next7("prev7");
}




function next(direction){

   if(direction=="next"){
      index++;
       if(index==totalSlides){
        index=0;
       }
   } 
   else{
           if(index==0){
            index=totalSlides-1;
           }
           else{
            index--;
           }
    }

  for(i=0;i<slides.length;i++){
          slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");     

}


function next2(direction){

     if(direction=="next2"){
        index++;
         if(index==totalSlides2){
          index=0;
         }
     } 
     else{
             if(index==0){
              index=totalSlides2-1;
             }
             else{
              index--;
             }
      }
  
    for(i=0;i<slides2.length;i++){
            slides2[i].classList.remove("active");
    }
    slides2[index].classList.add("active");     
  
  }


  
function next3(direction){

     if(direction=="next3"){
        index++;
         if(index==totalSlides3){
          index=0;
         }
     } 
     else{
             if(index==0){
              index=totalSlides3-1;
             }
             else{
              index--;
             }
      }
  
    for(i=0;i<slides3.length;i++){
            slides3[i].classList.remove("active");
    }
    slides3[index].classList.add("active");     
  
  }

  
function next4(direction){

     if(direction=="next4"){
        index++;
         if(index==totalSlides4){
          index=0;
         }
     } 
     else{
             if(index==0){
              index=totalSlides4-1;
             }
             else{
              index--;
             }
      }
  
    for(i=0;i<slides4.length;i++){
            slides4[i].classList.remove("active");
    }
    slides4[index].classList.add("active");     
  
  }

  
function next5(direction){

     if(direction=="next5"){
        index++;
         if(index==totalSlides5){
          index=0;
         }
     } 
     else{
             if(index==0){
              index=totalSlides5-1;
             }
             else{
              index--;
             }
      }
  
    for(i=0;i<slides5.length;i++){
            slides5[i].classList.remove("active");
    }
    slides5[index].classList.add("active");     
  
  }

  
function next6(direction){

     if(direction=="next6"){
        index++;
         if(index==totalSlides6){
          index=0;
         }
     } 
     else{
             if(index==0){
              index=totalSlides6-1;
             }
             else{
              index--;
             }
      }
  
    for(i=0;i<slides6.length;i++){
            slides6[i].classList.remove("active");
    }
    slides6[index].classList.add("active");     
  
  }


  
function next7(direction){

     if(direction=="next7"){
        index++;
         if(index==totalSlides7){
          index=0;
         }
     } 
     else{
             if(index==0){
              index=totalSlides7-1;
             }
             else{
              index--;
             }
      }
  
    for(i=0;i<slides7.length;i++){
            slides7[i].classList.remove("active");
    }
    slides7[index].classList.add("active");     
  
  }











