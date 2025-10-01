
let sumbit = document.getElementById("sumbit")
let parra = document.getElementById("parra")

sumbit.addEventListener("click", function (){
  let produc = document.getElementById("produc").value;
  let cantidad = document.getElementById("cantidad").value;
  if (produc==1){}
  parra.innerText = produc*cantidad;
})