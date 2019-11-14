package proyecto_final.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RegistrarseController {
	@GetMapping("/registrarse")
    public String greeting() {
        return "registrarse";
    }
}
