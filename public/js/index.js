var L_l_g={};
L_l_g.Init=function(){
    document.getElementsByTagName("body")[0].style.height=document.documentElement.clientHeight+"px" || document.body.clientHeight +"px";//设置屏幕宽度
    window.addEventListener('click', function(){
        document.getElementsByTagName("audio")[0].play();
    }, false);
    writeContent(true);
}();