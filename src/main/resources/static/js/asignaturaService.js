/** Alumnado obj*/
class Asignatura {
	constructor(nombre, curso){
		this.nombre_asignatura = nombre;
		this.curso = curso;
	}
}


function getAllasignatura(callback) {
	
	$.ajax("api/v1/mantenimientoasignatura", {
		type: "GET",
		contentType: "application/json",
		headers: {"Authorization": sessionStorage.getItem('token')},
		success: function(data) {
			var asignatura = JSON.parse(JSON.stringify(data));
			callback(asignatura);
		},
		error: function(request,error) {
            alert('An error occurred attempting to get all asignaturaes');
            // console.log(request, error);
        }	
	});
}

function getasignatura(id, callback) {
	
	$.ajax("api/v1/mantenimientoasignatura/"+id, {
		type: "GET",
		contentType: "application/json",
		headers: {"Authorization": sessionStorage.getItem('token')},
		success: function(data) {
			var asignatura = JSON.parse(JSON.stringify(data));
			callback(asignatura);
		},
		error: function(request,error) {
            alert('An error occurred attempting to get asignatura');
            // console.log(request, error);
        }	
	});
}

function setasignatura(asignatura, callback) {
	
	$.ajax('api/v1/mantenimientoasignatura', {
		type: "POST",
		contentType: "application/json",
		headers: {"Authorization": sessionStorage.getItem('token')},
		data: JSON.stringify(asignatura),
		success: function(data) {
			var o = JSON.parse(JSON.stringify(data));
			//callback(o);
			callback(o);
		},
		error: function(request,error) {
            alert('An error occurred attempting to set a asignatura');
            // console.log(request, error);
        }	
	})

}

function editasignatura(asignatura, callback) {
	
	$.ajax('api/v1/mantenimientoasignatura/'+asignatura.id_asignatura, {
		type: "PUT",
		contentType: "application/json",
		headers: {"Authorization": sessionStorage.getItem('token')},
		data: JSON.stringify(asignatura),
		success: function(data) {
			var o = JSON.parse(JSON.stringify(data));
			//callback(o);
			callback(o);
		},
		error: function(request,error) {
            alert('An error occurred attempting to set a asignatura');
            // console.log(request, error);
        }	
	})

}


function deleteasignatura(id, callback) {
	
	$.ajax("api/v1/mantenimientoasignatura/"+id, {
		type: "DELETE",
		contentType: "application/json",
		headers: {"Authorization": sessionStorage.getItem('token')},
		success: function(data) {
			callback(data);
		},
		error: function(request,error) {
            alert('An error occurred attempting to delete asignatura');
            // console.log(request, error);
        }	
	});
}


/** Testing */
$(function(){

})
