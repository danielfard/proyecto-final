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
import proyecto_final.entities.Curso;
import proyecto_final.repositories.CursoRepository;

@RestController
@RequestMapping("/api/v1")

public class CursoRest {
		@Autowired
		private CursoRepository cursoRepository; 
		
		
		@GetMapping("/mantenimientocursos")
		public List<Curso> getEstudiantes(){
			return cursoRepository.findAll();
		}
		
		@PostMapping("/mantenimientocursos")
		public Curso crearEstudiante(@RequestBody Curso curso) {
			return cursoRepository.save(curso);
		}
		
		@GetMapping("/mantenimientocursos/{id}")
		public Curso getEstudiante(@PathVariable Long id) {
			Optional<Curso> cursoesor = cursoRepository.findById(id);
			if(!cursoesor.isPresent()) {
				throw new EntityNotFoundException("No se encontro el curso con id "+id);
			}
					
			return cursoesor.get();
		}

		@PutMapping("/mantenimientocursos/{id}")
		public ResponseEntity<Curso> updateEstudiante(@PathVariable Long id, @RequestBody Curso curso) {
			// Get a product by id
			Optional<Curso> a = cursoRepository.findById(id);
			
			// Evaluate if exists
			if (!a.isPresent()) {
				// Return 404
				return ResponseEntity.notFound().build();
			}
			
			a.get().setEtapa(curso.getEtapa());
			a.get().setNivel(curso.getNivel());
			a.get().setAlumnos(curso.getAlumnos());
			a.get().setAsignaturas(curso.getAsignaturas());
			
			return ResponseEntity.ok(cursoRepository.save(a.get()));
		}
		@DeleteMapping("/mantenimientocursos/{id}")
		public void eliminar(@PathVariable Long id) {
			Curso curso = cursoRepository.getOne(id);
			cursoRepository.delete(curso);
			
		}
}
