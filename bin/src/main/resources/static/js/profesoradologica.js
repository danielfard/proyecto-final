$(function() {
	listar(); 
	ActivarCampoOtroTema();
	
	
});
var listaprofesor = [];

const filterItemsByNombre = query => {
  return listaprofesor.filter((el) =>
    el.nombre.toLowerCase().indexOf(query.toLowerCase()) > -1
  );
}
function filterItemsByCedula(query, list) {
  return list.filter(function(el) {
	  if(el.cedula == null)
		  return true;
	  else
		  return el.cedula.etapa.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}
function Filtrarprofesor(){
	var nombre = $('#searchName').val();
	var edula = $('#searchCedula').val();
	l = filterItemsByNombre(nombre);
	filtered = filterItemsByCedula(cedula, l);
	//console.log(l);
	
	$('#u-tabla').empty();
	
	$.each(filtered, function(i, e) {
		addToList(e);
		console.log(e);
	});
}

function agregarprofesor() {
	/* Crear alumnado */
	
	var nombre = $("#nombre").val();
	var apellido1 = $("#apellido_1").val();
	var apellido2 = $("#apellido_2").val();
	var cedula = $("#cedula").val();
	var telefono = $("#telefono").val();
	var email = $("#email").val();
	var titulacion = $("#titulacion").val();
	
	
	// Seria crear esto mismo pero con los datos del formulario
	var newprofesor = new Alumnado (nombre,
									apellido1,
									apellido2,
									cedula,
									telefono,
									email,
									titulacion)
	
	// Se envia a la api
	setprofesor(newprofesor, (data) => {
		console.log(data)
		addToList(data)
	})
}

function eliminarprofesor(id) {
	
	// elimina al alumno con el id
	deleteprofesor(id, (result) => {
		$('#alumn'+id).remove();
	})
}

function listar() {
	
	getAllprofesor((data) => {
		console.log(data);
		listaprofesor = data;
		$.each(data, function(i, e) {
	        $('#u-tabla').append(
	        	"<tr id='alumn"+e.id+"'>" +
	            "<td>" + e.nombre+ "</td>" +
	            "<td>" + e.apellido_1 +" "+e.apellido_2 + "</td>" +
	            "<td>" + e.cedula + "</td>" +
	            "<td>" + e.telefono + "</td>" +
	            "<td>" + e.email + "</td>" +
	            "<td>" + e.titulacion + "</td>" +
	            "<td><button type='button' class='btn btn-primary' onclick='setData("+e.id+")'>Editar</button>"+"<button type='button' class='btn btn-light' onclick='Cedulaprofesor("+e.id+")'>clases</button>" + "<button type='button' class='btn btn-danger' onclick='eliminarprofesor("+e.id+")'>Eliminar</button></td>" +
	            "</tr>");
	    });
		
	})
	
	
   
}

// Para agregar al nuevo alumno a la lista
function addToList(e){
	$('#u-tabla').append(
        	"<tr id='alumn" + e.id+ "'>" +
            "<td>" + e.nombre+"</td>"+ 
            "<td>" +e.apellido_1 +" "+e.apellido_2 + "</td>" +
            "<td>" + e.cedula + "</td>" +
            "<td>" + e.telefono + "</td>" +
            "<td>" + e.email + "</td>" +
            "<td>" + e.titulacion + "</td>" +
            "<td><button type='button' class='btn btn-primary' onclick='setData("+e.id+")'>Editar</button>"+"<button type='button' class='btn btn-light' onclick='Clasesprofesor("+e.id+")'>clases</button>" + "<button type='button' class='btn btn-danger' onclick='eliminarprofesor("+e.id+")'>Eliminar</button></td>" +
            "</tr>");
}
function setData(id) {
	
	$("#buttons").html('<button type="button" class="btn btn-success" id="editar" onclick="editarprofesor('+id+')">Editar</button>')
	
	getprofesor(id, (e) => {
		$("#nombre").val(e.nombre);
		$("#apellido_1").val(e.apellido_1);
		$("#apellido_2").val(e.apellido_2);
		$("#cedula").val(e.cedula);
		$("#telefono").val(e.telefono);
		$("#email").val(e.email);
		$("#titulacion").val(e.titulacion);
	})
}
function editarprofesor(id){
	
	
	var nombre = $("#nombre").val();
	var apellido1 = $("#apellido_1").val();
	var apellido2 = $("#apellido_2").val();
	var cedula = $("#cedula").val();
	var telefono = $("#telefono").val();
	var email = $("#email").val();
	var titulacion = $("#titulacion").val();
	
	getprofesor(id, (profesor) => {
		profesor.nombre = nombre;
		profesor.apellido_1 = apellido1;
		profesor.apellido_2 = apellido2;
		profesor.cedula = cedula;
		profesor.telefono = telefono;
		profesor.email = email;
		profesor.titulacion = titulacion;
		
		editprofesor(profesor, (data) => {
			console.log(data);
			$('#u-tabla').empty();
			listar();
		})
	})
	
}
function Cedulaprofesor(id){
	getprofesor(id, (result) => {
		console.log(result.cedula)
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