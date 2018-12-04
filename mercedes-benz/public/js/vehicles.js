"use strict";
        /**AJAX**/
    var createXhr=function(){
        var xhr=null;
        if(window.XMLHttpRequest){
            xhr=new XMLHttpRequest();
        }else{
            xhr=new ActiveXObject("Microsoft.XMLHttp");
        }
        return xhr;
    }

    /**4个标题的点击切换**/
    var AllcarModle=a('.car_nav>li');
    for(var car of AllcarModle){
        car.onclick=function(){
            var car=this;
            var active=q(
                '.car_nav>li.li_active'
            );
            active.className="";
            car.className="li_active";
            /**标题获取**/
            var carModel=car.innerHTML;
            if(carModel.length>4){
                carModel="跑车";
            }
            window.onload=carModelTitle(carModel);
        }
    }
    var ii=new Array();
    var cid='';
    /**页面的加载事件**/ 
    var carModelTitle=function(carModel){
        var xhr=new createXhr();
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4&&xhr.status==200){
                var res=xhr.responseText;
                if(res!="0"){
                    res=JSON.parse(res);
                    /**获取小标题**/
                    var arr=new Array();
                    for(var key of res){
                        arr.push(key["carSpecies"]);
                    }
                    /**小标题的数组**/
                    for(var i=1;i<arr.length;i++){
                        if(arr[i]==arr[i-1]){
                            arr.splice(i,1);
                            var i=i-1;
                        }
                    }
                    /**小标题选择接收数据**/
                    var HTML=``;
                    
                    for(var i=0;i<arr.length;i++){
                        var add='';
                        
                        if(arr[i].length==1||arr[i]=='CLA'){
                            add=`<span>级</span>`;
                        }

                        var img_arr=new Array();
                        
                        var str='';
                        for(var key of res){
                            if(key['carSpecies']==arr[i]){
                              img_arr.push(key['titleMap']);
                              ii.push(key['titleMap']);
                              str+=`<li >
                                        <div class="car-hover" onmouseover="getcarid(${key.cid})">
                                            <p>${key['carName']}</p>
                                            <p>¥ ${key['retailPrice']} 万起</p>
                                        </div>
                                    </li>`;
                            };
                            
                        }
                        HTML+=`<li>
                                    <img class="img_title" id="img_car" src='${img_arr[0]}'></div>
                                    <div class="font_Model">
                                        <span class="title_Model">${arr[i]}</span>${add}
                                    </div>
                                    <ul class='box_carTitle'>`;
                        HTML+=str;
                        HTML+=`</ul></li>`;
                       
                    }
                    document.getElementById("getModel").innerHTML=HTML;
                }else{
                    alert("跳转404去！");
                }
            }
        }
        xhr.open("get","/vehicles/carSpecies?carModel="+carModel,true);
        xhr.send(null);
    }
    
    
