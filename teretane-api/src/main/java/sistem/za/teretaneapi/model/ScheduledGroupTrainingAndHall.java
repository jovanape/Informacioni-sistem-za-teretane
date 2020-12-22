package sistem.za.teretaneapi.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class ScheduledGroupTrainingAndHall {


    private ScheduledGroupTraining scheduledGroupTraining;

    private Hall hall;
}
