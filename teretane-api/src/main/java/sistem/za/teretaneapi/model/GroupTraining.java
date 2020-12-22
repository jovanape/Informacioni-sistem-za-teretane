package sistem.za.teretaneapi.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

//@Table(name = "grupni_trening")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
public class GroupTraining {

    @Column(name = "id_grupnog")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "id_grupnog_trenera")
    private Integer groupTrainerId;

    @Column(name = "kapacitet")
    private Integer capacity;
}
