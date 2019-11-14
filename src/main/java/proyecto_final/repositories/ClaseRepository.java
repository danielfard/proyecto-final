package proyecto_final.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import proyecto_final.entities.Clase;
@Repository
public interface ClaseRepository extends JpaRepository<Clase, Long> {

}
