var doc = document.getElementById("screen");
        
var but = document.getElementsByTagName("button");
        
var gotResult = false;
        
function clickHandler() {
    
    if (gotResult == false) {
        
        doc.append(this.innerHTML);
    } else {
        
        doc.innerHTML = this.innerHTML;
        gotResult = false;
    }
    
};

for (var i = 0; i < but.length; i++) {
    but[i].onclick = clickHandler;
}


var reg = /[-+*\/]/ig;

document.getElementById('equal').onclick = function() {
    
    if (doc.innerHTML.match(reg)) {
        
        var result = eval(doc.innerHTML);
        doc.innerHTML = result;
        gotResult = true;
    };
    
};

document.getElementById('clear-button').onclick = function () {
        doc.innerHTML = '';
};
