let inboxN = new Array();
let inboxI = new Array();

function Mobile(name, battery, status) {
    this.name = name;
    this.status = status;
    this.battery = battery;

    this.showStatus = function () {
        if (this.name === "nokia") {
            document.getElementById("disStaNok").innerHTML = this.status;
        }
        if (this.name === "iphone") {
            document.getElementById("disStaIph").innerHTML = this.status;
        }
    }

    this.getStatus = function () {
        return this.status;
    }

    this.setStatus = function (status) {
        this.status = status;
    }

    this.getBattery = function () {
        return this.battery;
    }

    this.setBattery = function (battery) {
        this.battery = battery;
    }

    this.onOff = function () {
        if (this.name === "nokia") {
            if (this.status === "on") {
                document.getElementById('sendSaveNokia').classList.add('display-none');
                document.getElementById('trashNokia').classList.add('display-none');
                document.getElementById('showChargeNokia').classList.add('display-none');
                nokia.status = "off";

            } else {
                document.getElementById('sendSaveNokia').classList.remove('display-none');
                document.getElementById('trashNokia').classList.remove('display-none');
                document.getElementById('showChargeNokia').classList.remove('display-none');
                nokia.status = "on";

            }
        }
        if (this.name === "iphone"){
            iphone.showStatus();
            if (this.status === "on") {
                document.getElementById('sendSaveIphone').classList.add('display-none');
                document.getElementById('trashIphone').classList.add('display-none');
                document.getElementById('showChargeIphone').classList.add('display-none');
                iphone.status = "off";

            } else {
                document.getElementById('sendSaveIphone').classList.remove('display-none');
                document.getElementById('trashIphone').classList.remove('display-none');
                document.getElementById('showChargeIphone').classList.remove('display-none');
                iphone.status = "on";

            }
        }
    }

    this.inbox = function () {
        if (this.name === "nokia") {
            document.getElementById("showMesNokia").innerHTML = "";
            for (let i = 0; i < inboxN.length; i++) {
                document.getElementById("showMesNokia").innerHTML += inboxN[i] + "<br/>";
            }
        }
        if (this.name === "iphone") {
            document.getElementById("showMesIphone").innerHTML = "";
            for (let j = 0; j < inboxI.length; j++) {
                document.getElementById("showMesIphone").innerHTML += inboxI[j] + "<br/>";
            }
        }
    }

    this.sendMess = function () {
        if (this.battery > 0) {
            if (this.name === "nokia") {
                let message = document.getElementById("mesBoxNokia").value;
                if (message === "") {
                    alert("Nhap noi dung de gui");
                } else {
                    inboxI.push(message);
                    this.battery--;
                    document.getElementById("disStaBatNok").innerHTML = nokia.battery;
                }
            }
            if (name === "iphone") {
                let message = document.getElementById("mesBoxIphone").value;
                if (message === "") {
                    alert("Nhap noi dung de gui");
                } else {
                    inboxN.push(message);
                    this.battery--;
                    document.getElementById("disStaBatIph").innerHTML = iphone.battery;
                }
            }
        } else {
            alert("Xac them pin de su dung");
        }
    }
    this.charge = function () {
        if (this.battery < 100) {
            this.battery += 2;
            document.getElementById("disStaBatNok").innerHTML = nokia.battery;
            document.getElementById("disStaBatIph").innerHTML = iphone.battery;
        } else {
            alert("Battery full");
        }
    }
    this.trashMes = function () {
        if (this.name === "nokia") {
            document.getElementById("thuNhapNokia").innerHTML = "";
            let trash1 = document.getElementById("mesBoxNokia").value;
            document.getElementById("thuNhapNokia").innerHTML += trash1 + "<br/>";
            this.battery--;
            document.getElementById("disStaBatNok").innerHTML = nokia.battery;

        }
        if (this.name === "iphone") {
            document.getElementById("thuNhapIphone").innerHTML = "";
            let trash1 = document.getElementById("mesBoxIphone").value;
            document.getElementById("thuNhapIphone").innerHTML += trash1 + "<br/>";
            this.battery--;
            document.getElementById("disStaBatIph").innerHTML = iphone.battery;
        }
    }
}

var nokia = new Mobile("nokia", 75, "On");
var iphone = new Mobile("iphone", 80, "On");

function sendNokia() {
    nokia.sendMess();
    console.log(nokia.battery);
}

function showNokia() {
    nokia.inbox();
    console.log(nokia.battery);
}

function sendIphone() {
    iphone.sendMess();
    console.log(iphone.battery);
}

function showIphone() {
    iphone.inbox();
    console.log(iphone.battery);
}

function chargeNokia() {
    nokia.charge();
    console.log(nokia.battery);
}

function chargeIphone() {
    iphone.charge()
    console.log(iphone.battery);
}

function saveNokia() {
    nokia.trashMes();
}
function saveIphone() {
    iphone.trashMes();
}

function checkStatus1() {
    nokia.onOff();
    nokia.showStatus();
}

function checkStatus2() {
    iphone.onOff();
    iphone.showStatus();
}

