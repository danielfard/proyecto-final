package proyecto_final.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MantenimientoasignaturaController {
	@GetMapping("/mantenimientoasignatura")
    public String greeting() {
        return "mantenimientoasignatura";
    }
}
