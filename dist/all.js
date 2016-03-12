var box = document.querySelector('.box').textContent,
    rs = document.querySelector('.render'),
    f = [
        'arial','verdana','monospace',
        'consolas','impact','helveltica'
    ],
    c = [
        '1ABC9C','3498DB','34495E','E67E22',
        'E74C3C','2ECC71','E74C3C','95A5A6','D35400'
    ];
var out = '';
for (var i = 0; i < box.length; i++) {
    // Random array fonts
    var r = f[Math.floor(Math.random() * f.length)],
    // Random array colors
        sh = c[Math.floor(Math.random() * c.length)],
        st = 'color:#'+sh+
            ';font-family: '+r+
            ';text-shadow:0px 1px 0px #'+sh+',0px 2px 0px #'+sh+',0px 3px 0px #'+sh+',0px 4px 0px #'+sh+', 0px 5px 0px  #'+sh+',0px 6px 0px #'+sh+', 0px 7px 0px #'+sh+',0px 8px 7px #'+sh;
    out += '<span style="'+st+'">'+box[i]+'</span>';
}
rs.innerHTML = out; 
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