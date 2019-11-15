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
import proyecto_final.entities.Profesor;
import proyecto_final.repositories.ProfesorRepository;

@RestController
@RequestMapping("/api/v1")
public class ProfesoradoRest {
    @Autowired
	private ProfesorRepository profRepository; 
	
	
	@GetMapping("/profesorado")
	public List<Profesor> getEstudiantes(){
		return profRepository.findAll();
	}
	
	@PostMapping("/profesorado")
	public Profesor crearEstudiante(@RequestBody Profesor profesor) {
		return profRepository.save(profesor);
	}
	
	@GetMapping("/profesorado/{id}")
	public Profesor getEstudiante(@PathVariable Long id) {
		Optional<Profesor> profesor = profRepository.findById(id);
		if(!profesor.isPresent()) {
			throw new EntityNotFoundException("No se encontro el profesor con id "+id);
		}
				
		return profesor.get();
	}

	@PutMapping("/profesorado")
	public Profesor updateEstudiante(@RequestBody Profesor profesor) {
		return profRepository.save(profesor);
	}
	@PutMapping("/profesorado/{id}")
	public ResponseEntity<Profesor> updateProduct(@PathVariable Long id, @RequestBody Profesor p) {
		// Get a product by id
		Optional<Profesor> a = profRepository.findById(id);
		
		// Evaluate if exists
		if (!a.isPresent()) {
			// Return 404
			return ResponseEntity.notFound().build();
		}
		
		a.get().setApellido_1(p.getApellido_1());
		a.get().setApellido_2(p.getApellido_2());
		a.get().setCedula(p.getCedula());
		a.get().setEmail(p.getEmail());
		a.get().setNombre(p.getNombre());
		a.get().setTelefono(p.getTelefono());
		a.get().setTitulacion(p.getTitulacion());
		
		return ResponseEntity.ok(profRepository.save(a.get()));
	}
	
	@DeleteMapping("/profesorado/{id}")
	public void eliminar(@PathVariable Long id) {
		Profesor prof = profRepository.getOne(id);
		profRepository.delete(prof);
		
	}
}
