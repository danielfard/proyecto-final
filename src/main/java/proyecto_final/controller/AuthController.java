package proyecto_final.controller;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import proyecto_final.entities.Usuario;
import proyecto_final.repositories.UsuarioRepository;

@RestController
@RequestMapping("api/auth")
public class AuthController {
	@Autowired
	private UsuarioRepository usuarioRepository;
    
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    
    @GetMapping("/user")
	public Usuario user(Principal principal) {
    	
    	String username = principal.getName();
    	return usuarioRepository.findByUsername(username);
	}
	
	@PostMapping("/register")
    public ResponseEntity<Usuario> registration(@RequestBody Usuario user) {
        
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        
        usuarioRepository.save(user);
        
        return ResponseEntity.ok().body(user);
    }
	
	@GetMapping("/logout")
	public String logout() {
		return "auth/login";
	}
}
