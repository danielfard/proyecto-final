package proyecto_final.entities;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "Clases")
public class Clase implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="id_asignatura")
	private Asignatura asignatura;
	
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="id_profesor")
	private Profesor profesor;
	
	@ManyToMany(mappedBy = "clases")
	private Set<Alumno> alumnos = new HashSet<>();;
	
	
	@ManyToMany(cascade = CascadeType.PERSIST)
	@JoinTable(name="clase_horasemanal",joinColumns = @JoinColumn(name="clase_id",referencedColumnName="id"),inverseJoinColumns =@JoinColumn(name= "horasemanal_id",referencedColumnName="id"))
	private Set<Hora_semanal> horas_semanales = new HashSet<>();;


	public Long getId_clase() {
		return id;
	}


	public void setId_clase(Long id) {
		this.id = id;
	}



	public Asignatura getAsignatura() {
		return asignatura;
	}


	public void setAsignatura(Asignatura asignatura) {
		this.asignatura = asignatura;
	}


	public Profesor getProfesor() {
		return profesor;
	}


	public void setProfesor(Profesor profesor) {
		this.profesor = profesor;
	}


	public Set<Alumno> getAlumnos() {
		return alumnos;
	}


	public void setAlumnos(Set<Alumno> alumnos) {
		this.alumnos = alumnos;
	}


	public Set<Hora_semanal> getHoras_semanales() {
		return horas_semanales;
	}


	public void setHoras_semanales(Set<Hora_semanal> horas_semanales) {
		this.horas_semanales = horas_semanales;
	}


	public Clase() {
		super();
		// TODO Auto-generated constructor stub
	}


	
}