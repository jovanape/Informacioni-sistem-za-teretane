package sistem.za.teretaneapi.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

//@Table(name = "zaposleni")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
public class Employee {
    @Column(name = "korisnicko_ime")
    public String userName;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long employeeId;
    @Column(name = "sifra")
    private String password;

    @Column(name = "ime")
    private String name;

    @Column(name = "prezime")
    private String lastName;

    @Column(name = "jmbg")
    private String jmbg;
}
