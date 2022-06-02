//variables
let contador = 0;
let costoTotal= 0;


let element = document.getElementById("totalPrecio"); //totalPrrecio Index.com linea 58
element.innerHTML="Total en precio"; 

//id="Name"  index linea 73
let txtNombre = document.getElementById("Name");
//txtNombre.value="Leche Semidescremada";
//console.log(txtNombre.value);
let txtNumber = document.getElementById("Number");

//let precioTotal = document.getElementById("Number") //traer la etiqueta "precioTotal"
let total = document.getElementById("precioTotal"); 



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

function validarNombre(){
     if (txtNombre.value.length <3){
         return false;
     }//if
     return true;
} //validarNombre

function validarCantidad(){
  if(txtNumber.value.length==0){
    return false;
  }//if
  if (isNaN(txtNumber.value)){
    return false;
  }//if
  if (parseFloat(txtNumber.value)<=0){
    return false;
  }//if
  return true; 
}//validarCantidad

//boton Index.html linea agregar  
let agregar = document.getElementById("btnAgregar");

//agregar  onclick 
//addEventListener   (que eventos va realizar, al darle clic agrega los elementos)("click", event)
// event parametro  event=variable
// console.log(txtNombre.value, txtNumber.value) PARA QUE AGRAGE la caantidad de productos 
agregar.addEventListener("click", (event) => {
    event.preventDefault(); 
if((! validarNombre()) || (! validarCantidad())){
  let lista="";
   
  if(!validarNombre()){
   txtNombre.style.border="red thin solid";
   lista+="<li>Se debe escibir un nombre valido</li>";
 }//if
    if(!validarCantidad()){
      txtNumber.style.border="red thin solid";
      lista+="<li>Se debe escibir una cantidad valida</li>";
    }//if
    document.getElementById("alertValidacionesTexto").innerHTML=`Los campos deben ser llenados correctamente
    <ul>${lista}</ul>
    `;
     document.getElementById("alertValidaciones").style.display="block";
     setTimeout (function(){
      document.getElementById("alertValidaciones").style.display="none";
    },
      5000
);
return false;
}//if
txtNumber.style.border="";
txtNombre.style.border="";
document.getElementById("alertValidaciones").style.display="none";


    contador++;
    document.getElementById("contadorProductos").innerHTML = contador;
    //el precio lo redondea con dos digitos 0.00
    let precio = (Math.floor((Math.random() * 50)*100))/100;
    //costo total suma cada vez que agrego una cantidad y va sumando  precio por cantidad  precio * cantidad
    let cantidad = parseFloat(txtNumber.value);
    costoTotal += (precio * cantidad);  
    //uno es la variable $ y el $ otro costotal 
    total.innerHTML = `$ ${costoTotal.toFixed(2)}`;


    let tmp = 
    
    `<tr>
    <th scope="row">${contador}</th>
    <td>${txtNombre.value}</td>
    <td>${txtNumber.value}</td> 
    <td>$ ${precio}</td> 
    </tr>`;

    console.log(tmp);
     cuerpoTabla[0].innerHTML += tmp;
     txtNumber.value="";
     txtNombre.value="";
     txtNombre.focus();
 }
);

//elemento blur: recorre el texto con los espacios
txtNombre.addEventListener("blur", (event)=> {
   event.target.value = event.target.value.trim();
}
);

txtNumber.addEventListener("blur", (event)=> {
  event.target.value = event.target.value.trim();
}
); 