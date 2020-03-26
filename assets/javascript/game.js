var rpg = {

    options : [],

    player : false,

    opponent : false,

    reminingOpponents : [],

    wins : 0,

    attackHp : 0,

    opponentHp : 0,

    opponentCounterAttack : 0,

    player1 : {
        name : "Leonardo",
        img : "assets/images/tmnt-leo.jpg",
        healthPoints : 120,
        attackPower : 8,
        counterAttackPower : 10
    },

    player2 : {
        name : "Raphael",
        img : "assets/images/tmnt-raff.jpg",
        healthPoints : 100,
        attackPower : 8,
        counterAttackPower : 5
    },

    player3 : {
        name : "Donatello",
        img : "assets/images/tmnt-donny.jpg",
        healthPoints : 150,
        attackPower : 8,
        counterAttackPower : 20
    },

    player4 : {
        name : "Michelangelo",
        img : "assets/images/tmnt-mickey.jpg",
        healthPoints : 180,
        attackPower : 8,
        counterAttackPower : 25
    },

    start : function(){
        this.options.push(this.player1, this.player2, this.player3, this.player4);
        for(var i = 0; i < this.options.length; i++){
            var playerCard = $("<div>");
            playerCard.addClass("player-card options text-center card mr-1 ml-1");
            playerCard.attr({"style": "max-width:150px", "id": this.options[i].name, "hp": this.options[i].healthPoints, "attackPower": this.options[i].attackPower, "counter": this.options[i].counterAttackPower});

            var playerImg = $("<img>");
            playerImg.addClass("card-img-top");
            playerImg.attr({ "src": this.options[i].img, "alt": "Card image", "style":  "width:100%"});

            var playerBody = $("<div>");
            playerBody.addClass("card-body");

            var playerName = $("<h6>");
            playerName.addClass("card-title");
            playerName.text(this.options[i].name);

            var playerHp = $("<p>");
            playerHp.addClass("card-hp");
            playerHp.text(this.options[i].healthPoints);

            $(".selection").append(playerCard);
            playerCard.append(playerImg);
            playerCard.append(playerBody);
            playerBody.append(playerName);
            playerBody.append(playerHp);
        }
    },

    cardClick : function(clicked){
        if(this.player === false) {
            this.player = true;
            this.attackHp = clicked.attr('hp');
            this.attackPower = clicked.attr('attackPower');
            $(".attack").text("You")
            clicked.removeClass("options");
            clicked.addClass("attacker");
            clicked.appendTo(".attack");

            $(".options").addClass("red");
            $(".message").text("Choose your opponent!");

        } else if(this.player === true && this.opponent === false && clicked.hasClass("attacker") === false) {
            this.opponent = true;
            this.opponentHp = clicked.attr('hp');
            this.opponentCounterAttack = clicked.attr('counter');
            $(".opponent-container").text("Opponent")
            clicked.addClass("opponent");
            clicked.appendTo(".opponent-container");
            $(".message").text("Fight!!!");
            $(".attack-btn").css("display","inline")
        }
    },

    attackClick : function() {
        var attacker = $(".attacker");
        var opponent = $(".opponent");
        if(this.opponent === true && this.attackHp > 0) {
        this.opponentHp = this.opponentHp - this.attackPower
        this.attackPower = parseFloat(this.attackPower) + parseFloat($(".attacker").attr('attackPower'))
        $(".fight-message").text("You attached " + opponent.attr('id') + " for " + this.attackPower + " damage!")
        $(".opponent > .card-body > p").text(this.opponentHp)
        if(this.opponentHp <= 0) {
            this.wins++;
            this.opponent = false;
            $(".opponent").remove()
            if(this.wins === 3) {
                $(".opponent-container").text("You beat everyone!")
                $(".message").text("You beat everyone!")
                $(".fight-message").text("Click reset to play again!")
            } else {
                $(".opponent-container").text("Choose your next opponent!")
                $(".message").text("Choose your next opponent!")
            }
        } else {
            this.attackHp = this.attackHp - this.opponentCounterAttack
            $(".fight-message").html("You attached " + opponent.attr('id') + " for " + this.attackPower + " damage!"+ " <br/> " + opponent.attr('id') + " attacked you back for " + this.opponentCounterAttack + " damage!")
            $(".attacker > .card-body > p").text(this.attackHp)
            if(this.attackHp <= 0) {
                $(".message").text("You lost!  Click reset to play again.")
                $(".reset-btn").css("display","inline")
                }
            }
        }
    },

    reset : function() {
        location.reload();

    }
}

rpg.start()


// Card Click listener

$(".player-card").on("click", function() {
    // do stuff
    rpg.cardClick($(this))
    console.log($(this))
});

// Attack Button listener
$(".attack-btn").on("click", function() {
    // do stuff
    rpg.attackClick()
});

$(".reset-btn").on("click", function() {
    // do stuff
    rpg.reset()
});
