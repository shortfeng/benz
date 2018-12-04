$(function(){
    /*-----------------获取导航栏固定效果------------------------------*/
    function fixedNav(){
        var nav=$(".navScroll");
        var win=$(window);
        var sc=$(document);
        win.scroll(function(){
            if(sc.scrollTop()>=600){
                nav.addClass("fixed");
                //console.log(sc.scrollTop());
            } else 
              nav.removeClass("fixed");
        })
    }
    fixedNav();
    /*--------------------------电梯效果----------------*/
    function lift(){
        //电梯导航
        //1.获取固定导航栏的元素
        var navLi=$("li.nav-item");
        //2.获取楼层元素
        var navFl=$("div.fl");
        $(window).scroll(function(){
            var scrollTop=$(window).scrollTop();
            var liftF1=$("div.section-head").offset().top;
            if(scrollTop<liftF1){
                navLi.eq(0).removeClass("active");
            }
            navFl.each((i,navFl)=>{
                var $f=$(navFl);
                var offsetTop=$f.offset().top;//当前元素距离页面顶端的距离
                if(offsetTop<=scrollTop+50){
                    navLi.eq(i).siblings().removeClass("active");
                    navLi.eq(i).addClass("active");
                    //给当前楼层对应的li加上样式，其他的清除样式
                }
            })
            var btn=navLi.children();
            btn.click(function(e){
            e.preventDefault();
            var $btn=$(this);
            var li=$btn.parent();
            console.log(li);
            var i=li.index();
            console.log(i);
            var $fi=$("div.fl").eq(i);
            console.log($fi);
            var offsetTop=$fi.offset().top;
            console.log(offsetTop);
            $("html").stop(true).animate({"scrollTop":offsetTop-30},1000);
            })
        })
    }
    lift();
    /*视频---------------------视频----------------------------*/
	$(function(){
        $("#poster_img").on("click",function(){
        $("#poster_img").addClass("miss");	
                var obj=document.getElementById("video1")
                obj.play();
        })
    })
    $(function(){
        $("#poster-img").on("click",function(){
        $("#poster-img").addClass("miss");	
                var obj=document.getElementById("video123")
                obj.play();
        })
    
    })
    $(function(){
        $("#post-img").on("click",function(){
        $("#post-img").addClass("miss");	
                var obj=document.getElementById("video12")
                obj.play();
        })
    
    })	
/*--------------------------主页轮播---------------------------*/ 
function carousel(){
        //1.获取主框体
        var slideBox = $("div.carousel");
        //console.log(slideBox);
       //2.查找ul
        var ul = slideBox.find("ul.carousel-inner");//获取ul
       //console.log(ul);
       var span = slideBox.find(".spanBox span");
       //console.log(span.length);
       var timer = null;
       var i = 0; 
       //设置第一张图片默认显示，其他隐藏                   
       ul.find("li").eq(0).show().siblings("li.carousel-item").hide();
       function show(){
           //当前元素显示，其他隐藏
               if(i==span.length){
               i=0;
           }
           $("li.carousel-item").eq(i).fadeIn(500).siblings().fadeOut(500);
           //导航条添加样式
           $("div.spanBox").children().eq(i).addClass("active").siblings().removeClass("active");
           i++;
           //console.log(i);
       }
       show();
        //箭头点击事件
    //左箭头
        $("a.carousel-control-prev").click(function(e){
       e.preventDefault();
       i--;
       if(i==0){
         i=span.length;
       }
      $("li.carousel-item").eq(i-1).fadeIn(500).siblings().fadeOut(500);
      //导航条添加样式
      $("div.spanBox").children().eq(i-1).addClass("active").siblings().removeClass("active");
        });
        //右箭头
        $("a.carousel-control-next").click(function(e){
        e.preventDefault();
       if(i==span.length)
       i=0;
       $("li.carousel-item").eq(i).fadeIn(500).siblings().fadeOut(500);
       //导航条添加样式
        $("div.spanBox").children().eq(i).addClass("active").siblings().removeClass("active");
       i++;
        });
        //导航条点击事件
        span.click(function(){
      i=$(this).index()+1;
      var spanStyle=$(this);
      spanStyle.addClass("active").siblings().removeClass("active");
      $("li.carousel-item").eq(i-1).fadeIn(500).siblings().fadeOut(500);
        }) 
        //鼠标移入移出事件
        slideBox.mouseenter(function(){
       clearInterval(timer);
       $("a.carousel-control-prev,a.carousel-control-next").stop(true).animate({"opacity":1},200);
       })
       slideBox.mouseleave(function(){
       timer=setInterval(show,3000)
       $("a.carousel-control-prev,a.carousel-control-next").stop(true).animate({"opacity":0.3},200);
        })
    timer=setInterval(show,3000);
}
carousel();
/*---------------------AMG概述---------------------------------*/
function aboutAmg(){
        //获取初始元素
        //1.包裹内容的父元素
        var main=$("div.section-main");
        //2.图片
        var ulImg=$("ul.main-img-pc");
        //3.标题导航
        var ulTitle=$("ul.main-title-pc");
        //4.轮播指示
        var ulPc=$("ul.main-ul-pc");
        //5.内容
        var ulProduce=$("ul.main-text-pc");
        //6.定时器
        var timer=null;
        //7.定义变量 t
        var t=0;
        //8.获取轮播次数
        var len=ulImg.children().length;
        //9.获取宽度
        //console.log(liWidth);
        function liWidth(){
            var cstWidth=ulProduce.children().eq(0).width();
            return cstWidth;
        }
        //10.获取li
        var ula=ulPc.children().children();
        console.log(ula);
        timer=setInterval(showTime,3000);
        //图片和标题默认第一张显示
        ulImg.children(":first-child").show().siblings().hide();
        ulTitle.children(":first-child").show().siblings().hide();
        function showTime(){
            t++;
            if(t==len){
                t=0;
            }
           //1.图片切换  
            ulImg.children().eq(t).fadeIn(500).siblings().fadeOut(500);
            //2.标题切换
            ulTitle.children().eq(t).fadeIn(500).siblings().fadeOut(500);
            //3.内容切换
            ulProduce.stop(true).animate({"marginLeft":-(liWidth()*t)},500);
            //4.导航切换
            ulPc.children().eq(t).siblings().children(":first-child").removeClass("active");
            ulPc.children().eq(t).children(":first-child").addClass("active");
        };
            //5.鼠标悬停
            main.hover(function(){
                clearInterval(timer);
            },function(){
                timer=setInterval(showTime,3000);
            })
            //6.点击切换
            ula.click(function(e){
                e.preventDefault();
                var btn=$(this);
                t=btn.parent().index();
                console.log(t);
                //1.图片切换  
                ulImg.children().eq(t).fadeIn(500).siblings().fadeOut(500);
                //2.标题切换
                ulTitle.children().eq(t).fadeIn(500).siblings().fadeOut(500);
                //3.内容切换
                ulProduce.stop(true).animate({"marginLeft":-(liWidth()*t)},500);
                //4.自身添加样式
                btn.addClass("active").parent().siblings().children(":first-child").removeClass("active");
            })
        }
    aboutAmg();
/*-------------------3d轮播-------------------------------------*/  
function carCarousel(){
        var json=[
            {   //图1
                top:'120px',
                left:'285px',
                width:'150px',
                height:'100px',
                zIndex:1,
                opacity:0.1 
            },
            {   //图2
                top:'120px',
                left:'185px',
                width:'200px',
                height:'120px',
                zIndex:2,
                opacity:0.2   
            },               
            {   //图3
                top:'100px',
                left:'45px',
                width:'250px',
                height:'140px',
                zIndex:4,
                opacity:0.4   
            },
            {  
                //图4
                top:'100px',
                left:'185px',
                width:'300px',
                height:'160px',
                zIndex:6,
                opacity:0.6
            },
            {//图5
                top:'100px',
                left:'285px',
                width:'350px',
                height:'180px',
                zIndex:8,
                opacity:0.8
            },
            {//图6
                top:'100px',
                left:'385px',
                width:'400px',
                height:'200px',
                zIndex:10,
                opacity:1
            },
            {//图7
                top:'100px',
                left:'535px',
                width:'350px',
                height:'180px',
                zIndex:8,
                opacity:0.8
            },
            {//图8
                top:'100px',
                left:'655px',
                width:'300px',
                height:'160px',
                zIndex:6,
                opacity:0.6
            },
            {//图9
                top:'100px',
                left:'875px',
                width:'250px',
                height:'140px',
                zIndex:4,
                opacity:0.4
            },
            {//图10
                top:'120px',
                left:'655px',
                width:'200px',
                height:'120px',
                zIndex:2,
                opacity:0.2
            },
            {//图11
                top:'120px',
                left:'535px',
                width:'150px',
                height:'100px',
                zIndex:1,
                opacity:0.1
            }
        ];
        var jieliu=true;
    //封装一个函数，将json每个数据通过遍历加在每个'li'容器上
        function addCss(){
            var $liText=$("div.list-text>ul>li");
            for(var i in json){
                $('#wrap ul li').eq(i).css({zIndex:json[i].zIndex});
                if($("#wrap ul li").eq(i).css("zIndex")==10){
                    $liText.eq(i).addClass("active").siblings().removeClass("active");
                }
                $('#wrap ul li').eq(i).stop(true).animate({
                    top:json[i].top,
                    left:json[i].left,
                    width:json[i].width,
                    height:json[i].height,
                    opacity:json[i].opacity
                },'slow',function(){
                    jieliu=true;
                });
            }               
        }
        //页面打开先调用一次，页面不会乱
        addCss();
        $('.prev').click(function(){
            if(jieliu==true){
                jieliu=false;
                //json.shift(),删除数组的第一个值，并返回第一个值
                //json.push(json.shift())将返回的第一个值追加到数组末尾
                json.unshift(json.pop());
                //重新遍历
                addCss();                   
            }
    
        });
        $('.next').click(function(){
            if(jieliu==true){
                jieliu=false;
                //json.pop(),删除数组的最后个值，并返回最后一个值
                //json.unshift(json.pop())将返回的最后一个值添加到数组最前面
                json.push(json.shift());
                //重新遍历
                addCss();
            }
        });
        var timer=setInterval(function(){
            if(jieliu==true){
                jieliu=false;
                //json.pop(),删除数组的最后个值，并返回最后一个值
                //json.unshift(json.pop())将返回的最后一个值添加到数组最前面
                json.push(json.shift());
                //重新遍历
                addCss();
            }
        },3000)
        //鼠标移入移出
        var wrap=$("#wrap");
        var $prev=$("button.prev");
        var $next=$("button.next");
        wrap.mouseenter(function(){
            clearInterval(timer);
            $prev.stop(true).animate({"opacity":1});
            $next.stop(true).animate({"opacity":1});
        })
        wrap.mouseleave(function(){
            $prev.stop(true).animate({"opacity":0.2});
            $next.stop(true).animate({"opacity":0.2});
            timer=setInterval(function(){
            if(jieliu==true){
                jieliu=false;
                //json.pop(),删除数组的最后个值，并返回最后一个值
                //json.unshift(json.pop())将返回的最后一个值添加到数组最前面
                json.push(json.shift());
                //重新遍历
                addCss();
            }
        },3000)
        })
    }
carCarousel();
/*------------------------AMG性能设计---------------------------------------*/
function aboutDesign(){
    //获取初始元素
    //1.包裹内容的父元素
    var main=$("div.section-design");
    //2.图片
    var ulImg=$("ul.design-img-pc");
    //3.标题导航
    var ulTitle=$("ul.design-title-pc");
    //4.轮播指示
    var ulPc=$("ul.design-ul-pc");
    //5.内容
    var ulProduce=$("ul.design-text-pc");
    //6.定时器
    var timer=null;
    //7.定义变量 t
    var t=0;
    //8.获取轮播次数
    var len=ulImg.children().length;
    console.log(len);
    //9.获取宽度
    //console.log(liWidth);
    function liWidth(){
        var cstWidth=ulProduce.children().eq(0).width();
        return cstWidth;
    }
    //10.获取li
    var ula=ulPc.children().children();
    console.log(ula);
    timer=setInterval(showTime,3000);
    //图片和标题默认第一张显示
    ulImg.children(":first-child").show().siblings().hide();
    ulTitle.children(":first-child").show().siblings().hide();
    function showTime(){
        t++;
        if(t==len){
            t=0;
        }
       //1.图片切换  
        ulImg.children().eq(t).fadeIn(500).siblings().fadeOut(500);
        //2.标题切换
        ulTitle.children().eq(t).fadeIn(500).siblings().fadeOut(500);
        //3.内容切换
        ulProduce.stop(true).animate({"marginLeft":-(liWidth()*t)},500);
        //4.导航切换
        ulPc.children().eq(t).siblings().children(":first-child").removeClass("active");
        ulPc.children().eq(t).children(":first-child").addClass("active");
    };
        //5.鼠标悬停
        main.hover(function(){
            clearInterval(timer);
        },function(){
            timer=setInterval(showTime,3000);
        })
        //6.点击切换
        ula.click(function(e){
            e.preventDefault();
            var btn=$(this);
            t=btn.parent().index();
            console.log(t);
            //1.图片切换  
            ulImg.children().eq(t).fadeIn(500).siblings().fadeOut(500);
            //2.标题切换
            ulTitle.children().eq(t).fadeIn(500).siblings().fadeOut(500);
            //3.内容切换
            ulProduce.stop(true).animate({"marginLeft":-(liWidth()*t)},500);
            //4.自身添加样式
            btn.addClass("active").parent().siblings().children(":first-child").removeClass("active");
        })
    }
aboutDesign();
/*------------------------------AMG起点 -----------------------------------*/
function aboutStart(){
    //获取初始元素
    //1.包裹内容的父元素
    var main=$("div.section-start");
    //2.图片
    var ulImg=$("ul.start-img-pc");
    //3.标题导航
    var ulTitle=$("ul.start-title-pc");
    //4.轮播指示
    var ulPc=$("ul.start-ul-pc");
    //5.内容
    var ulProduce=$("ul.start-text-pc");
    //6.定时器
    var timer=null;
    //7.定义变量 t
    var t=0;
    //8.获取轮播次数
    var len=ulImg.children().length;
    console.log(len);
    //9.获取宽度
    //console.log(liWidth);
    function liWidth(){
        var cstWidth=ulProduce.children().eq(0).width();
        return cstWidth;
    }
    //10.获取li
    var ula=ulPc.children().children();
    console.log(ula);
    timer=setInterval(showTime,3000);
    //图片和标题默认第一张显示
    ulImg.children(":first-child").show().siblings().hide();
    ulTitle.children(":first-child").show().siblings().hide();
    function showTime(){
        t++;
        if(t==len){
            t=0;
        }
       //1.图片切换  
        ulImg.children().eq(t).fadeIn(500).siblings().fadeOut(500);
        //2.标题切换
        ulTitle.children().eq(t).fadeIn(500).siblings().fadeOut(500);
        //3.内容切换
        ulProduce.stop(true).animate({"marginLeft":-(liWidth()*t)},500);
        //4.导航切换
        ulPc.children().eq(t).siblings().children(":first-child").removeClass("active");
        ulPc.children().eq(t).children(":first-child").addClass("active");
    };
        //5.鼠标悬停
        main.hover(function(){
            clearInterval(timer);
        },function(){
            timer=setInterval(showTime,3000);
        })
        //6.点击切换
        ula.click(function(e){
            e.preventDefault();
            var btn=$(this);
            t=btn.parent().index();
            console.log(t);
            //1.图片切换  
            ulImg.children().eq(t).fadeIn(500).siblings().fadeOut(500);
            //2.标题切换
            ulTitle.children().eq(t).fadeIn(500).siblings().fadeOut(500);
            //3.内容切换
            ulProduce.stop(true).animate({"marginLeft":-(liWidth()*t)},500);
            //4.自身添加样式
            btn.addClass("active").parent().siblings().children(":first-child").removeClass("active");
        })
    }
aboutStart();
})    

