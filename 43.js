// HTML Insertaion methods
let a = document.getElementsByTagName("div")[0];
// a.innerHTML = a.innerHTML + "<h1>Hello world</h1>"; //[Direct element include krne k liye]

// DIV M ELEMENT INCLUDE KRNE K LIYE
let div = document.createElement("div");
div.innerHTML = "<h1>Raju</h1>";
// a.appendChild(div);
// a.append(div)//[div kiposition change]
// a.prepend(div)//[div ki position]
// a.before(div)//[y or after innerHTML ko container k bahar batatae or print krte h]
// a.after(div)
// a.replaceWith(div)//[div ko replace krne k liye]