$(document).ready(function () {
    // başlatma denetleyicisi değişkeni
    var controller = new ScrollMagic.Controller();

    // sahne oluştur
    var ourScene = new ScrollMagic.Scene({
        triggerElement: "#project01 img",
        duration: "90%",
        triggerHook: 0.9
    })
    .setClassToggle("#project01", "fade-in") // project1'e bu sınıfı ekle
    .addIndicators({
        name: "fade scene",
        colorTrigger: "black",
        colorStart: "#75c695",
        colorEnd: "pink"
    }) // bu ekstra script gerektirir
    .addTo(controller);
});