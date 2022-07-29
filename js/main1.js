$(document).ready(function () {
    // başlatma denetleyicisi değişkeni
    var controller = new ScrollMagic.Controller();

    // sahne oluştur
    var ourScene = new ScrollMagic.Scene({
        triggerElement: "#project01"
    })
    .setClassToggle("#project01", "fade-in") // project1'e bu sınıfı ekle
    .addIndicators({
        name: "fade scene",
        colorTrigger: "black",
        indent: 200,
        colorStart: "#75c695"
    }) // bu ekstra script gerektirir
    .addTo(controller);
});