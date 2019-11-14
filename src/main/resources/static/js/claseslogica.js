$(function() {
	listar(); 
	ActivarCampoOtroTema();
});

function listar() {
	$.ajax("./api/v1/clases",
    		{
    		contentType: "application/json",
    		dataType:'json',
    		type: "GET",
    		success:function(datos){
    			console.log(datos);
    			 $.each(datos, function(i, e) {
    			        $('#u-tabla').append(
    			        	"<tr>" +
    			            "<td>" + e.curso + "</td>" +
    			            "<td>" + e.asignatura.nombre + "</td>" +
    			            "<td>" + e.horario + "</td>" +
    			            "<td><button type='button' class='btn btn-primary'>Editar</button>"+"<button type='button' class='btn btn-light'>Alumnos</button>" + "<button type='button' class='btn btn-danger'>Eliminar</button></td>" +
    			            "</tr>");
    			    });
    			
    		}
    		
    });
   
}

var clic=1;
function ActivarCampoOtroTema(){
	var contenedor = document.getElementById("OtroTema");
	 if(clic==1){

		 contenedor.style.display = "none";

		   clic = clic + 1;

		   } else{

			   contenedor.style.display = "block";    

		    clic = 1;

		   }   
	
	return true;
	}
