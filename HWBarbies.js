var Dolls = [
    {
        name: "MiniWan",
        hp: 100,
        rp: 15,
        counter: 8
    },
    {
        name: "Frau",
        hp: 120,
        rp: 18,
        counter: 10
    },
    {
        name: "Khvostik",
        hp: 150,
        rp: 20,
        counter: 12
    },
    {
        name: "Scissors",
        hp: 130,
        rp: 19,
        counter: 11
    },

]
var par1;
var par2;

$(".firstImage").on("click", function () {
    if ($(".yourCharacter").children().length <= 1) {
        $(".firstImage").appendTo(".DollsToRun");
        $(this).appendTo(".yourCharacter");
        par1 = $(this);
        par1HP = $(par1).attr("hp");
        par1HP = parseInt(par1HP);
        par1RP = $(par1).attr("rp");
        par1RP = parseInt(par1RP);
        par1Counter = $(par1).attr("counter");
        par1Counter = parseInt(par1Counter);
    } else if ($(".defender").children().length <= 1) {
        $(this).appendTo(".defender");
        par2 = $(this);
        par2HP = $(par2).attr("hp");
        par2HP = parseInt(par2HP);
        par2RP = $(par2).attr("rp");
        par2RP = parseInt(par2RP);
        par2Counter = $(par2).attr("counter");
        par2Counter = parseInt(par2Counter);
    } else {
        console.log("you have choose your character");
    }


})

$("button").on("click", function () {
    if (($(".yourCharacter").children().length > 1) && ($(".defender").children().length > 1)) {
        par2HP -= par1RP;
        $(".defender p:last-child").text("HP: " + par2HP);
        par1RP += par1Counter;
        par1HP -= par2RP;
        $(".yourCharacter p:last-child").text("HP: " + par1HP);
        win();
        lose();
    }

});


function win() {
    if (par2HP <= 0) {
        $(par2).remove();

    };

}

function lose() {
    if (par1HP <= 0) {
        $(par1).remove();
        $("button").text("Restart");
        $("button").on("click", function () {
            document.location.reload();
        })
    }
}

function winAll() {
    if (($(".defender").children().length = 1) && ($(".DollsToRun").children().length = 1)) {
        $(".fightSection").text("You won!");
        $("button").text("Restart");
        $("button").on("click", function () {
            document.location.reload();
        })
}
}

