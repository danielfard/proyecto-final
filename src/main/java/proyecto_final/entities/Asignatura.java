package proyecto_final.entities;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "Asignaturas")
public class Asignatura implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_asignatura;
	
	@Column(name = "nombre_asignatura", nullable = false)
	private String nombre_asignatura;
	
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="id_curso")
	private Curso curso;
	
	@OneToMany(mappedBy = "asignatura")
	@JsonIgnore
	private Set<Clase> clases;

	public String getNombre_asignatura() {
		return nombre_asignatura;
	}

	public void setNombre_asignatura(String nombre_asignatura) {
		this.nombre_asignatura = nombre_asignatura;
	}

	public Curso getCurso() {
		return curso;
	}

	public void setCurso(Curso curso) {
		this.curso = curso;
	}

	public Set<Clase> getClases() {
		return clases;
	}

	public void setClases(Set<Clase> clases) {
		this.clases = clases;
	}
	
	
	
	
	
	
	
}