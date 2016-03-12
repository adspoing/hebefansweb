var prev = document.getElementById("prev");
var next = document.getElementById("next");

var imgList = document.getElementById("imgList").getElementsByTagName("div");
var len=imgList.length;
var preImg = document.getElementById("navImg").getElementsByTagName("img");
var index=0;
var fade=false;

var setOpacity = function(obj,opa){
    obj.style.opacity=opa/100;
};

setOpacity(preImg[0],100);
setOpacity(preImg[1],20);
setOpacity(preImg[2],20);
setOpacity(preImg[3],20);
setOpacity(preImg[4],20);

//  渐入函数 ，为下一张（即将显示的）图片所用
var fadeIn = function(obj) {
    fade = true;
    obj.style.display = "block";
    var opa = 0;
    var timer = setInterval(func, 1);//这里的数字可以控制速度
    function func() {
        if (opa < 100) {
            opa += 2;//改变这里数字可以控制速度
            setOpacity(obj, opa);
        } else {
            clearInterval(timer);
            fade = false;
        }
    }
};
//淡出函数 为即将隐藏的眼前图片所用
var fadeOut = function(obj) {
    fade = true;
    var opa = 100;
    var timer = setInterval(func, 1);
    function func() {
        if (opa > 0) {
            opa -= 1;
            setOpacity(obj, opa);
        } else {
            clearInterval(timer);
            obj.style.display = "none";
        }
    }
};

// 点击下一张切换
next.onclick = function() {
    console.log("a");
    if (fade) {
        return;
    } else {
        fadeOut(imgList[index]);
        index += 1;
        if (index == len) index = 0;
        fadeIn(imgList[index]);
        lightpic();
    }
};
//点击上一张切换
prev.onclick = function() {
    if (fade) {
        return;
    } else {
        fadeOut(imgList[index]);
        if (index === 0) index = len;
        index -= 1;
        fadeIn(imgList[index]);
        lightpic();
    }
};
function lightpic(){
    for(var i=0;i<len;i++)
    {
        if(index==i){
             setOpacity(preImg[i],100);
        }
        else
        {
            setOpacity(preImg[i],20);
        }
    }
}
for(var i=0;i<len;i++)
{
    preImg[i].order=i;
    preImg[i].onclick =  function() {
        fadeOut(imgList[index]);
        index = this.order;
        fadeIn(imgList[index])
        lightpic();
    };
}


