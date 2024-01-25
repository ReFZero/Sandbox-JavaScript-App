const newH1 = document.createElement("h1");
newH1.textContent = "Hello World";
newH1.id = "myH1";
newH1.style.color = "grey";
newH1.style.textAlign = "center";
// document.body.prepend(newH1); zostanie dodany na początku
// document.body.append(newH1); zostanie dodany na końcu

document.getElementById("box2").append(newH1); // dodaje element do rodzica

// const box1 = document.getElementById("box1");
// document.body.insertBefore(newH1, box1); // dodaje pomiedzy inne elementy

// W sytuacji gdy nie ma id

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[1]);


// document.getElementById("box2").removeChild(newH1);