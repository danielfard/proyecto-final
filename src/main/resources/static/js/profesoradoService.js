/** Alumnado obj*/
class profesor {
	constructor(nombre, apellido_1, apellido_2, cedula, telefono, email,titulacion){
		this.nombre = nombre;
		this.apellido_1 = apellido_1;
		this.apellido_2 = apellido_2;
		this.cedula = cedula;
		this.telefono = telefono;
		this.email = email;
		this.titulacion=titulacion;
	}
}


function getAllprofesor(callback) {
	
	$.ajax("api/v1/profesorado", {
		type: "GET",
		contentType: "application/json",
		headers: {"Authorization": sessionStorage.getItem('token')},
		success: function(data) {
			var profesorado = JSON.parse(JSON.stringify(data));
			callback(profesorado);
		},
		error: function(request,error) {
            alert('An error occurred attempting to get all profesores');
            // console.log(request, error);
        }	
	});
}

function getprofesor(id, callback) {
	
	$.ajax("api/v1/profesorado/"+id, {
		type: "GET",
		contentType: "application/json",
		headers: {"Authorization": sessionStorage.getItem('token')},
		success: function(data) {
			var profesorado = JSON.parse(JSON.stringify(data));
			callback(profesorado);
		},
		error: function(request,error) {
            alert('An error occurred attempting to get profesor');
            // console.log(request, error);
        }	
	});
}

function setprofesor(profesorado, callback) {
	
	$.ajax('api/v1/profesorado', {
		type: "POST",
		contentType: "application/json",
		headers: {"Authorization": sessionStorage.getItem('token')},
		data: JSON.stringify(profesorado),
		success: function(data) {
			var o = JSON.parse(JSON.stringify(data));
			//callback(o);
			callback(o);
		},
		error: function(request,error) {
            alert('An error occurred attempting to set a profesor');
            // console.log(request, error);
        }	
	})

}

function editprofesor(profesor, callback) {
	
	$.ajax('api/v1/profesorado/'+profesor.id, {
		type: "PUT",
		contentType: "application/json",
		headers: {"Authorization": sessionStorage.getItem('token')},
		data: JSON.stringify(profesor),
		success: function(data) {
			var o = JSON.parse(JSON.stringify(data));
			//callback(o);
			callback(o);
		},
		error: function(request,error) {
            alert('An error occurred attempting to set a profesor');
            // console.log(request, error);
        }	
	})

}


function deleteprofesor(id, callback) {
	
	$.ajax("api/v1/profesorado/"+id, {
		type: "DELETE",
		contentType: "application/json",
		headers: {"Authorization": sessionStorage.getItem('token')},
		success: function(data) {
			callback(data);
		},
		error: function(request,error) {
            alert('An error occurred attempting to delete profesor');
            // console.log(request, error);
        }	
	});
}


/** Testing */
$(function(){
	
			
})
