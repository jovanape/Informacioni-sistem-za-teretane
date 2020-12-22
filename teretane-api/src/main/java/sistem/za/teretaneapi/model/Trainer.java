package sistem.za.teretaneapi.model;

import javax.persistence.FetchType;
import javax.persistence.OneToOne;

//@Entity(name = "trener")
public class Trainer {

    @OneToOne(orphanRemoval = true, fetch = FetchType.EAGER)
    private Long trainerId;

    private Long commissionId;
}
