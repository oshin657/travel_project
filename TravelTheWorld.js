$(".img").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout:3000,
});


$('#box').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items: 2,
    margin: 30,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
            
        },
        576:{
            items:3,
    margin: 30,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
        },
        991:{
            items: 4,
            margin: 30,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
        }
    }
})

