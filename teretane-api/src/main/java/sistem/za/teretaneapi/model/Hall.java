package sistem.za.teretaneapi.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

//@Entity(name = "sala")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
public class Hall {

    @Column(name = "id_sale")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "naziv")
    private String name;

    @Column(name = "id_lokacije")
    private Integer locationId;

    @Column(name = "kapacitet")
    private Integer capacity;
}
