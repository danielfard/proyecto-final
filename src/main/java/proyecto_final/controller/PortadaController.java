package proyecto_final.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PortadaController {
	@GetMapping("/portada")
    public String greeting() {
        return "portada";
    }
}
