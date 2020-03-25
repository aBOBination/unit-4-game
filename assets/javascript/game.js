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
        counterAttackPower : 10
    },

    player3 : {
        name : "Donatello",
        img : "assets/images/tmnt-donny.jpg",
        healthPoints : 180,
        attackPower : 8,
        counterAttackPower : 10
    },

    player4 : {
        name : "Michelangelo",
        img : "assets/images/tmnt-mickey.jpg",
        healthPoints : 150,
        attackPower : 8,
        counterAttackPower : 10
    },

    start : function(){
        this.options.push(this.player1, this.player2, this.player3, this.player4);
        for(var i = 0; i < this.options.length; i++){
            var playerCard = $("<div>");
            playerCard.addClass("player-card options text-center card border");
            playerCard.attr({"style": "max-width:150px", "id": this.options[i].name, "hp": this.options[i].healthPoints, "attackPower": this.options[i].attackPower, "counter": this.options[i].counterAttackPower})

            var playerImg = $("<img>");
            playerImg.addClass("card-img-top")
            playerImg.attr({ "src": this.options[i].img, "alt": "Card image", "style":  "width:100%"});

            var playerBody = $("<div>");
            playerBody.addClass("card-body")

            var playerName = $("<h6>");
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
            this.player = true;
            this.attackHp = clicked.attr('hp')
            this.attackPower = clicked.attr('attackPower')
            clicked.removeClass("options")
            clicked.addClass("attacker");
            clicked.appendTo(".attack");
            $(".options").addClass("red");
            $(".message").text("Choose your opponent!")

        } else if(this.player === true && this.opponent === false) {
            this.opponent = true;
            this.opponentHp = clicked.attr('hp')
            this.opponentCounterAttack = clicked.attr('counter')

            clicked.addClass("opponent");
            clicked.appendTo(".opponent-container");
            $(".message").text("Fight!!!")
        }
    },

    attackClick : function() {
        if(this.opponent === true) {
        this.opponentHp = this.opponentHp - this.attackPower
        this.attackPower = parseFloat(this.attackPower) + parseFloat($(".attacker").attr('attackPower'))
        console.log(this.attackPower)
        $(".opponent > .card-body > p").text(this.opponentHp)
        if(this.opponentHp <= 0) {
            this.wins++;
            if(this.wins === 3) {
                $(".message").text("You beat everyone!")
            }
            $(".opponent-container").empty()
            this.opponent = false;
            $(".message").text("Choose your next opponent!")
        } else {
            this.attackHp = this.attackHp - this.opponentCounterAttack
            $(".attacker > .card-body > p").text(this.attackHp)
            if(this.attackHp <= 0) {
                $(".message").text("You lost!  Click reset to play again.")
            }
        }
    }
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
$(".btn").on("click", function() {
    // do stuff
    rpg.attackClick()
});
