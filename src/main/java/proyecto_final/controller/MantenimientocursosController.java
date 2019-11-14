package proyecto_final.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
@Controller
public class MantenimientocursosController {
	@GetMapping("/mantenimientocursos")
    public String greeting() {
        return "mantenimientocursos";
    }
}
