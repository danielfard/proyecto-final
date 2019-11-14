$(function() {
	listar(); 
	ActivarCampoOtroTema();
	
	
});

function agregarAlumnado() {
	/* Crear alumnado */
	
	var nombre = $("#nombre_est").val();
	var apellido1 = $("#apellido_1_est").val();
	var apellido2 = $("#apellido_2_est").val();
	var cedula = $("#cedula_est").val();
	var telefono = $("#telefono_est").val();
	var email = $("#email_est").val();
	//var curso = $("#curso_est").val();
	var observaciones = $("#observaciones").val();
	
	// Seria crear esto mismo pero con los datos del formulario
	var newAlumnado = new Alumnado (nombre,
									apellido1,
									apellido2,
									cedula,
									telefono,
									email,
									0,
									observaciones)
	
	// Se envia a la api
	setAlumnado(newAlumnado, (data) => {
		console.log(data)
		addToList(data)
	})
}

function eliminarAlumnado(id) {
	
	// elimina al alumno con el id
	deleteAlumnado(id, (result) => {
		$('#alumn'+id).remove();
	})
}

function listar() {
	
	getAllAlumnados((data) => {
		console.log(data);
		$.each(data, function(i, e) {
	        $('#u-tabla').append(
	        	"<tr id='alumn"+e.id+"'>" +
	            "<td>" + e.nombre+ e.apellido_1 +" "+e.apellido_2 + "</td>" +
	            "<td>" + e.curso + "</td>" +
	            //"<td>" + e.acudiente.nombre + "</td>" +
	            "<td><button type='button' class='btn btn-primary'>Editar</button>"+"<button type='button' class='btn btn-light' onclick='ClasesAlumnado("+e.id+")'>clases</button>" + "<button type='button' class='btn btn-danger' onclick='eliminarAlumnado("+e.id+")'>Eliminar</button></td>" +
	            "</tr>");
	    });
		
	})
	
	
   
}

// Para agregar al nuevo alumno a la lista
function addToList(e) {
	$('#u-tabla').append(
        	"<tr id='alumn"+e.id+"'>" +
            "<td>" + e.nombre+ e.apellido_1 +" "+e.apellido_2 + "</td>" +
            "<td>" + e.curso + "</td>" +
            //"<td>" + e.acudiente.nombre + "</td>" +
            "<td><button type='button' class='btn btn-primary'>Editar</button>"+"<button type='button' class='btn btn-light' onclick='ClasesAlumnado("+e.id+")'>clases</button>" + "<button type='button' class='btn btn-danger' onclick='eliminarAlumnado("+e.id+")'>Eliminar</button></td>" +
            "</tr>");
}

function ClasesAlumnado(id){
	getAlumnado(id, (result) => {
		console.log(result.clases)
	})
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
