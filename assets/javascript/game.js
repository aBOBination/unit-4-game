var rpg = {

    options : [],

    player : false,

    opponent : false,

    reminingOpponents : [],

    player1 : {
        name : "player1",
        healthPoints : 120,
        attackPower : 8,
        counterAttackPower : 10
    },

    player2 : {
        name : "player2",
        healthPoints : 120,
        attackPower : 8,
        counterAttackPower : 10
    },

    player3 : {
        name : "player3",
        healthPoints : 120,
        attackPower : 8,
        counterAttackPower : 10
    },

    player4 : {
        name : "player4",
        healthPoints : 120,
        attackPower : 8,
        counterAttackPower : 10
    },

    start : function(){
        this.options.push(this.player1, this.player2, this.player3, this.player4);
        for(var i = 0; i < this.options.length; i++){
            var playerCard = $("<div>");
            playerCard.addClass("player-card options card border");
            playerCard.attr("id", this.options[i].name)
            playerCard.text(this.options[i].name)
            $(".selection").append(playerCard);
        }
    },

    cardClick : function(clicked){
        if(this.player === false) {
            var attacker = clicked.attr('id')
            this.player = true;
            clicked.removeClass("options")
            clicked.addClass("attacker");
            clicked.appendTo(".attack");
            $(".options").appendTo(".opponents-remaining")
            console.log(attacker)

        } else if(this.player === true && this.opponent === false) {
            this.opponent = true;
            clicked.appendTo(".opponent");

        }
    }
}

rpg.start()


// Card Click listener

$(".player-card").on("click", function() {
    // do stuff
    rpg.cardClick($(this))
});

// Attack Button listener
$(".btn").on("click", function() {
    // do stuff
});
