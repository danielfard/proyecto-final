package proyecto_final.Rest;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import proyecto_final.entities.Alumno;
import proyecto_final.repositories.AlumnoRepository;

@RestController
@RequestMapping("/api/v1")
public class AlumnadoRest {
	@Autowired
	private AlumnoRepository alumRepository; 
	
	
	@GetMapping("/alumnado")
	public List<Alumno> getEstudiantes(){
		return alumRepository.findAll();
	}
	
	@PostMapping("/alumnado")
	public Alumno crearEstudiante(@RequestBody Alumno alumno) {
		return alumRepository.save(alumno);
	}
	
	@GetMapping("/alumnado/{id}")
	public Alumno getEstudiante(@PathVariable Long id) {
		Optional<Alumno> alumno = alumRepository.findById(id);
		if(!alumno.isPresent()) {
			throw new EntityNotFoundException("No se encontro el alumno con id "+id);
		}
				
		return alumno.get();
	}

	@PutMapping("/alumnado/{id}")
	public ResponseEntity<Alumno> updateProduct(@PathVariable Long id, @RequestBody Alumno alumn) {
		// Get a product by id
		Optional<Alumno> a = alumRepository.findById(id);
		
		// Evaluate if exists
		if (!a.isPresent()) {
			// Return 404
			return ResponseEntity.notFound().build();
		}
		
		a.get().setAcudiente(alumn.getAcudiente());
		a.get().setApellido_1(alumn.getApellido_1());
		a.get().setApellido_2(alumn.getApellido_2());
		a.get().setCedula(alumn.getCedula());
		a.get().setClases(alumn.getClases());
		a.get().setCurso(alumn.getCurso());
		a.get().setEmail(alumn.getEmail());
		a.get().setNombre(alumn.getNombre());
		a.get().setObservaciones(alumn.getObservaciones());
		a.get().setRepetidor(alumn.getRepetidor());
		a.get().setTelefono(alumn.getTelefono());
		
		return ResponseEntity.ok(alumRepository.save(a.get()));
	}


	
	@DeleteMapping("/alumnado/{id}")
	public ResponseEntity<Alumno> eliminar(@PathVariable Long id) {
		// Get a Order by id
		Optional<Alumno> a = alumRepository.findById(id);
		
		// Evaluate if exists
		if (!a.isPresent()) {
			// Return 404
			return ResponseEntity.notFound().build();
		}
		
		// Remove the Order from database
		alumRepository.delete(a.get());
		
		return ResponseEntity.noContent().build();

		
	}
}
