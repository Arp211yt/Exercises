//crear usuario 

let ingresaruser = prompt("Crea un usuario")

//Ingresar precio del pedido

let costodelpedido = prompt("Hola, ingresa el precio de tu orden")

//Cantidad de unidades del producto

let cantidad = prompt("Cuantas unidades desea llevar??")

//costo total

let preciototal = costodelpedido * cantidad 

alert(`El costo total de tu pedido es de: $${preciototal}`)

//Ingresar descuento

let descuento = prompt("¿¿tiene un descuento?? Ingrese su descuento")

let disconuntprice = preciototal * 0.10 

if(descuento < 0 || descuento > 50){
    alert("Descuento no puede ser mayor a 50 o menor que 0.")
} else{

    if(preciototal>30000){
        alert()
    }
    
}
   