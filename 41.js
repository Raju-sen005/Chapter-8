// // CHAPTER-8
// //[console.log or .dir mein antar]
// console.log(document.getElementsByTagName("span")[0]);
// console.dir(document.getElementsByTagName("span")[0]);
// //[firstChild.nodeName or firstElementChild.nodeName mein antar]
// console.log(document.body.firstChild.nodeName);
// console.log(document.body.firstElementChild.nodeName);

// // innerHTML
// let a = first.innerHTML;
// console.log(a);
// let b = (first.innerHTML = "<i>I am here</i>");//[add krne k liye]
// console.log(b);
// // outerHTML
// let c = first.outerHTML;
// console.log(c);
// let d = (first.outerHTML = (`<div>Raju</div><p>this is the p tag</p>`));//[add krne k liye]
// console.log(d);

let e =(document.body.firstChild.data)
console.log(e)
console.log(document.body.textContent)

