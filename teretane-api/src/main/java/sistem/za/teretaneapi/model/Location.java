package sistem.za.teretaneapi.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
//@Table(name = "Lokacije")
public class Location {

    @Column(name = "id_lokacije")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "naziv")
    private String name;

    @Column(name = "adresa")
    private String address;

    @Column(name = "grad")
    private String city;

    @Column(name = "radno_vreme")
    private String workingHour;

    @Column(name = "broj_telefona")
    private Integer phoneNumber;
}
