var pay1=document.getElementById("pay1");
var mylist1=document.getElementById("mylist1");
var myhover1=document.getElementById("myhover1");
var mydownload=document.getElementById("mydownload");
var myclose=document.getElementById("myclose");
var mymore=document.getElementById("mymore");
pay1.onclick=function(){
    mylist1.style.display="block";
};
myhover1.onclick=function(){
    mydownload.style.display="block";
};
myclose.onclick=function(){
    mydownload.style.display="none";
};
mymore.onclick=function(){
    mymore.style.display="none";
}


