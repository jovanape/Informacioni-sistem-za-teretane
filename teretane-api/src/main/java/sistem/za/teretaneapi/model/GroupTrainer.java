package sistem.za.teretaneapi.model;

import javax.persistence.Column;
import javax.persistence.OneToOne;

//@Table(name = "trainer")
public class GroupTrainer {

    @Column(name = "id_grupnog_trenera")
    @OneToOne
    private Long groupTrainerId;
}
