window.onload=function () {
    let banner =document.querySelector(".banner");
    let li = document.querySelectorAll(".banner .imgbox li");
    let point = document.querySelectorAll(".banner .scrile li");
    let choice_left = document.querySelector(".choice_left");
    let choice_right = document.querySelector(".choice_right");
    console.log(li, point, choice_left, choice_right);
    //自动播放部分
    let now = 0;
    let next = 0;
    let t = setInterval(move, 2000);
    function move() {
                next++;
                if(next==li.length){
                    next=0;
                }
                li[next].style.left="1226px";
                 point[now].className="";
                 point[next].className="point";
                animate(li[now],{left:-1226});
                animate(li[next],{left:0});
                now=next;
            }
    function moveR() {
        next--;
        if(next<0){
            next=li.length-1;
        }
        li[next].style.left="-1226px";
        animate(li[now],{left:1226});
        animate(li[next],{left:0});
        now=next;
    }
    //鼠标移入移出
    banner.onmouseenter=function(){
        clearInterval(t);
    }
    banner.onmouseleave=function(){
        t = setInterval(move,1000);
        }
//  点击箭头向左移动
   choice_right.onclick=function () {
            move();
    }
//  点击箭头向右移动
    choice_left.onclick=function () {
        moveR();
    }
//    点击小圆点操作
    for (let i=0;i<point.length;i++){
        point[i].onclick=function () {
            if(now==i){
                return;
            }else if(now<i){
                li[i].style.left="1226px";
                animate(li[now],{left:-1226});
                animate(li[i],{left:0});
                point[now].className="";
                point[i].className="point";
            }else {
                li[i].style.left="-1226px";
                animate(li[now],{left:1226});
                animate(li[i],{left:0});
                point[now].className="";
               point[i].className="point";
            }
            next=now=i;
        }

    }
}

