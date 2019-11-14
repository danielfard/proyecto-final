package proyecto_final.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import proyecto_final.entities.Profesor;
@Repository
public interface ProfesorRepository extends JpaRepository<Profesor, Long> {
	
}
