var rpg = {

    options : [],

    player : false,

    opponent : false,

    reminingOpponents : [],

    player1 : {
        name : "Aragorn",
        img : "assets/images/aragorn-200.jpg",
        healthPoints : 120,
        attackPower : 8,
        counterAttackPower : 10
    },

    player2 : {
        name : "Legolas",
        img : "assets/images/legolas-200.png",
        healthPoints : 120,
        attackPower : 8,
        counterAttackPower : 10
    },

    player3 : {
        name : "Gimli",
        img : "assets/images/gimli-200.png",
        healthPoints : 120,
        attackPower : 8,
        counterAttackPower : 10
    },

    player4 : {
        name : "player4",
        img : "assets/images/gimli-200.png",
        healthPoints : 120,
        attackPower : 8,
        counterAttackPower : 10
    },

    start : function(){
        this.options.push(this.player1, this.player2, this.player3, this.player4);
        for(var i = 0; i < this.options.length; i++){
            var playerCard = $("<div>");
            playerCard.addClass("player-card options text-center card border");
            playerCard.attr("id", this.options[i].name)
            playerCard.attr("style", "max-width:150px")

            var playerImg = $("<img>");
            playerImg.addClass("card-img-top")
            playerImg.attr({ "src": this.options[i].img, "alt": "Card image", "style":  "width:100%"});

            var playerBody = $("<div>");
            playerBody.addClass("card-body")

            var playerName = $("<h5>");
            playerName.addClass("card-title")
            playerName.text(this.options[i].name)

            var playerHp = $("<p>");
            playerHp.text(this.options[i].healthPoints)

            $(".selection").append(playerCard);
            playerCard.append(playerImg)
            playerCard.append(playerBody)
            playerBody.append(playerName)
            playerBody.append(playerHp)

        }
    },

    cardClick : function(clicked){
        if(this.player === false) {
            var attacker = clicked.attr('id')
            this.player = true;
            clicked.removeClass("options")
            clicked.addClass("attacker");
            clicked.appendTo(".attack");
            // $(".options").appendTo(".opponents-remaining")
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
