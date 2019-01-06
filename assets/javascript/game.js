var baseAttack = 0; // original attack strength
var player; // holds the player Object
var defender; // holds the current defender Object
var charArray = []; // array that stores the game characters (Objects)
var oppArray = []
var playerSelected = false; // flag to mark if we picked a player yet
var defenderSelected = false; // flag to mark if we picked a defender


function Character(name, hp, ap, counter, pic) {
    this.name = name;
    this.healthPoints = hp;
    this.attackPower = ap;
    this.counterAttackPower = counter;
    this.pic = pic;
}

//increasing attack power
Character.prototype.increaseAttack = function () {
    this.attackPower += baseAttack;
};

//removing opponent health points
Character.prototype.attack = function (Obj) {
    Obj.healthPoints -= this.attackPower;
    $(".updates").html("You attacked " +
        Obj.name + "for " + this.attackPower + " damage points.");
    this.increaseAttack();
};

//losing your own health after counter attack
Character.prototype.counterAttack = function (Obj) {
    Obj.healthPoints -= this.counterAttackPower;
    $(".updates").append("<br>" + this.name + " attacked you for " + this.counterAttackPower + " damage points.");
};

//good guys

function yourCharacter() {
    var princessLeia = new Character("Princess Leia", 200, 6, 6, "./assets/images/princessleia.jpg");
    var obiWan = new Character("Obi-Wan Kenobi", 140, 9, 6, "./assets/images/obiwankenobi.jpg");
    var lukeSkywalker = new Character("Luke Skywalker", 120, 12, 9, "./assets/images/lukeskywalker.jpg");
    var chewy = new Character("Chewbacca", 100, 15, 9, "./assets/images/chew.jpg");
    charArray.push(princessLeia, obiWan, lukeSkywalker, chewy);
}

//bad guys

function oponnentCharacter () {
    var bobaFett = new Character("Boba Fett", 160, 21, 21, "./assests/images/bobaFett.jpg");
    var darthMaul = new Character("Darth Maul", 140, 18,18, "./assets/images/darthMaul.jpg");
    var emperorP = new Character("Emperor Palpatine", 120, 15, 15, "./assets/images/emperorPalpatine.jpg");
    var darthVader = new Character("Darth Vader", 100, 12,12, "./assets/images/darthVader.jpg");
    oppArray.push(bobaFett, darthMaul, emperorP, darthVader);

}

function setBaseAttack(Obj) {
    baseAttack = Obj.attackPower;
}

function isAlive(Obj) {
    if (Obj.healthPoints > 0) {
        return true;
    }
    return false;
}

function isWinner() {
    if (oppArray.length == 0 && player.healthPoints > 0)
        return true;
    else return false;
}
//figure out how to move pic to battle ground when seleced



$(".oppinfo").click(function () {
    // Stores the defender the user has clicked on in the defender variable and removes it from the charArray
        for (var j = 0; j < oppArray.length; j++) {
            if (oppArray[j].name == (this).id) {
                defender = oppArray[j]; // sets defender
                oppArray.splice(j, 1);
                defenderSelected = true;
            }
        }
        $("#badSide").append(this); // appends the selected defender to the div 
        $("#badSide").append("<br>" + defender.name);
        $("#badSide").append("HP: " + defender.healthPoints);

});
$(".playerinfo").click(function(){
    if (charArray[j].name == (this).id) {
        player = charArray[j]; // sets player
        charArray.splice(j, 1);
        playerSelected = true;
    }
    $("#goodSide").append(this); // appends the selected player to the div 
    $("#goodSide").append("<br>" + player.name);
    $("#goodSide").append("HP: " + player.healthPoints);
});



$(document).on("click", "#attackBtn", function () {
    if (playerSelected && defenderSelected) {
        if (isAlive(player) && isAlive(defender)) {
            player.attack(defender);
            defender.counterAttack(player);
            $("#goodSide").html("HP: " + player.healthPoints);
            $("#badSide").html("HP: " + defender.healthPoints);
            if (!isAlive(defender)) {
                $("#badSide").html("DEFEATED!")
                $(".updates").html("Choose your next enemy...");
            }
            if (!isAlive(player)) {
                $("#goodSide").html("YOU LOST!");
                $(".updates").html("Try again...");
            }
        }
        if (!isAlive(defender)) {
            $("#badSide").children().remove();
            $("#badSide").html("");
            defenderSelected = false;
            if (isWinner()) {
                $(".updates").html("YOU WON!!!!!!! Balance has beed restored")
            }
        }
    }
});




