
$(document).ready(function(){
    $(".toggleBar1").click(function(){
        $("#toggleContent1").animate({
            height: 'toggle'
        });
    });
    $(".toggleBar2").click(function(){
        $("#toggleContent2").animate({
            height: 'toggle'
        })

    })
});