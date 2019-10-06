// let $container = $ ('.container'),
// //找到当前容器中的swper
//     $swper = $container.children('.swper');
//    //timer自己创建的方法,用于存储自动轮播的定时器 
//    //step 存储的当前展示的是索引为那个的轮播图
//     let timer = null,
//     step = 0; //第一张轮播图的索引 
    
// //autoMove自动轮播
//     function  autoMove(){
//         //让window向左偏移
//             step++;
//             $swper.stop().animate({
//                left:-step * 1600
//             }, 300);

//     }
// timer=setInterval(autoMove,1000);//每间隔一秒就执行一次