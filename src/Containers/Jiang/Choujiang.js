import $ from 'jquery';


    var $lottery,$units,click=false;
    var lottery = {
        index: -1, //当前转动到哪个位置，起点位置
        count: 0, //总共有多少个位置
        timer: 0, //setTimeout的ID，用clearTimeout清除
        speed: 20, //初始转动速度
        times: 0, //转动次数
        cycle: 50, //转动基本次数：即至少需要转动多少次再进入抽奖环节
        prize: -1, //中奖位置
        init: function(id) {
            if ($('#' + id).find('.aaa').length > 0) {
                 $lottery = $('#' + id);
                $units = $lottery.find('.aaa');
                this.obj = $lottery;
                this.count = $units.length;
                $lottery.find('.item-' + this.index).addClass('on');
            };
        },
        roll: function() {
            var index = this.index;
            var count = this.count;
            var lottery = this.obj;
            $(lottery).find('.item-' + index).removeClass('on');
            index += 1;
            if (index > count - 1) {
                index = 0;
            };
            $(lottery).find('.item-' + index).addClass('on');
            this.index = index;
            return false;
        },
        stop: function(index) {
            this.prize = index;
            return false;
        }
    };
    
    
    var num = 1
   

    function roll() {
        lottery.times += 1;
        lottery.roll(); //转动过程调用的是lottery的roll方法，这里是第一次调用初始化
    
        if (lottery.times > lottery.cycle + 10 && lottery.prize == lottery.index) {
            clearTimeout(lottery.timer);
           
            var model = '';
            if (num == 3) {
                $('.jiang1').fadeIn();
            
                $('.info1').fadeIn();
                ant()
             
            } else {
                $('.jiang2').fadeIn();
                
                $('.info1').fadeIn();
                ant()
             
            }
    
    
            lottery.prize = -1;
            lottery.times = 0;
            click = false;
    
        } else {
            if (lottery.times < lottery.cycle) {
                lottery.speed -= 10;
            } else if (lottery.times == lottery.cycle) {
               
                lottery.prize = num;
    
            } else {
                if (lottery.times > lottery.cycle + 10 && ((lottery.prize == 0 && lottery.index == 7) || lottery.prize == lottery.index + 1)) {
                    lottery.speed += 110;
                } else {
                    lottery.speed += 20;
                }
            }
            if (lottery.speed < 40) {
                lottery.speed = 40;
            };
    
            lottery.timer = setTimeout(roll, lottery.speed); //循环调用
        }
    
    }
  
    function handClick(e){
     if (click) { 
         return false;
 
     } else {
         lottery.speed = 100;
         num = e
         roll(); 
         click = true;
         return false;
     }
    }
   
    function ant(){
        var a =0;
    var Timerr = setInterval(aa,200);
    var removepackage = setInterval(function(){
                for(var jj=0;jj<$('.page_rain>div').length/4;jj++){
                $('.page_rain>div').eq($('.page_rain>div').length-jj).remove();
                }
            },1000)
    function aa(){
        for(var i=0;i<4;i++){
        let m=parseInt(Math.random()*700+100);
        let j2=parseInt(Math.random()*300+1200);
         let j=parseInt(Math.random()*1600);
        let j1=parseInt(Math.random()*300+300);
        let n=parseInt(Math.random()*10+(-10));
        $('.page_rain').prepend('<div class="dd"></div>');
        $('.page_rain').children('div').eq(0).css({'left':j,'top':n});
        $('.page_rain').children('div').eq(0).animate({'left':j-j1,'top':$(window).height()+20},3000);
        }
        }
    }


export {lottery,handClick};