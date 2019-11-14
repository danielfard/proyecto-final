/** Alumnado obj*/
class Alumnado {
	constructor(nombre, apellido_1, apellido_2, cedula, telefono, email, repetidor, /*fecha_alta, fecha_baja,*/ observaciones){
		this.nombre = nombre;
		this.apellido_1 = apellido_1;
		this.apellido_2 = apellido_2;
		this.cedula = cedula;
		this.telefono = telefono;
		this.email = email;
		this.repetidor = repetidor;
		//this.fecha_alta = fecha_alta;
		//this.fecha_baja = fecha_baja;
		this.observaciones = observaciones;
	}
}


function getAllAlumnados(callback) {
	
	$.ajax("api/v1/alumnado", {
		type: "GET",
		contentType: "application/json",
		//headers: {"Authorization": sessionStorage.getItem('token')},
		success: function(data) {
			var alumnados = JSON.parse(JSON.stringify(data));
			callback(alumnados);
		},
		error: function(request,error) {
            alert('An error occurred attempting to get all alumnados');
            // console.log(request, error);
        }	
	});
}

function getAlumnado(id, callback) {
	
	$.ajax("api/v1/alumnado/"+id, {
		type: "GET",
		contentType: "application/json",
		//headers: {"Authorization": sessionStorage.getItem('token')},
		success: function(data) {
			var alumnado = JSON.parse(JSON.stringify(data));
			callback(alumnado);
		},
		error: function(request,error) {
            alert('An error occurred attempting to get a book');
            // console.log(request, error);
        }	
	});
}

function setAlumnado(alumando, callback) {
	
	$.ajax('api/v1/alumnado', {
		type: "POST",
		contentType: "application/json",
		//headers: {"Authorization": sessionStorage.getItem('token')},
		data: JSON.stringify(alumando),
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

function editAlumnado(alumando, callback) {
	
	$.ajax('api/v1/alumnado/'+alumando.id, {
		type: "PUT",
		contentType: "application/json",
		//headers: {"Authorization": sessionStorage.getItem('token')},
		data: JSON.stringify(alumando),
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


function deleteAlumnado(id, callback) {
	
	$.ajax("api/v1/alumnado/"+id, {
		type: "DELETE",
		contentType: "application/json",
		//headers: {"Authorization": sessionStorage.getItem('token')},
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
	
	getAllAlumnados((alumnados) => {
		console.log(alumnados);
	})
	
	/*var sea = new Search("In", "B", "");
	searchBooks(sea, (books) =>{
		console.log(books);
	})*/
			
})
