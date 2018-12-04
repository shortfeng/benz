
$(function(){
    // 初始化 第一个 状态
    jQuery('.dh ul li.curr').animate({width:'246px'},'slow');
    jQuery('.dh ul li.curr .layer').animate({height:'60px'},'slow');
    jQuery('.dh ul li.curr .layer .p1').animate({left:'-200%'},'slow');
    jQuery('.dh ul li.curr .layer .p2').animate({right:'145px'},'slow');

    jQuery('.sfq ul li').hover(function(){
      // 获取索引
       var _index = $(this).index();

       $(this).addClass('curr')
       .stop()
       .animate({
          width:'246px'
       },'slow')
       .siblings()
       .stop()
       .animate({
          width:'108px'
       },'slow')
       .removeClass('curr');

       $(this).find('.layer').stop().animate({height:'80px'},'slow').parent().siblings().find('.layer').stop().animate({
           height: '100%'
       },'slow');

       $(this).find('.layer .p1').stop().animate({left:'-200%'},'slow').siblings('.p2').stop().animate({
           right: '145px'
       },'slow').parent().parent().siblings().find('.layer .p1').stop().animate({left:'10px'},'slow').siblings('.p2').stop().animate({
           right: '-200%'
       },'slow')

    },function(){
      //移出

    })
});
































var jiaoche=document.getElementById("jiaocheid");
var suv=document.getElementById("suvid");
var jiaopaocheandchangpengpaoche=document.getElementById("jiaopaocheandchangpengpaocheid");
var mpv=document.getElementById("mpvid");

var jiaochecontent=document.getElementById("jiaochecontent");
var suvcontent=document.getElementById("suvcontent");
var jiaopaocheandchangpengpaochecontent=document.getElementById("jiaopaocheandchangpengpaochecontent");
var mpvcontent=document.getElementById("mpvcontent");
var a1s=document.querySelectorAll("#loutinav>ul>li>span>a");


window.onload=function(){
    
jiaochecontent.style.display="block";
suvcontent.style.display="none";
jiaopaocheandchangpengpaochecontent.style.display="none";
mpvcontent.style.display="none";
}
        

    jiaoche.onclick=function(e){ 
        e.preventDefault();
        var jiaoche=this; jiaochecontent.style.display="block";
        suvcontent.style.display="none";
        jiaopaocheandchangpengpaochecontent.style.display="none";
        mpvcontent.style.display="none"; 
        jiaochecontent.style.position="relative";
        jiaochecontent.style.animation="jiaochecontent 2s"
        
        
    }
    suv.onclick=function(e){
        e.preventDefault();
        var suv=this
        jiaochecontent.style.display="none"
        suvcontent.style.display="block";
        jiaopaocheandchangpengpaochecontent.style.display="none";
        mpvcontent.style.display="none";

        suvcontent.style.
        position="relative";
        suvcontent.style.animation="suvcontent 2s"
    }
    jiaopaocheandchangpengpaoche.onclick=function(e){
        e.preventDefault();
        jiaochecontent.style.display="none"
        suvcontent.style.display="none";
        jiaopaocheandchangpengpaochecontent.style.display="block";
        mpvcontent.style.display="none";


        jiaopaocheandchangpengpaochecontent.style.
        position="relative";
        jiaopaocheandchangpengpaochecontent.style.animation="jiaopaocheandchangpengpaochecontent 2s"
       
    }
    mpv.onclick=function(e){
        e.preventDefault();
        jiaochecontent.style.display="none"
        suvcontent.style.display="none";
        jiaopaocheandchangpengpaochecontent.style.display="none";
        mpvcontent.style.display="block";

        mpvcontent.style.
        position="relative";
        mpvcontent.style.animation="mpvcontent 2s"
      
    }

//     var aa=document.querySelector(".bottom-fixed>p")   
//     var firstContents=document.getElementsByClassName("col-md-4 col-sm-12 mouse-hover")
//    for(var i=0;i<firstContents.length;i++){        
//         var firstContent=firstContents[i];
//         var n=1;
//         firstContent.onclick=function(){ 
//         n++; 
//         if(n%2==0){   
//         // firstContents.setAttribute('style', 'background:#00ADEF');
//         // firstContent.style.background="#00ADEF";       
//         this.style.boxShadow="2px 2px 2px 2px #888888 inset ";
//         }
//         else if(n%2==1){
//         aa.innerHTML=`已选择 ${c} 个车型(支持多选)`; 
//         this.style.boxShadow="";
//      }
//     }
// }

var $ff=$(".row>.col-sm-12");
var $add=$(".bottom-fixed>p");
var n=0

$ff.click(function(){
    var $btn=$(this);
    if(!$btn.hasClass("active1")){
        $btn.addClass("active1");
        n++;
        $add.html(`已选择 ${n} 个车型(支持多选)`)
    }
    else{
        $btn.removeClass("active1");
        n--;    
        $add.html(`已选择 ${n} 个车型(支持多选)`)

    }
   
})


$("#loutinav>ul>li>span>a").click(function(e){
    e.preventDefault();  
    var $btn=$(this);
   
 var ss=$btn.parent().parent().parent().children().children().children()


   $btn.addClass("active");
   if(ss.hasClass("active")){
       ss.removeClass("active");
       $btn.addClass("active")
   }
})



//------------滚轮滚动效果--------------
var aa=document.getElementById("loutinav")
var ul=document.querySelector("#loutinav>ul")
var cc=document.querySelectorAll("#loutinav>ul>li>span>a")


window.onscroll=function(){
    var scrollTop=document.body.scrollTop||
    document.documentElement.scrollTop
    if(scrollTop>50){ 
        ul.style.position="fixed"
        ul.style.width="100%";
        ul.style.background="#6C757D;"
        ul.style.top="0px"
        ul.style.left="0px"  
        
    }
    else{
    
        ul.style.position=""
        ul.style.width="";
        ul.style.background=""
        ul.style.top=""
        ul.style.zIndex="100"
    }
}





