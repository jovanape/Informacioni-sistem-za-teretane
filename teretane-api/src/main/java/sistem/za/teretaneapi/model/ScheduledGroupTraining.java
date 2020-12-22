package sistem.za.teretaneapi.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.sql.Timestamp;

//@Table(name = "zakazan_grupni")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
public class ScheduledGroupTraining {

    @Column(name = "id_zakazanog_treninga")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "id_sale")
    private Integer hallId;

    @Column(name = "vreme_pocetka")
    private Timestamp startTime;

    @Column(name = "vreme_kraja")
    private Timestamp endTime;

    @Column(name = "id_grupnog")
    private Integer groupId;

}
