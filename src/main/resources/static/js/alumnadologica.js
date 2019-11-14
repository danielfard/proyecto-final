$(function() {
	listar(); 
	ActivarCampoOtroTema();
	
	
});
var listaAlumnos = [];

const filterItemsByNombre = query => {
  return listaAlumnos.filter((el) =>
    el.nombre.toLowerCase().indexOf(query.toLowerCase()) > -1
  );
}
function filterItemsByCurso(query, list) {
  return list.filter(function(el) {
	  if(el.curso == null)
		  return true;
	  else
		  return el.curso.etapa.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}
function FiltrarAlumnos(){
	var nombre = $('#searchName').val();
	var curso = $('#searchCurso').val();
	l = filterItemsByNombre(nombre);
	filtered = filterItemsByCurso(curso, l);
	//console.log(l);
	
	$('#u-tabla').empty();
	
	$.each(filtered, function(i, e) {
		addToList(e);
		console.log(e);
	});
}

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
	
	var responsable = {
			
	}
	
	// Seria crear esto mismo pero con los datos del formulario
	var newAlumnado = new Alumnado (nombre,
									apellido1,
									apellido2,
									cedula,
									telefono,
									email,
									0,
									observaciones)
	
	newAlumnado.acudiente = responsable;
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
		listaAlumnos = data;
		$.each(data, function(i, e) {
	        $('#u-tabla').append(
	        	"<tr id='alumn"+e.id+"'>" +
	            "<td>" + e.nombre+ e.apellido_1 +" "+e.apellido_2 + "</td>" +
	            "<td>" + e.curso + "</td>" +
	            //"<td>" + e.acudiente.nombre + "</td>" +
	            "<td><button type='button' class='btn btn-primary' onclick='setData("+e.id+")'>Editar</button>"+"<button type='button' class='btn btn-light' onclick='ClasesAlumnado("+e.id+")'>clases</button>" + "<button type='button' class='btn btn-danger' onclick='eliminarAlumnado("+e.id+")'>Eliminar</button></td>" +
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
            "<td><button type='button' class='btn btn-primary' onclick='setData("+e.id+")'>Editar</button>"+"<button type='button' class='btn btn-light' onclick='ClasesAlumnado("+e.id+")'>clases</button>" + "<button type='button' class='btn btn-danger' onclick='eliminarAlumnado("+e.id+")'>Eliminar</button></td>" +
            "</tr>");
}
function setData(id) {
	
	$("#buttons").html('<button type="button" class="btn btn-success" id="editar" onclick="editarAlumnado('+id+')">Editar</button>')
	
	getAlumnado(id, (e) => {
		$("#nombre_est").val(e.nombre);
		$("#apellido_1_est").val(e.apellido_1);
		$("#apellido_2_est").val(e.apellido_2);
		$("#cedula_est").val(e.cedula);
		$("#telefono_est").val(e.telefono);
		$("#email_est").val(e.email);
		$("#observaciones").val(e.observaciones);
	})
}
function editarAlumnado(id){
	
	
	var nombre = $("#nombre_est").val();
	var apellido1 = $("#apellido_1_est").val();
	var apellido2 = $("#apellido_2_est").val();
	var cedula = $("#cedula_est").val();
	var telefono = $("#telefono_est").val();
	var email = $("#email_est").val();
	//var curso = $("#curso_est").val();
	var observaciones = $("#observaciones").val();
	
	getAlumnado(id, (alumno) => {
		alumno.nombre = nombre;
		alumno.apellido_1 = apellido1;
		alumno.apellido_2 = apellido2;
		alumno.cedula = cedula;
		alumno.telefono = telefono;
		alumno.email = email;
		//alumno.repetidor = repetidor;
		alumno.observaciones = observaciones;
		
		editAlumnado(alumno, (data) => {
			console.log(data);
			$('#u-tabla').empty();
			listar();
		})
	})
	
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
