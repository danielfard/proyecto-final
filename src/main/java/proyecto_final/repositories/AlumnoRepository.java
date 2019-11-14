package proyecto_final.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import proyecto_final.entities.Alumno;
@Repository
public interface AlumnoRepository extends JpaRepository<Alumno, Long> {
	
}
