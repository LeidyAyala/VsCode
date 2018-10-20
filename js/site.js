/*// debugger;  depuración//
var ar;
console.log(ar);
ar=['h','o','l','a'];
console.log(ar);
console.warn("Longitud del ar:",ar.length,ar);
console.log("Longitud del ar:"+ar.length+ar); 
// el signo mas concatena//
/*
para
comentar 
varias 
lineas

// debugger;/
var miNombre="Leidy Ayala"; //aca se declara un string//
for (var i=0;i<miNombre.length;i++){
    console.log(miNombre[i],"=>",i);
}
// for (declara variables; condicion; instrucciones de cambio) //
// i ++ es i=i+1 | i-- es i=i-1 //

*/

var ej="ejercicio";
var unir='';
for (var i=0;i<ej.length;i++){    
    if(i%2>0){ // variable%2 (modulos) =  residuo es 1 entonces es impar y si el residuo es 0 entonces es par//
        console.log(ej[i].toLowerCase(),"=>",i);
        unir=unir+ej[i].toLowerCase();
    } 
    else{
        console.log(ej[i].toUpperCase(),"=>",i);
        unir=unir+ej[i].toUpperCase();
    }        
}
console.log(unir);

//otra forma de realizarlo://

var ej="ejemplo profe";
var unir='';
for (var i=0;i<ej.length;i++){    
    if(i%2==0){ // variable%2 (modulos) =  residuo es 1 entonces es impar y si el residuo es 0 entonces es par//
        unir=unir+ej[i].toUpperCase();
            } 
    else{
        unir=unir+ej[i].toLowerCase();        
    }   
    console.log(unir[unir.length-1],"=>",i)
}
console.log(unir);

function ispair(x){
    return x%2 == 0 ? true, false;
}

var ej="ejemplo profe";
var unir='';
for (var i=0;i<ej.length;i++){    
    if(isPair(i)){ // variable%2 (modulos) =  residuo es 1 entonces es impar y si el residuo es 0 entonces es par//
        unir=unir+ej[i].toUpperCase();
            } 
    else{
        unir=unir+ej[i].toLowerCase();        
    }   
    console.log(unir[unir.length-1],"=>",i)
}
console.log(unir);





