package sistem.za.teretaneapi.model;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ScheduledGroupTrainingResponse {

    private Integer capacity;

    private ScheduledGroupTrainingAndHall scheduledGroupTraining;

}
