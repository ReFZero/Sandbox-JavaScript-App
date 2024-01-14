// Mozna zmienic kolor tła poprzez uzycie funkcji w HTML 
// <button onclick= "changeColor();"...
function changeColor() {
    let color = document.getElementById('first-color').value;
    document.body.style.backgroundColor = color;
}
// Rowniez mozna zrobic to przy uzyciu eventListenera 