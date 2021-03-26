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

var player = true;
function set_tiktaktoe() {
    var place = document.getElementById("tiktaktoe_input").value;
    console.log(typeof place);
    if (player) {
        document.getElementById(place).innerHTML = "X";
    } else {
        document.getElementById(place).innerHTML = "O";
    }
    player = !player;
}