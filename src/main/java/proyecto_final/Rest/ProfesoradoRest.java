package proyecto_final.Rest;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
	@DeleteMapping("/profesorado/{id}")
	public void eliminar(@PathVariable Long id) {
		Profesor prof = profRepository.getOne(id);
		profRepository.delete(prof);
		
	}
}
