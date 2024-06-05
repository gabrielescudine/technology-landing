window.onload = function(){
    let map;

    function initialize(){
        let mapProp = {
            center: new google.maps.LatLng(-22.88314437866211,-42.013282775878906),
            scrollWheel: false,
            zoom: 14,
            MapTypeId: google.maps.MapTypeId.ROADMAP
        }

        map = new google.maps.Map(document.getElementById("map"), mapProp);
    }

    function addMarker(lat, long, icon, content){
        let latlng = {'lat':lat, 'lng':long};

        let marker = new google.maps.Marker({
            position: latlng,
            map: map,
            icon: icon
        });

        let infoWindow = new google.maps.InfoWindow({
            content: content,
            maxWidth: 200,
            pixelOffset: new google.maps.Size(0,30)
        });

        // const conteudo = '<p style="color: black; font-size: 13px;>Endereço Localizado</p>';
        // addMarker(-23.49390, -20.30349, '', conteudo);
    }

    // initialize();

    //Menu Mobile Responsivo

    $('.menu-mobile').on('click',function(){
        $(this).find('ul').slideToggle();
    })

    //Menu Scroll

    $('.menu-desktop a,.menu-mobile a').on('click',function(){
        let href = $(this).attr('href');
        let offSetTop = $(href).offset().top;

        $('html,body').animate({'scrollTop': offSetTop},1500);

        return false;
    });

    //Slider Scroll
    let amount;
    let curIndex = 0;
    const delay = 2000;

    initSlider();
    autoPlay();

    function initSlider(){
        amount = $('.sobre-autor').length;
        let sizeContainer = 100 * amount;
        let sizeBoxSingle = 100 / amount;
        $('.sobre-autor').css('width', sizeBoxSingle + '%');
        $('.scroll-wrapper').css('width', sizeContainer + '%');

        for(let i = 0; i < amount; i++){
            if(i == 0){
                $('.slider-bullet').append('<span></span>');
            }else{
                $('.slider-bullet').append('<span></span>');
            }
        }
    }

    function autoPlay(){
        setInterval(function(){
            curIndex++;
            if(curIndex == amount){
                curIndex = 0;
            }
            goToSlider(curIndex);
        },delay)
    }

    function goToSlider(curIndex){
        let offSetX = $('.sobre-autor').eq(curIndex).offset().left - $('.scroll-wrapper').offset().left;
        $('.slider-bullet span').css('background-color','#ccc');
        $('.slider-bullet span').eq(curIndex).css('background-color','#9b9b9b');
        $('.scrollEquipe').stop().animate({'scrollLeft': offSetX+'px'});
    }

    $(window).resize(function(){
        $('.scrollEquipe').stop().animate({'scrollLeft': 0});
    })

    //new = tem função p/ criar um novo objeto
    //this = faz referência ao objeto/instância da classe atual

    function Animal(){
        this.nome = 'Cachorro';
        this.peso = '24kg';
        this.outrasInfos = {
            altura: '24.4cm',
            tamanhoPata: '10cm',
            comprimentoRabo: '40cm'
        }
    
    }

    let meuCachorro = new Animal();

    // console.log(meuCachorro.nome);
    // console.log(meuCachorro.outrasInfos.altura);
}