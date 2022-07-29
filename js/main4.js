$(document).ready(function () {
    // başlatma denetleyicisi değişkeni
    var controller = new ScrollMagic.Controller();

    // giriş pini (sabitleyicisi)
    var pinIntroScene = new ScrollMagic.Scene({
        triggerElement: "#intro",
        triggerHook: 0,
        duration: "20%"
    })
    .setPin("#intro", {pushFollowers: false})
    .addIndicators()
    .addTo(controller);

    // tekrar pinleme (sabitleme)
    var pinIntroScene2 = new ScrollMagic.Scene({
        triggerElement: "#project01",
        triggerHook: 0.6
    })
    .setPin("#intro", {pushFollowers: false})
    .addIndicators()
    .addTo(controller);

    //her bir .project elemanında döngü ve animasyon için
    $(".project").each(function () {

        // sahne oluştur
        var ourScene = new ScrollMagic.Scene({
            triggerElement: this.children[0],
            triggerHook: 0.9
        })
        .setClassToggle(this, "fade-in") // project1'e bu sınıfı ekle
        .addIndicators({
            name: "fade scene",
            colorTrigger: "black",
            colorStart: "#75c695",
            colorEnd: "pink"
        }) // bu ekstra script gerektirir
        .addTo(controller);

    })
});