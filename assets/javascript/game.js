var player; 
var defender; 
var charArray = [];
var oppArray = [];
var playerSelected = false; 
var defenderSelected = false; 


function Character(name, hp, ap) {
    this.name = name;
    this.healthPoints = hp;
    this.attackPower = ap;
    this.increaseAttack = function () {
        this.attackPower += this.attackPower;
    };
}

function attack(player, opponent) {
    opponent.healthPoints -= player.attackPower;
    player.healthPoints -= opponent.attackPower;
    $(".updates").html("You attacked " +
        opponent.name + " for " + player.attackPower + " damage points. " + opponent.name + " attacked you for "+ opponent.attackPower+ ".");
    player.increaseAttack();
    opponent.increaseAttack();
};


//good guys
    var princessLeia = new Character("Princess Leia", 260, 6);
    var obiWan = new Character("Obi-Wan Kenobi", 240, 9);
    var lukeSkywalker = new Character("Luke Skywalker", 200, 12);
    var chewy = new Character("Chewbacca", 180, 15);
    charArray.push(princessLeia, obiWan, lukeSkywalker, chewy);


//bad guys
    var bobaFett = new Character("Boba Fett", 400, 15);
    var darthMaul = new Character("Darth Maul", 340, 12);
    var emperorP = new Character("Emperor Palpatine", 240, 9);
    var darthVader = new Character("Darth Vader", 140, 6);
    oppArray.push(bobaFett, darthMaul, emperorP, darthVader);


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

$("#leiaBtn").click(function(){
    player = princessLeia
    playerSelected = true;
    $("#goodinfo").append(princessLeia); // appends the selected player to the div 
    $("#goodinfo").append(princessLeia.name);
    $("#goodinfo").append("<br>" + "HP: " + princessLeia.healthPoints);
    $("#goodSide").append("<img src='assets/images/princessleia.jpg' style= 'height:250px;width:18rem;'>")
});
$("#obiBtn").click(function(){
    player = obiWan
    playerSelected = true;
    $("#goodinfo").append(obiWan); // appends the selected player to the div 
    $("#goodinfo").append(obiWan.name);
    $("#goodinfo").append("<br>" + "HP: " + obiWan.healthPoints);
    $("#goodSide").append("<img src='assets/images/obi-wan-kenobi-star-wars.jpg' style= 'height:250px;width:18rem;'>")
});
$("#lukeBtn").click(function(){
    player = lukeSkywalker
    playerSelected = true;
    $("#goodinfo").append(lukeSkywalker); // appends the selected player to the div 
    $("#goodinfo").append(lukeSkywalker.name);
    $("#goodinfo").append("<br>" + "HP: " + lukeSkywalker.healthPoints);
    $("#goodSide").append("<img src='assets/images/lukeskywalker.jpg' style= 'height:250px;width:18rem;'>")
});
$("#chewyBtn").click(function(){
    player = chewy
    playerSelected = true;
    $("#goodinfo").append(chewy); // appends the selected player to the div 
    $("#goodinfo").append(chewy.name);
    $("#goodinfo").append("<br>" + "HP: " + chewy.healthPoints);
    $("#goodSide").append("<img src='assets/images/chwebacca.jpg' style= 'height:250px;width:18rem;'>")
});


$("#bobaBtn").click(function () {
        for (var j = 0; j < oppArray.length; j++) {
            if (oppArray[j].name == "Boba Fett") {
                defender = oppArray[j]; // sets defender
                oppArray.splice(j, 1);
                defenderSelected = true;
            }
        }
        $("#bobaCard").children().remove();
        $("#badSide").append(bobaFett.name);
        $("#badSide").append("<br>" + "HP: " + bobaFett.healthPoints);
        $("#badpic").append("<img src='assets/images/bobaFett.jpg' style= 'height:250px;width:18rem;'>")
});
$("#emperorBtn").click(function () {
        for (var j = 0; j < oppArray.length; j++) {
            if (oppArray[j].name == "Emperor Palpatine") {
                defender = oppArray[j]; // sets defender
                oppArray.splice(j, 1);
                defenderSelected = true;
            }
        }
        $("#emperorCard").children().remove();
        $("#badSide").append(emperorP.name);
        $("#badSide").append("<br>" + "HP: " + emperorP.healthPoints);
        $("#badpic").append("<img src='assets/images/emperorPalpatine.jpg' style= 'height:250px;width:18rem;'>")

});
$("#vaderBtn").click(function () {
        for (var j = 0; j < oppArray.length; j++) {
            if (oppArray[j].name == "Darth Vader") {
                defender = oppArray[j]; // sets defender
                oppArray.splice(j, 1);
                defenderSelected = true;
            }
        }
        $("#vaderCard").children().remove();
        $("#badSide").append(darthVader.name);
        $("#badSide").append("<br>" + "HP: " + darthVader.healthPoints);
        $("#badpic").append("<img src='assets/images/darthVader.jpg' style= 'height:250px;width:18rem;'>")

});
$("#maulBtn").click(function () {
        for (var j = 0; j < oppArray.length; j++) {
            if (oppArray[j].name == "Darth Maul") {
                defender = oppArray[j]; // sets defender
                oppArray.splice(j, 1);
                defenderSelected = true;
            }
        }
        $("#maulCard").children().remove();
        $("#badSide").append(darthMaul.name);
        $("#badSide").append("<br>" + "HP: " + darthMaul.healthPoints);
        $("#badpic").append("<img src='assets/images/darthMaul.jpg' style= 'height:250px;width:18rem;'>")
});

$("#attackbtn").click(function () {
    if (playerSelected && defenderSelected) {
        
        if (isAlive(player) && isAlive(defender)) {
            attack(player, defender);
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
