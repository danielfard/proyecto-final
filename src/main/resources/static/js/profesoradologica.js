$(function() {
	listar(); 
    agregarUsuario();
    editarUsuario();
    eliminar();
    ActivarCampo();
});

function listar() {
	$.ajax("./api/v1/profesorado",
    		{
    		contentType: "application/json",
    		dataType:'json',
    		type: "GET",
    		success:function(datos){
    			console.log(datos);
    			 $.each(datos, function(i, e) {
    			        $('#u-tabla').append(
    			        	"<tr>" +
    			            "<td>" + e.nombre + "</td>" +
    			            "<td>" + e.apellido_1 +" "+e.apellido_2 +"</td>" +
    			            "<td>" + e.cedula + "</td>" +
    			            "<td>" + e.telefono + "</td>" +
    			            "<td>" + e.email + "</td>" +
    			            "<td>" + e.titulacion + "</td>" +
    			            "<td><button type='button' class='btn btn-primary'>Editar</button>" + "<button type='button' onclick='ActivarCampo();' class='btn btn-light'>Clases</button>"+ "<button type='button' class='btn btn-danger'>Eliminar</button></td>" +
    			            "</tr>");
    			    });
    			
    		}
    		
    });
   
}

var clic=1;
function ActivarCampoOtroTema(){
	var contenedor = document.getElementById("OtroTema");
	 if(clic==1){

		 contenedor.style.display = "block";

		   clic = clic + 1;

		   } else{

			   contenedor.style.display = "none";    

		    clic = 1;

		   }   
	
	return true;
	}

var click=1;
function ActivarCampo(){
	var contenedor = document.getElementById("horario");
	 if(click==1){

		 contenedor.style.display = "none";

		   click = click + 1;

		   } else{

			   contenedor.style.display = "block";    

		    click = 1;

		   }   
	
	return true;
}

function agregarUsuario() {
    $('form input[type=button]').on('click', function(e) {
        e.preventDefault();
        var nombre = $("input[id=nombre]").val();
        var apellido_1 = $("#apellido_1").val();
        var apellido_2 = $("#apellido_2").val();
        var cedula = $("#cedula").val();
        var telefono = $("#telefono").val();
        var email = $("#email").val();
        var titulacion = $("#titulacion").val();
        
        
        var profesor = {"nombre":nombre,"apellido 1":apellido_1,"apellido 2":apellido_2,"cedula":cedula,"telefono":telefono,"email":email,"titulacion":titulacion };
        $.ajax("./api/v1/profesorado",
        		{
        		contentType: "application/json",
        		dataType:'json',
        		type: "POST",
        		data:JSON.stringify(profesor),
        		success:function(data){
        			$('#u-tabla').append(
        					"<tr>" +
    			            "<td>" + e.nombre + "</td>" +
    			            "<td>" + e.apellido_1 +" "+e.apellido_2 +"</td>" +
    			            "<td>" + e.cedula + "</td>" +
    			            "<td>" + e.telefono + "</td>" +
    			            "<td>" + e.email + "</td>" +
    			            "<td>" + e.titulacion + "</td>" +
    			            "<td><button type='button' class='btn btn-primary'>Editar</button>" + "<button type='button' class='btn btn-danger'>Eliminar</button></td>" +
    			            "</tr>");

        			$("input[id=nombre]").val("");
        			$("#apellido_1").val("");
        			$("#apellido_2").val("");
        			$("#cedula").val("");
        			$("#telefono").val("");
        			$("#email").val("");
        			$("#titulacion").val("");
        		}
        		
        		});
        
        
        
        

    });
}

function editarUsuario() {
    $('#u-tabla').on('click', '.editar', function(e) {
        e.preventDefault();
        var tr = $(this).closest('tr');
        var tdNombre = tr.children("td:nth-child(1)");
        var tdApellidos = tr.children("td:nth-child(2)");
        var tdSexo = tr.children("td:nth-child(3)");
        var tdOpciones = tr.children("td:nth-child(4)");
        var vnombre = tdNombre.html();
        tdNombre.html("<input type='text' id='txtNombre' value='" + vnombre + "'/>");
        var vapellidos = tdApellidos.html();
        tdApellidos.html("<input type='text' id='txtNombre' value='" + +"'/>");
        tdOpciones.html("<a href='#' class='guardar button'>Guardar</a>" +
            "<a href='#' class='eliminar button'>Eliminar</a>");


    });
}


function eliminar() {
    $('#u-tabla').on('click', '.eliminar', function(e) {
        e.preventDefault();
        $(this).closest('tr').remove();
    });
}