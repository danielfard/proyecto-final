/** curso obj*/
class Curso {
	constructor(etapa, nivel){
		this.etapa = etapa;
		this.nivel = nivel;
		
	}
}


function getAllcurso(callback) {
	
	$.ajax("api/v1/mantenimientocursos", {
		type: "GET",
		contentType: "application/json",
		headers: {"Authorization": sessionStorage.getItem('token')},
		success: function(data) {
			var cursos = JSON.parse(JSON.stringify(data));
			callback(cursos);
		},
		error: function(request,error) {
            alert('An error occurred attempting to get all alumnados');
            // console.log(request, error);
        }	
	});
}

function getcurso(id, callback) {
	
	$.ajax("api/v1/mantenimientocursos/"+id, {
		type: "GET",
		contentType: "application/json",
		headers: {"Authorization": sessionStorage.getItem('token')},
		success: function(data) {
			var curso = JSON.parse(JSON.stringify(data));
			callback(curso);
		},
		error: function(request,error) {
            alert('An error occurred attempting to get a book');
            // console.log(request, error);
        }	
	});
}

function setcurso(curso, callback) {
	
	$.ajax('api/v1/mantenimientocursos', {
		type: "POST",
		contentType: "application/json",
		headers: {"Authorization": sessionStorage.getItem('token')},
		data: JSON.stringify(curso),
		success: function(data) {
			var o = JSON.parse(JSON.stringify(data));
			//callback(o);
			callback(o);
		},
		error: function(request,error) {
            alert('An error occurred attempting to set a alumno');
            // console.log(request, error);
        }	
	})

}

function editcurso(curso, callback) {
	
	$.ajax('api/v1/mantenimientocursos/'+curso.id_curso, {
		type: "PUT",
		contentType: "application/json",
		headers: {"Authorization": sessionStorage.getItem('token')},
		data: JSON.stringify(curso),
		success: function(data) {
			var o = JSON.parse(JSON.stringify(data));
			//callback(o);
			callback(o);
		},
		error: function(request,error) {
            alert('An error occurred attempting to set a alumno');
            // console.log(request, error);
        }	
	})

}


function deletecurso(id, callback) {
	
	$.ajax("api/v1/mantenimientocursos/"+id, {
		type: "DELETE",
		contentType: "application/json",
		headers: {"Authorization": sessionStorage.getItem('token')},
		success: function(data) {
			callback(data);
		},
		error: function(request,error) {
            alert('An error occurred attempting to delete');
            // console.log(request, error);
        }	
	});
}


/** Testing */
$(function(){
	
	getAllcurso((curso) => {
		console.log(curso);
	})
			
})
