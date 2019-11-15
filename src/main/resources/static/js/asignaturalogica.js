$(function() {
	listar(); 
	ActivarCampoOtroTema();
	
	
});
var listaasignatura = [];

const filterItemsByNombre = query => {
  return listaasignatura.filter((el) =>
    el.nombre.toLowerCase().indexOf(query.toLowerCase()) > -1
  );
}
function filterItemsByasignatura(query, list) {
  return list.filter(function(el) {
	  if(el.curso == null)
		  return true;
	  else
		  return el.curso.etapa.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}
function Filtrarasignatura(){
	var nombre = $('#searchName').val();
	var curso = $('#searchCurso').val();
	l = filterItemsByNombre(nombre);
	filtered = filterItemsByasignatura(curso, l);
	//console.log(l);
	
	$('#u-tabla').empty();
	
	$.each(filtered, function(i, e) {
		addToList(e);
		console.log(e);
	});
}

function agregarasignatura() {
	/* Crear alumnado */
	
	var nombre = $("#nombre").val();
	var curso = $("#curso").val();
	
	
	// Seria crear esto mismo pero con los datos del formulario
	var newasignatura = new Asignatura (nombre)
	
	// Se envia a la api
	setasignatura(newasignatura, (data) => {
		console.log(data)
		addToList(data)
	})
}

function eliminarasignatura(id) {
	
	// elimina al alumno con el id
	deleteasignatura(id, (result) => {
		$('#alumn'+id).remove();
	})
}

function listar() {
	
	getAllasignatura((data) => {
		console.log(data);
		listaasignatura = data;
		$.each(data, function(i, e) {
	        $('#u-tabla').append(
	        	"<tr id='alumn"+e.id_asignatura+"'>" +
	            "<td>" + e.nombre_asignatura+ "</td>" +
	            "<td>" + e.curso+"</td>" +
	            "<td><button type='button' class='btn btn-primary' onclick='setData("+e.id_asignatura+")'>Editar</button>" + "<button type='button' class='btn btn-danger' onclick='eliminarasignatura("+e.id_asignatura+")'>Eliminar</button></td>" +
	            "</tr>");
	    });
		
	})
	
	
	/*getAllcurso((data) => {
		$.each(data, function(i, e) {
	        $('#cursos').append(
	        	"<tr id='alumn"+e.id_asignatura+"'>" +
	            "</tr>");
	    });
	})
   */
}

// Para agregar al nuevo alumno a la lista
function addToList(e){
	$('#u-tabla').append(
        	"<tr id='alumn" + e.id_asignatura+ "'>" +
            "<td>" + e.nombre_asignatura+"</td>"+ 
            "<td>" +e.curso +"</td>" +
            "<td><button type='button' class='btn btn-primary' onclick='setData("+e.id_asignatura+")'>Editar</button>"+ "<button type='button' class='btn btn-danger' onclick='eliminarasignatura("+e.id_asignatura+")'>Eliminar</button></td>" +
            "</tr>");
}
function setData(id) {
	
	$("#buttons").html('<button type="button" class="btn btn-success" id="editar" onclick="editarasignatura('+id+')">Editar</button>')
	
	getasignatura(id, (e) => {
		$("#nombre").val(e.nombre_asignatura);
		$("#curso").val(e.curso);
	})
}
function editarasignatura(id){
	
	
	var nombre = $("#nombre").val();
	var curso = $("#curso").val();
	
	getasignatura(id, (asignatura) => {
		asignatura.nombre_asignatura = nombre;
		//asignatura.curso = curso;
		
		
		editasignatura(asignatura, (data) => {
			console.log(data);
			$('#u-tabla').empty();
			listar();
		})
	})
	
}
function Cursoasignatura(id){
	getasignatura(id, (result) => {
		console.log(result.curso)
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