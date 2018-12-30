window.addEventListener('load', function (){
    var mySwiper = new Swiper('.swiper-container', {
        loop: true, // 循环模式选项
        autoplay: true,//可选选项，自动滑动
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },
    })
    // 1.获取元素,
    // 2.获取轮播图的高度
    // 3.算出比值
    // 4.设置比值
    setHeaderOpacity();
    window.addEventListener('scroll',setHeaderOpacity)
    //设置倒计时
    var iList = document.querySelectorAll('.seckill-time i:not(:nth-child(3n))');
    
    var time = 2*60*60;
    setInterval(function (){
        setSeckillTime(iList,time);
        time--;
    },1000);
})

window.onresize = function () {
    PxRem();
}
PxRem();
//自动设置跟字体大小
function PxRem(){
    var docEl = document.documentElement;
    var width = Math.min(docEl.getBoundingClientRect().width,750); 
    console.log(width);
    
    var rem = width / 3.6;
    docEl.style.fontSize = rem + 'px';
}
//设置头部透明度
function setHeaderOpacity(){

        var slideHeight = document.querySelector('#slide').offsetHeight;
        var header = document.querySelector('#header');
        var scroll =  document.documentElement.scrollTop || document.body.scrollTop;
        var opacity = scroll / slideHeight;
        header.style.backgroundColor = "rgba(242, 2, 22,"+opacity+")"


}
//时间 
function setSeckillTime(iList,time){
    var hour = Math.floor(time / 3600);
    console.log(hour);
    var m = Math.floor(time % 3600 / 60);
    console.log(m);
    var s = time % 3600 % 60;
    console.log(s);
    

    //设置时间
    iList[0].innerText = Math.floor(hour/10);
    iList[1].innerText = Math.floor(hour%10);
    iList[2].innerText = Math.floor(m/10);
    iList[3].innerText = Math.floor(m%10);
    iList[4].innerText = Math.floor(s/10);
    iList[5].innerText = Math.floor(s%10);
    
}