$(document).ready(function () {
    $('#destaque').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 8000,
        slidesToShow: 1,
        arrows: false,

    });
});
    //Interação Menu
    function clickMenu (){
        if(itens.style.display =='block'){
            itens.style.display ='none'
        }
        else{
            itens.style.display ='block'
        }
    }


 
 