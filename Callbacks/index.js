// Callback - mozna uzywac funkcji jako argumentu

sum(displayPage, 1, 2);
sum(display, 1, 2);

function sum(callback, x, y) {
    let result = x + y;
    callback(result);
}

function display(result) {
    console.log(result);
}

function displayPage(result){
document.getElementById('MyH1').textContent = result;
}