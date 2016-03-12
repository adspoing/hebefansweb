var video=['看淡','小幸运','你就不要想起我','寂寞寂寞就好','我想我不会爱你'];
var embedurl=['<embed src="http://player.yinyuetai.com/video/player/2470917/v_0.swf" quality="high" width="480" height="334" align="middle"  allowScriptAccess="sameDomain" allowfullscreen="true" type="application/x-shockwave-flash"></embed>',
    '<embed src="http://player.yinyuetai.com/video/player/2333708/v_0.swf" quality="high" width="480" height="334" align="middle"  allowScriptAccess="sameDomain" allowfullscreen="true" type="application/x-shockwave-flash"></embed>',
    '<embed src="http://player.yinyuetai.com/video/player/819096/v_0.swf" quality="high" width="480" height="334" align="middle"  allowScriptAccess="sameDomain" allowfullscreen="true" type="application/x-shockwave-flash"></embed>',
    '<embed src="http://player.yinyuetai.com/video/player/2458663/v_0.swf" quality="high" width="480" height="334" align="middle"  allowScriptAccess="sameDomain" allowfullscreen="true" type="application/x-shockwave-flash"></embed>',
    '<embed src="http://player.yinyuetai.com/video/player/92086/v_0.swf" quality="high" width="480" height="334" align="middle"  allowScriptAccess="sameDomain" allowfullscreen="true" type="application/x-shockwave-flash"></embed>'];
var vString="";
var ind=0;
var btn={};
var close={};
for(var key in video)
{
    ind++;
    vString +="<div id='video"+ind+"'><p id=btn"+ind+">"+"第"+ind+"位:"+video[key]+"</p><div id='embed"+ind+"'>"+embedurl[ind-1]+"<p id='close"+ind+"'>收起</p></div></div></div>";
}
//console.log(vString);
document.getElementById("video").innerHTML=vString;
ind=0;
for(var key in video)
{
    ind++;
    document.getElementById('embed'+ind).style.display="none";
    btn[key] = document.getElementById('btn'+ind);
    btn[key].addEventListener('click',addClick(ind),false);
    close[key]=document.getElementById('close'+ind);
    close[key].addEventListener('click',addClose(ind),false);
}
function addClick(i){
        return function () {
            document.getElementById('embed' + i).style.display = "";
        };
}
function addClose(i){
    return function () {
        document.getElementById('embed' + i).style.display = "none";
    };
}