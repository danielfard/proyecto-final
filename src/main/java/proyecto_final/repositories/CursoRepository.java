package proyecto_final.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import proyecto_final.entities.Curso;

@Repository
public interface CursoRepository extends JpaRepository<Curso, Long>{

}
