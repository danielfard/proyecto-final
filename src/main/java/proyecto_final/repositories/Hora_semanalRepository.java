package proyecto_final.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import proyecto_final.entities.Clase;
import proyecto_final.entities.Hora_semanal;

@Repository
public interface Hora_semanalRepository extends JpaRepository<Hora_semanal, Long> {

}
