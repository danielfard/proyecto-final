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
import proyecto_final.entities.Asignatura;
import proyecto_final.repositories.AlumnoRepository;
import proyecto_final.repositories.AsignaturaRepository;

@RestController
@RequestMapping("/api/v1")
public class AsignaturaRest {
	@Autowired
	private AsignaturaRepository asigRepository; 
	
	
	@GetMapping("/mantenimientoasignatura")
	public List<Asignatura> getasignatura(){
		return asigRepository.findAll();
	}
	
	@PostMapping("/mantenimientoasignatura")
	public Asignatura crearasignatura(@RequestBody Asignatura asignatura) {
		return asigRepository.save(asignatura);
	}
	
	@GetMapping("/mantenimientoasignatura/{id}")
	public Asignatura getasignatura(@PathVariable Long id) {
		Optional<Asignatura> asignatura = asigRepository.findById(id);
		if(!asignatura.isPresent()) {
			throw new EntityNotFoundException("No se encontro el alumno con id "+id);
		}
				
		return asignatura.get();
	}

	@PutMapping("/mantenimientoasignatura/{id}")
	public ResponseEntity<Asignatura> updateProduct(@PathVariable Long id, @RequestBody Asignatura asignatura) {
		// Get a product by id
		Optional<Asignatura> a = asigRepository.findById(id);
		
		// Evaluate if exists
		if (!a.isPresent()) {
			// Return 404
			return ResponseEntity.notFound().build();
		}
		
		a.get().setClases(asignatura.getClases());
		a.get().setCurso(asignatura.getCurso());
		a.get().setNombre_asignatura(asignatura.getNombre_asignatura());
		
		
		return ResponseEntity.ok(asigRepository.save(a.get()));
	}


	
	@DeleteMapping("/mantenimientoasignatura/{id}")
	public ResponseEntity<Asignatura> eliminar(@PathVariable Long id) {
		// Get a Order by id
		Optional<Asignatura> a = asigRepository.findById(id);
		
		// Evaluate if exists
		if (!a.isPresent()) {
			// Return 404
			return ResponseEntity.notFound().build();
		}
		
		// Remove the Order from database
		asigRepository.delete(a.get());
		
		return ResponseEntity.noContent().build();

		
	}
}
