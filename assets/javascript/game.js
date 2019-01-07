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
}

//increasing attack power
Character.prototype.increaseAttack = function () {
    this.attackPower += baseAttack;
};

//removing opponent health points
Character.prototype.attack = function (Obj) {
    Obj.healthPoints -= this.attackPower;
    $(".updates").html("You attacked " +
        Obj.name + " for " + this.attackPower + " damage points.");
    this.increaseAttack();
};

//losing your own health after counter attack
Character.prototype.counterAttack = function (Obj) {
    Obj.healthPoints -= this.counterAttackPower;
    $(".updates").append("<br>" + this.name + " attacked you for " + this.counterAttackPower + " damage points.");
};

//good guys
    var princessLeia = new Character("Princess Leia", 200, 6, 6);
    var obiWan = new Character("Obi-Wan Kenobi", 160, 9, 9);
    var lukeSkywalker = new Character("Luke Skywalker", 140, 12, 12);
    var chewy = new Character("Chewbacca", 120, 15, 15);
    charArray.push(princessLeia, obiWan, lukeSkywalker, chewy);


//bad guys
    var bobaFett = new Character("Boba Fett", 200, 15, 15);
    var darthMaul = new Character("Darth Maul", 180, 12,12);
    var emperorP = new Character("Emperor Palpatine", 140, 9, 9);
    var darthVader = new Character("Darth Vader", 120, 6,6);
    oppArray.push(bobaFett, darthMaul, emperorP, darthVader);



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
$("#leiaBtn").click(function(){
    player = princessLeia
    playerSelected = true;
    $("#goodinfo").append(princessLeia); // appends the selected player to the div 
    $("#goodinfo").append(player.name);
    $("#goodinfo").append("<br>" + "HP: " + player.healthPoints);
    $("#goodSide").append("<img src='assets/images/princessleia.jpg' style= 'height:250px;width:18rem;'>")
});
$("#obiBtn").click(function(){
    player = obiWan
    playerSelected = true;
    $("#goodinfo").append(obiWan); // appends the selected player to the div 
    $("#goodinfo").append(player.name);
    $("#goodinfo").append("<br>" + "HP: " + player.healthPoints);
    $("#goodSide").append("<img src='assets/images/obi-wan-kenobi-star-wars.jpg' style= 'height:250px;width:18rem;'>")
});
$("#lukeBtn").click(function(){
    player = lukeSkywalker
    playerSelected = true;
    $("#goodinfo").append(lukeSkywalker); // appends the selected player to the div 
    $("#goodinfo").append(player.name);
    $("#goodinfo").append("<br>" + "HP: " + player.healthPoints);
    $("#goodSide").append("<img src='assets/images/lukeskywalker.jpg' style= 'height:250px;width:18rem;'>")
});
$("#chewyBtn").click(function(){
    player = chewy
    playerSelected = true;
    $("#goodinfo").append(chewy); // appends the selected player to the div 
    $("#goodinfo").append(player.name);
    $("#goodinfo").append("<br>" + "HP: " + player.healthPoints);
    $("#goodSide").append("<img src='assets/images/chwebacca.jpg' style= 'height:250px;width:18rem;'>")
});


$("#bobaBtn").click(function () {
    // Stores the defender the user has clicked on in the defender variable and removes it from the oppArray
        for (var j = 0; j < oppArray.length; j++) {
            if (oppArray[j].name == "Boba Fett") {
                defender = oppArray[j]; // sets defender
                oppArray.splice(j, 1);
                defenderSelected = true;
            }
        }
        $("#bobaCard").children().remove();
        $("#badSide").append(defender.name);
        $("#badSide").append("<br>" + "HP: " + defender.healthPoints);
        $("#badpic").append("<img src='assets/images/bobaFett.jpg' style= 'height:250px;width:18rem;'>")
});
$("#emperorBtn").click(function () {
    // Stores the defender the user has clicked on in the defender variable and removes it from the oppArray
        for (var j = 0; j < oppArray.length; j++) {
            if (oppArray[j].name == "Emperor Palpatine") {
                defender = oppArray[j]; // sets defender
                oppArray.splice(j, 1);
                defenderSelected = true;
            }
        }
        $("#emperorCard").children().remove();
        $("#badSide").append(this); // appends the selected defender to the div 
        $("#badSide").append(defender.name);
        $("#badSide").append("<br>" + "HP: " + defender.healthPoints);
        $("#badpic").append("<img src='assets/images/emperorPalpatine.jpg' style= 'height:250px;width:18rem;'>")

});
$("#vaderBtn").click(function () {
    // Stores the defender the user has clicked on in the defender variable and removes it from the oppArray
        for (var j = 0; j < oppArray.length; j++) {
            if (oppArray[j].name == "Darth Vader") {
                defender = oppArray[j]; // sets defender
                oppArray.splice(j, 1);
                defenderSelected = true;
            }
        }
        $("#vaderCard").children().remove();
        $("#badSide").append(defender.name);
        $("#badSide").append("<br>" + "HP: " + defender.healthPoints);
        $("#badpic").append("<img src='assets/images/darthVader.jpg' style= 'height:250px;width:18rem;'>")

});
$("#maulBtn").click(function () {
    // Stores the defender the user has clicked on in the defender variable and removes it from the oppArray
        for (var j = 0; j < oppArray.length; j++) {
            if (oppArray[j].name == "Darth Maul") {
                defender = oppArray[j]; // sets defender
                oppArray.splice(j, 1);
                defenderSelected = true;
            }
        }
        $("#maulCard").children().remove();
        $("#badSide").append(defender.name);
        $("#badSide").append("<br>" + "HP: " + defender.healthPoints);
        $("#badpic").append("<img src='assets/images/darthMaul.jpg' style= 'height:250px;width:18rem;'>")
});

$("#attackbtn").click(function () {
    if (playerSelected && defenderSelected) {
            baseAttack+=1;
        if (isAlive(player) && isAlive(defender)) {
            player.attack(defender);
            defender.counterAttack(player);
            $("#goodinfo").html("HP: " + player.healthPoints);
            $("#badSide").html("HP: " + defender.healthPoints);
            if (!isAlive(defender)) {
                $("#badpic").children().remove();
                $("#badSide").html("DEFEATED!")
                $(".updates").html("Choose your next enemy...");
            }
            if (!isAlive(player)) {
                $("#goodinfo").html("YOU LOST!");
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




