$(function() {
	listar(); 
	ActivarCampoOtroTema();
	
	
});
var listacursos = [];

const filterItemsByNivel = query => {
  return listacursos.filter((el) =>
    el.nivel.toLowerCase().indexOf(query.toLowerCase()) > -1
  );
}
function filterItemsByEtapa(query, list) {
  return list.filter(function(el) {
	  if(el.etapa == null)
		  return true;
	  else
		  return el.curso.etapa.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}
function Filtrarcurso(){
	var nivel = $('#searchNivel').val();
	var etapa = $('#searchEtapa').val();
	l = filterItemsByNivel(nivel);
	filtered = filterItemsByEtapa(etapa, l);
	//console.log(l);
	
	$('#u-tabla').empty();
	
	$.each(filtered, function(i, e) {
		addToList(e);
		console.log(e);
	});
}

function agregarcurso() {
	/* Crear alumnado */
	
	var nivel = $("#nivel").val();
	var etapa = $("#etapa").val();
	

	// Seria crear esto mismo pero con los datos del formulario
	var newcurso = new Curso (etapa, nivel)
	
	// Se envia a la api
	setcurso(newcurso, (data) => {
		console.log(data)
		addToList(data)
	})
}

function eliminarcurso(id) {
	console.log(id)
	// elimina al alumno con el id
	deletecurso(id, (result) => {
		$('#alumn'+id).remove();
	})
}

function listar() {
	
	getAllcurso((data) => {
		console.log(data);
		listaAlumnos = data;
		$.each(data, function(i, e) {
	        $('#u-tabla').append(
	        	"<tr id='alumn"+e.id_curso+"'>" +
	        	"<td>" + e.etapa+ "</td>" +
	            "<td>" + e.nivel+ "</td>" +
	            "<td><button type='button' class='btn btn-primary' onclick='setData("+e.id_curso+")'>Editar</button>"+"<button type='button' class='btn btn-danger' onclick='eliminarcurso("+e.id_curso+")'>Eliminar</button></td>" +
	            "</tr>");
	    });
		
	})
	
	
   
}

// Para agregar al nuevo alumno a la lista
function addToList(e) {
	$('#u-tabla').append(
        	"<tr id='alumn"+e.id+"'>" +
            "<td>" + e.etapa +"</td>" +
            "<td>" + e.nivel + "</td>" +
            "<td><button type='button' class='btn btn-primary' onclick='setData("+e.id_curso+")'>Editar</button>"+ "<button type='button' class='btn btn-danger' onclick='eliminarcurso("+e.id_curso+")'>Eliminar</button></td>" +
            "</tr>");
}
function setData(id) {
	
	$("#buttons").html('<button type="button" class="btn btn-success" id="editar" onclick="editarcurso('+id+')">Editar</button>')
	
	getcurso(id, (e) => {
		$("#nivel").val(e.nivel);
		$("#etapa").val(e.etapa);
		
	})
}
function editarcurso(id){
	
	
	var nivel = $("#nivel").val();
	var etapa = $("#etapa").val();
	
	
	getcurso(id, (curso) => {
		curso.nivel = nivel;
		curso.etapa = etapa;
		
		
		editcurso(curso, (data) => {
			console.log(data);
			$('#u-tabla').empty();
			listar();
		})
	})
	
}
function Clasescurso(id){
	getcurso(id, (result) => {
		console.log(result.etapa)
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
