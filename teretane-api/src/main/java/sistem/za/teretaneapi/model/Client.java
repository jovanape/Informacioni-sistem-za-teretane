package sistem.za.teretaneapi.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
//@Table(name = "klijent")
public class Client {

    @Column(name = "id_klijenta")
    private Integer clientId;

    @Column(name = "ime")
    private String name;

    @Column(name = "prezime")
    private String lastName;

    @Column(name = "korisnicko_ime")
    private String userName;

    @Column(name = "lozinka")
    private String password;

    @Column(name = "telefon")
    private String phoneNumber;

    @Column(name = "e_mail")
    private String email;

    @Column(name = "datum_rodjenja")
    private String birthDate;

}
