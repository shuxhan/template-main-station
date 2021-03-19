// 鼠标悬浮于二维码时弹出夹层

// $(".wm").mouseover(function(){
//     $(".left2wm").addClass("st");
// })

// $(".wm").mouseout(function(){
//     $(".left2wm").removeClass("st");
// })

// 鼠标悬浮二维码时，所有的列表都会弹出弹窗

var wm =  document.getElementsByClassName('wm');
var left2wm = document.getElementsByClassName('left-2wm');



// var wm = document.getElementsByClassName('wm');//数组
// var wmlen = wm.length;
// var g;
// for(var i = 0;i < wmlen;i++){
// 	wm[i].index = i;
//     left2wm[i].index = i;
// 	wm[i].onmouseover = function(){
// 		console.log(this.index);//元素索引值
//         left2wm[i].addClass('st')
// 	}
// }

var list=$(".wm");

for(var i=0;i<list.length;i++){

    if(wm[i].onmouseover) {
        console.log('1')
    }

}


// 动画加载

var advisoryleft = document.getElementById('advisoryleft');
var advisorycenter = document.getElementById('advisorycenter');
var advisoryright = document.getElementById('advisoryright');
var wrap = document.getElementById('wrap');

var wrapscrolltop = document.getElementById("wrap").clientHeight

addEventListener('scroll', function(){
    var scrollTop = document.documentElement.scrollTop;

    if (scrollTop > wrapscrolltop-300) {
        advisoryleft.style.animationName = 'advisoryleft';
        advisoryleft.style.animationDuration = '1s';

        advisoryright.style.animationName = 'advisoryright';
        advisoryright.style.animationDuration = '1s';

        advisorycenter.style.animationName = 'advisorycenter';
        advisorycenter.style.animationDuration = '1s';
    }
})

