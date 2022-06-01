
let element = document.getElementById("totalPrecio");
element.innerHTML="Total en precio"; 

//id="Name"  index linea 73
let txtNombre = document.getElementById("Name");
//txtNombre.value="Leche Semidescremada";
//console.log(txtNombre.value);
let txtNumber = document.getElementById("Number");



// traime los elementos del nombre "campo" // todos estan bajo la mista categoria getElementsByClassName va trarer
// varias colecciones del nombre campo  // index linea 73  y 80 class="form-control campo" 
//let campos = document.getElementsByClassName("campo");
//campos[0].value= "Leche descremada deslactosada light=Agua";
//console.log(campos[0].value);
//onsole.log(campos);

//va ir a todas las categorias/elementos que se llamen "campos" y le pone el borde rojo //por estilo 
//campos=una coleccion htmlcollection
//for (let i=0; i<campos.length; i++){
 //   campos[i].style.border="red thin solid";
//}//for

//quiero encontrar todos los spans //getElementsByTagName index. linea 52
//let spans = document.getElementsByTagName("span");
//for (let i=0; i<spans.length; i++){
  //  console.log(spans[i].textContent);
//}//for i 

let tabla = document.getElementById("tablaListaCompras");
//quiero encontrar el cuerpo de la tabla 
let cuerpoTabla = tabla.getElementsByTagName("tbody");

//cuerpoTabla[0].innerHTML =  `<tr>
//<th scope="row">1</th>
          //    <td>Leche descremada</td>
           //   <td>3</td>
             // <td>$ 23.00 </td> 
//</tr>
//`;

//boton Index.html linea agregar  
let agregar = document.getElementById("btnAgregar");

//agregar  onclick 
//addEventListener   (que eventos va realizar, al darle clic agrega los elementos)("click", event)
// event parametro  event=variable
// console.log(txtNombre.value, txtNumber.value) PARA QUE AGRAGE la caantidad de productos 
agregar.addEventListener("click", (event) => {
    let precio = Math.random() * 50;
    let tmp = 
    
    `<tr>
    <th scope="row">1</th>
    <td>${txtNombre.value}</td>
    <td>${txtNumber.value}</td>
    <td>$ ${precio}</td> 
    </tr>`

      console.log(tmp);
     cuerpoTabla[0].innerHTML += tmp;
     txtNumber.value="";
     txtNombre.value="";
     txtNombre.focus();
 }
);