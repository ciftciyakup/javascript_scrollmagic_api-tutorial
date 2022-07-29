$(document).ready(function () {
    // başlatma denetleyicisi değişkeni
    var controller = new ScrollMagic.Controller();

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