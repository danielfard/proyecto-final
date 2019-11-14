package proyecto_final.entities;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name = "Profesores")
public class Profesor implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "nombre", nullable = false)
	private String nombre;
	
	@Column(name = "apellido_1", nullable = false)
	private String apellido_1;
	
	public Set<Clase> getClases() {
		return clases;
	}

	public void setClases(Set<Clase> clases) {
		this.clases = clases;
	}

	@Column(name = "apellido_2", nullable = false)
	private String apellido_2;
	
	@Column(name = "cedula", nullable = false)
	private Long cedula;
	
	@Column(name = "telefono", nullable = false)
	private Long telefono;
	
	@Column(name = "email", nullable = false)
	private String email;
	
	@Column(name = "titulacion", nullable = false)
	private String titulacion;
	
	@OneToMany(mappedBy = "profesor")
	private Set<Clase> clases;

	public Profesor(Long id, String nombre, String apellido_1,String apellido_2, Long cedula,Long telefono,String email, String titulacion) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.apellido_1 = apellido_1;
		this.apellido_2 = apellido_2;
		this.cedula = cedula;
		this.telefono = telefono;
		this.email = email;
		this.titulacion = titulacion;
	}

	
	public Profesor() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido_1() {
		return apellido_1;
	}

	public void setApellido_1(String apellido_1) {
		this.apellido_1 = apellido_1;
	}

	public String getApellido_2() {
		return apellido_2;
	}

	public void setApellido_2(String apellido_2) {
		this.apellido_2 = apellido_2;
	}

	public long getCedula() {
		return cedula;
	}

	public void setCedula(long cedula) {
		this.cedula = cedula;
	}

	public long getTelefono() {
		return telefono;
	}

	public void setTelefono(long telefono) {
		this.telefono = telefono;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTitulacion() {
		return titulacion;
	}

	public void setTitulacion(String titulacion) {
		this.titulacion = titulacion;
	}
	
	
	
	
	
}
