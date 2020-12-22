package sistem.za.teretaneapi.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;

//@Table(name = "prijavljeni_na_grupni")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegisteredToGroupTraining {

    @Column(name = "id_grupnog")
    private Integer groupTrainingId;

    @Column(name = "id_grupnog")
    private Integer clientId;
}
