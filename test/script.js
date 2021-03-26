function grave() {
    var named = "Florian";
    document.getElementById("demo").innerHTML = `Hallo ${named}`;
  }

function car() {
    var car = {
        type:"Fiat", 
        model:"500", 
        color:"white",
        car: function() {
            return this.type + " " + this.model + " " + this.color;
        }
    };
    document.getElementById("demo").innerHTML = car.car();
    document.getElementById("demo2").innerHTML = car.car;
}

function zeit() {
    var today = new Date();
    var hour = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();

    document.getElementById("time").innerHTML = hour + ":" + min + ":" + sec;

    setTimeout(zeit, 500);
}

function konvert() {
    var myNumber = 32;
    document.getElementById("demo").innerHTML =
    "32 = " + "<br>" + 
    " Decimal " + myNumber.toString(10) + "<br>" +
    " Hexadecimal " + myNumber.toString(16) + "<br>" +
    " Octal " + myNumber.toString(8) + "<br>" +
    " Binary " + myNumber.toString(2);
}

function random() {
    //Math.floor(Math.random() * 10) returns a random integer between 0 and 9 (both included)
    document.getElementById("demo").innerHTML =
    Math.floor(Math.random() * 10);
}

var dinge = ["Kekse", "Bananen", "Äpfel"];
function create_list(ding) {
    dinge.push(ding)
    var text = "<ul>";
    for (var i = 0; i < dinge.length; i++) {
        text += "<li>" + dinge[i] + "</li>";
    }
    document.getElementById("loop").innerHTML = text + "</ul>";
}

var player_turn = true;

function win(grid) {
    
}

function set_tiktaktoe() {
    var grid = [
        [document.getElementById("1").value, document.getElementById("2").value, document.getElementById("3").value],
        [document.getElementById("4").value, document.getElementById("5").value, document.getElementById("6").value],
        [document.getElementById("7").value, document.getElementById("8").value, document.getElementById("9").value]
    ];
    var place = document.getElementById("tiktaktoe_input").value;
    place = parseInt(place);
    if (place <= 3){
        place += 6
    } else if (place >= 7){
        place -= 6
    }
    place = String(place);

    if (player_turn) {
        document.getElementById(place).innerHTML = "X";
    } else {
        document.getElementById(place).innerHTML = "O";
    }
    player_turn = !player_turn;
}