package proyecto_final;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.EventListener;

import proyecto_final.entities.Acudiente;
import proyecto_final.entities.Alumno;
import proyecto_final.entities.Asignatura;
import proyecto_final.entities.Clase;
import proyecto_final.entities.Curso;
import proyecto_final.entities.Profesor;
import proyecto_final.repositories.AcudienteRepository;
import proyecto_final.repositories.AlumnoRepository;
import proyecto_final.repositories.AsignaturaRepository;
import proyecto_final.repositories.ClaseRepository;
import proyecto_final.repositories.CursoRepository;
import proyecto_final.repositories.ProfesorRepository;

@SpringBootApplication
public class ProyectoFinalApplication {
	
	@Autowired
	private AcudienteRepository acudRepo;
	@Autowired
	private AlumnoRepository alumRepo;
	@Autowired
	private ClaseRepository claseRepo;
	@Autowired
	private AsignaturaRepository asigRepo;
	@Autowired
	private ProfesorRepository profeRepo;
	@Autowired
	private CursoRepository cursoRepo;

	public static void main(String[] args) {
		SpringApplication.run(ProyectoFinalApplication.class, args);
	}

	@EventListener
	public void seed(ContextRefreshedEvent event) {
	    System.out.println("Sedding");
	    
	    Profesor p = new Profesor();
	    p.setNombre("Alfedo");
	    p.setApellido_1("Castro");
	    p.setApellido_2("Rodriguez");
	    p.setCedula(321434123);
	    p.setEmail("el_profeselacome@elprofe.com");
	    p.setTelefono(321232421);
	    p.setTitulacion("Fisico");
	    profeRepo.save(p);
	    
	    Asignatura as = new Asignatura();
	    as.setNombre_asignatura("Naturales");
	    asigRepo.save(as);
	    
	    Clase c = new Clase();
	    c.setAsignatura(as);
	    c.setProfesor(p);
	    claseRepo.save(c);
	    
	    as = new Asignatura();
	    as.setNombre_asignatura("Fisica");
	    asigRepo.save(as);
	    
	    c = new Clase();
	    c.setAsignatura(as);
	    c.setProfesor(p);
	    claseRepo.save(c);
	    
	    Acudiente ac = new Acudiente();
	    ac.setNombre("Juan");
	    ac.setApellido_1("Castro");
	    ac.setApellido_2("lol");
	    ac.setCedula(123443);
	    ac.setTelefono(312464345);
	    ac.setEmail("el_profeselacome@elprofe.com");
	    acudRepo.save(ac);
	    
	    // no hay repositorio para curso
	    Curso curso = new Curso();
	    curso.setEtapa("GRado 11");
	    curso.setNivel((long) 10);
	    cursoRepo.save(curso);
	    
	    Alumno a = new Alumno(c);
	    a.setAcudiente(ac);
	    a.setApellido_1("Castro");
	    a.setApellido_2("Arias");
	    a.setCedula(1234123);
	    a.setCurso(curso);
	    a.setEmail("blabla@bla.com");
	    a.setNombre("Juancho");
	    a.setObservaciones("Se la come entera el prro");
	    a.setRepetidor(true);
	    a.setTelefono(3212321);
	    
	    alumRepo.save(a);
	    
	}
}
