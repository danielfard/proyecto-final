package proyecto_final.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AlumnadoController {
	@GetMapping("/alumnado")
	public String alumnado() {
		return "alumnado";
	}
}
