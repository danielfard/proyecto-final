package proyecto_final.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import proyecto_final.entities.Asignatura;
@Repository
public interface AsignaturaRepository extends JpaRepository<Asignatura, Long> {

}
