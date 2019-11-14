package proyecto_final.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import proyecto_final.entities.Acudiente;
@Repository
public interface AcudienteRepository extends JpaRepository<Acudiente, Long> {

}
