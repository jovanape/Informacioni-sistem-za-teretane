package sistem.za.teretaneapi.repository;

import sistem.za.teretaneapi.model.ScheduledGroupTrainingResponse;
import sistem.za.teretaneapi.model.ScheduledGroupTrainingUpdateBody;
import sistem.za.teretaneapi.model.UpdateGroupTrainingResponseBody;

import java.util.List;

public interface TrainingRepository {

    List<ScheduledGroupTrainingResponse> findAllScheduledGroupTrainingsPerTrainer(Integer trainerId);

    UpdateGroupTrainingResponseBody updateScheduledTrainingPerTrainerId(
            Integer trainerId,
            Integer groupTrainingId,
            ScheduledGroupTrainingUpdateBody scheduledGroupTrainingUpdateBody);
}
