var h1 = document.querySelector('h1')
var son = prompt('Hohlagan sonni kiriting')
if (son % 3 == 0){
    h1.textContent = "3ga bolinadi"
}else{
    h1.textContent = "3ga bolinmaydi"
}