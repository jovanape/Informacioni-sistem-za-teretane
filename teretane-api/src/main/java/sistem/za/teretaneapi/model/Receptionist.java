package sistem.za.teretaneapi.model;

import javax.persistence.Column;
import javax.persistence.OneToOne;

//@Entity(name = "recepcioner")
public class Receptionist {

    @Column(name = "id_recepcionera")
    @OneToOne
    private Long receptionistId;
}
