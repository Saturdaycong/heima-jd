window.onresize = function () {
    PxRem();
}
PxRem();
//自动设置跟字体大小
function PxRem(){
    var docEl = document.documentElement;
    var width = Math.min(docEl.getBoundingClientRect().width,750); 
    
    var rem = width / 3.6;
    docEl.style.fontSize = rem + 'px';
}

window.onload = function  (){
    var swiper = new Swiper('.category-left .swiper-container', {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        mousewheel: true,
      });
    var swiper = new Swiper('.category-right .swiper-container', {
        direction: 'vertical',
            //如果有多个 <!-- 滑动内容的大容器 -->swiper-slide 就需要加这个参数
            slidesPerView: 'auto',
            //开启回弹效果
            freeMode: true,
            //初始化滚动条  必须子元素的高度超过父元素
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            mousewheel: true,
      });

      var leftList = document.querySelectorAll('.category-left ul li');
      var leftUl = document.querySelector('.category-left ul');
      var liHeight = leftList[0].offsetHeight;
      
      
      leftUl.addEventListener('click',function(e){
          for(var i = 0;i < leftList.length;i++){
              leftList[i].classList.remove('active');
              leftList[i].dataset['index']=i;
          }

          e.target.parentNode.classList.add('active');
          var translateY = e.target.parentNode.dataset['index'] * liHeight;
          var swiperWrapperHeight = document.querySelector('.category-left .swiper-wrapper').offsetHeight;
          var ulHeight = leftList.offsetHeight;
          var maxTranslateY = swiperWrapperHeight - ulHeight;
          // 3.3 判断当前位移值 是否小于了最大位移值 设置为最大位移值
          if(translateY < maxTranslateY){
              // 3.4 如果小于就设置为最大位移值
              translateY = maxTranslateY;
          }
          // 4. 给当前swiper-wrapper 容器设置translate3d设置位移 注意带px单位
          swiperWrapper.style.transform = 'translate3d(0px, '+translateY+'px, 0px)';
          // 5. 给位移的swiper-wrapper 添加过渡效果
          swiperWrapper.style.transition = 'all 0.3s';
      });
      
      
      

}
