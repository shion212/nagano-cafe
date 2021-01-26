//ハンバーガー
$(document).ready(function () {

        $('.menu').click(function() {
            $('.overlay').toggleClass('anim');
            $(this).addClass('open')
        });

        $('.open').click(function(){
            $('.overlay').toggleClass('reverse-animation');
        })
});


//タイピング
const typing = (element, sentence) => {
	[...sentence].forEach((character, index) => {
  	setTimeout(() => {
    	document.querySelector(element).textContent += character;
    }, 100 * ++index);
  });
}

typing('#typing', '長野のおすすめのカフェ♪おすすめ3選！');






//オープニングシャッター
$(function(){
    let $window = $(window),
        $load = $('#load_animation'),
        $load_in = $load.find('img');


    $load_in.delay(500).fadeIn('slow');

    $window.on('load',function(){
        HideLoadingScreen();
    })


    setTimeout(function(){
        HideLoadingScreen();
    },5000);

    function HideLoadingScreen(){
        $load.delay(5100).fadeOut("slow");
    }
});
