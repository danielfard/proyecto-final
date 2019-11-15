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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import proyecto_final.entities.Alumno;
import proyecto_final.entities.Clase;
import proyecto_final.repositories.ClaseRepository;

@RestController
@RequestMapping("/api/v1")
public class ClasesRest {

	@Autowired
	private ClaseRepository claseRepo;
	
	@GetMapping("/clases")
	public List<Clase> getEstudiantes(){
		return claseRepo.findAll();
	}
	
	@PostMapping("/clases")
	public Clase crearEstudiante(@RequestBody Clase alumno) {
		return claseRepo.save(alumno);
	}
	
	@GetMapping("/clases/{id}")
	public Clase getEstudiante(@PathVariable Long id) {
		Optional<Clase> alumno = claseRepo.findById(id);
		if(!alumno.isPresent()) {
			throw new EntityNotFoundException("No se encontro el alumno con id "+id);
		}
				
		return alumno.get();
	}
	
	@DeleteMapping("/clases/{id}")
	public ResponseEntity<Clase> eliminar(@PathVariable Long id) {
		// Get a Order by id
		Optional<Clase> a = claseRepo.findById(id);
		
		// Evaluate if exists
		if (!a.isPresent()) {
			// Return 404
			return ResponseEntity.notFound().build();
		}
		
		// Remove the Order from database
		claseRepo.delete(a.get());
		
		return ResponseEntity.noContent().build();

		
	}

}
