function aa(){
  window.addEventListener("mousemove",function(dets){
      document.querySelector("#sm").style.top = `${dets.clientY}px`;
      document.querySelector("#sm").style.left = `${dets.clientX}px`;
  });
}
window.requestAnimationFrame(aa);

var main= document.querySelector("#main");

function bb(){
  window.addEventListener("mousemove",function(dets){
      document.querySelector("#magic").style.top = `${dets.clientY}px`;
      document.querySelector("#magic").style.left = `${dets.clientX}px`;
      document.querySelector("#magic").style.backgroundColor="white";
      document.querySelector("#magic").style.mixBlendMode="difference";
  });
  
  document.querySelectorAll("#img")
  .forEach(function(dets){
      dets.addEventListener('mouseover',function(){
          document.querySelector("#magic").style.opacity="2"
          document.querySelector("#sm").style.opacity="0"

      });
      dets.addEventListener('mouseleave',function(){
          document.querySelector("#magic").style.opacity="0"
          document.querySelector("#sm").style.opacity="initial"

          main.style.backgroundColor="white";
          this.style.zoom= "1";
      this.style.boxShadow= "0 0px 0px 0px rgba(46, 6, 66, 0.764)";
      });
  });
}
window.requestAnimationFrame(bb);


var abcd=document.querySelectorAll(".abcd")   
.forEach(function(dets){
  dets.addEventListener('mousemove',function(){
      document.querySelector('#sm').style.height="90px";
      document.querySelector('#sm').style.width="90px"; 
      document.querySelector("#sm").style.backgroundColor="white";
      document.querySelector("#sm").style.mixBlendMode="difference";
  });
  dets.addEventListener('mouseleave',function(){
      document.querySelector('#sm').style.height="13px";
      document.querySelector('#sm').style.width="13px"; 
      document.querySelector('#sm').style.backgroundColor="transparent";
      document.querySelector("#sm").style.mixBlendMode="initial";
      
  });
});
var ac=document.querySelector("#ccircle");
ac.addEventListener('mousemove',function(dets){
  document.querySelector("#ccircle").style.transform=`translate(${dets.clientX*.22}px, ${dets.clientY*.08}px)`;
  
});
ac.addEventListener("mouseleave",function(dets){
  document.querySelector("#ccircle").style.transform=`translate(0,0)`;
})

var dd=document.querySelector("#left h1");
dd.addEventListener("mouseover",function(dets){
  document.querySelector("#sl").style.opacity="1";
  document.querySelector("#sw").style.opacity="1";
});
dd.addEventListener("mouseleave",function(dets){
  document.querySelector("#sl").style.opacity="0";
  document.querySelector("#sw").style.opacity="0";
});

gsap.from("#circle i",{
  rotate:"360deg",
  ease:Expo.easeIn,
  duration:2,
  delay:3,
});

var main= document.querySelector("#main");

document.querySelector(".img1").addEventListener("mouseover", function(dets){
  if(dets.clientX ){
      document.querySelector(".img1").style.zoom= "1.08";
      document.querySelector(".i1").style.filter= "blur(1px)";
      document.querySelector(".img1 #gray").style.opacity= "1";
      //document.querySelector("#ttext").style.color= "white";
      document.querySelector(".img1").style.boxShadow= "0 20px 40px -30px rgba(46, 6, 66, 0.764)";
      document.querySelector(".img1").styletransition= "all cubic-bezier(0.19, 1, 0.22, 1) 5s";
    main.style.backgroundColor="#CBFCA6"
  } 
});

document.querySelector(".img2").addEventListener("mouseover", function(dets){
  if(dets.clientX ){
      this.style.zoom= "1.08";
      document.querySelector(".i2").style.filter= "blur(1px)";
      document.querySelector(".img2 #gray").style.opacity= "1";
      this.style.boxShadow= "0 20px 40px -30px rgba(46, 6, 66, 0.764)";
      this.styletransition= "all cubic-bezier(0.19, 1, 0.22, 1) 5s";
    main.style.backgroundColor="#FC7E70"
  } 
});

document.querySelector(".img3").addEventListener("mouseover", function(dets){
  if(dets.clientX ){
    this.style.zoom= "1.08";
    document.querySelector(".i3").style.filter= "blur(1px)";
    document.querySelector(".img3 #gray").style.opacity= "1";
    this.style.boxShadow= "0 20px 40px -30px rgba(46, 6, 66, 0.764)";
      this.styletransition= "all cubic-bezier(0.19, 1, 0.22, 1) 5s";
    main.style.backgroundColor="#FF9EDC"
  } 
});

document.querySelector(".img4").addEventListener("mouseover", function(dets){
  if(dets.clientX ){
    this.style.zoom= "1.08";
    document.querySelector(".i4").style.filter= "blur(1px)";
    document.querySelector(".img4 #gray").style.opacity= "1";
     this.style.boxShadow= "0 20px 40px -30px rgba(46, 6, 66, 0.764)";
      this.styletransition= "all cubic-bezier(0.19, 1, 0.22, 1) 5s";
    main.style.backgroundColor="#CF9EFF"
  } 
});
document.querySelector(".img5").addEventListener("mouseover", function(dets){
  if(dets.clientX ){
    this.style.zoom= "1.08";
    document.querySelector(".i5").style.filter= "blur(1px)";
    document.querySelector(".img5 #gray").style.opacity= "1";
    this.style.boxShadow= "0 20px 40px -30px rgba(46, 6, 66, 0.764)";
      this.styletransition= "all cubic-bezier(0.19, 1, 0.22, 1) 5s";
    main.style.backgroundColor="#AC6666"
  } 
});
document.querySelector(".img1").addEventListener("mouseleave", function(dets){
  if(dets.clientX ){
      document.querySelector(".img1 #gray").style.opacity= "0";
      document.querySelector(".i1").style.filter= "blur(0px)";
  } 
});
document.querySelector(".img2").addEventListener("mouseleave", function(dets){
  if(dets.clientX ){
      document.querySelector(".img2 #gray").style.opacity= "0";
      document.querySelector(".i2").style.filter= "blur(0px)";
  } 
});
document.querySelector(".img3").addEventListener("mouseleave", function(dets){
  if(dets.clientX ){
    document.querySelector(".img3 #gray").style.opacity= "0";
      document.querySelector(".i3").style.filter= "blur(0px)";
  } 
});
document.querySelector(".img4").addEventListener("mouseleave", function(dets){
  if(dets.clientX ){
    document.querySelector(".img4 #gray").style.opacity= "0";
      document.querySelector(".i4").style.filter= "blur(0px)";
  } 
});
document.querySelector(".img5").addEventListener("mouseleave", function(dets){
  if(dets.clientX ){
    document.querySelector(".img5 #gray").style.opacity= "0";
      document.querySelector(".i5").style.filter= "blur(0px)";
  } 
});
var menu=document.querySelector("#nav i");
menu.addEventListener('click',function(){
  document.querySelector("#menu").style.opacity="1";
  document.querySelector("#cancel").style.display="flex";
  document.querySelector("#click").style.opacity="0";
});
var menu=document.querySelector("#nav #cancel");
menu.addEventListener('click',function(){
  document.querySelector("#menu").style.opacity="0";
  document.querySelector("#cancel").style.display="none";
  document.querySelector("#click").style.opacity="1";
});


gsap.fromTo("#black", {
  y:0
}, {
 y:-1400, 
 delay: 0,
  duration: 2,
  ease:Expo.easeIn,
height:0
}); 

gsap.fromTo(".lds-ripple", {
  y:0
}, {
 y:0, 
 delay: 0.3,
  duration: 1,
  
  opacity:0
});
gsap.fromTo(".large", {
  y:180
}, {
 y:0, 
 delay: 1,
  duration: 2,
  ease:Expo.easeInOut,
  
}); 
gsap.fromTo("#circle", {
  y:180
}, {
 y:0, 
 delay: 1,
  duration: 2,
  ease:Expo.easeInOut,
  
}); 
gsap.fromTo("#mainheading p", {
  y:180
}, {
 y:0, 
 delay: 1,
  duration: 2,
  ease:Expo.easeInOut,
  
}); 
gsap.fromTo(".img1", {
  y:180
}, {
 y:0, 
 delay: 1,
  duration: 2,
  ease:Expo.easeInOut,
  
}); 
function task() {
  setTimeout(function() {
      $('.large').textillate({in:{effect:'fadeInUp', delayScale: 1,delay:80}})
  }, 2200 );
}
task()

gsap.fromTo("#hide1", {
  y:0
}, {
 y:-90, 
 delay: 2,
  duration: 1

});
gsap.fromTo("#hide2", {
  y:0
}, {
 y:-90, 
 delay: 3,
  duration: 1,
 opacity:1
});
gsap.fromTo("#hide3 span", {
  y:0
}, {
 y:-100, 
 delay: 0,
  duration: 2,
  ease:Expo.easeIn,
  opacity:0,

}); 

var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

