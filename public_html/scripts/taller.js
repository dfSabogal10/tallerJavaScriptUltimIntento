
 function calcular() 
 {
    var x, y;
    x = document.getElementById("valor1").value;
    y = document.getElementById("valor2").value;
    if (isNaN(x)) 
    {
        document.getElementById("msj").innerHTML = "<div class=\"alert alert-danger\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>El valor 1 debe ser un número</div>";
    }
    else if (isNaN(y)) 
    {
        document.getElementById("msj").innerHTML = "<div class=\"alert alert-danger\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>El valor 2 debe ser un número</div>";
    }
    else
    {
        var rta = parseInt(x) + parseInt(y);
        document.getElementById("msj").innerHTML = "<div class=\"alert alert-success\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>La respuesta es: "+ rta +"</div>";
    }
}
 function concatenar()
 {
      var x, y;
      x = document.getElementById("valor1").value;
      y = document.getElementById("valor2").value;
      var rta = x + y;
      document.getElementById("msj").innerHTML = "<div class=\"alert alert-success\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>La respuesta es: "+ rta +"</div>";   
 }
function ordenar()
 {
      var x, y;
      x = document.getElementById("valor1").value;
      y = document.getElementById("valor2").value;
      var cadenas=[x,y];
      cadenas.sort();
      document.getElementById("msj").innerHTML = "<div class=\"alert alert-success\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>La respuesta es: " + "{"+ cadenas[0] + " ," + cadenas[1] + "}"+ "</div>";
 }


