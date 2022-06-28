

function changeName() {
    let currentName = document.getElementById('name').innerText;
    let newName;
    let namechange = prompt("Type your name below:", `${currentName}`);
    newName = namechange;
    if ((newName == "") || (newName == undefined)){
        return;
    } else
        document.getElementById('name').innerText = newName;
}



function connect(element) {
    var add = document.getElementById(`${element.id.slice(3)}`);
    var req = document.getElementById('req');
    var conns = document.getElementById('conns');
    add.remove();
    req.innerText--;
    conns.innerText++;
    if (req.innerText == 0) {
        var none = document.getElementById('noMore');
        none.innerText = "You have no more connections pending...";
    }
    if (conns.innerText == 666) {
        conns.setAttribute("style", "background-color: red; color: orange; border: 2px solid yellow;");
    }
}
function decline(element) {
    var decl = document.getElementById(`${element.id.slice(3)}`);
    var req = document.getElementById('req');
    decl.remove();
    req.innerText--;
    if (req.innerText == 0) {
        var none = document.getElementById('noMore');
        none.innerText = "You have no more connections pending...";   
    }
}