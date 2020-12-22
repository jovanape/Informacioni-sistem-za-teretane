package sistem.za.teretaneapi.service;

import sistem.za.teretaneapi.model.ScheduledGroupTrainingResponse;
import sistem.za.teretaneapi.model.ScheduledGroupTrainingUpdateBody;
import sistem.za.teretaneapi.model.UpdateGroupTrainingResponseBody;

import java.util.List;

public interface TrainingService {
    List<ScheduledGroupTrainingResponse> getGroupTrainingsPerTrainer(Integer trainerId);

    UpdateGroupTrainingResponseBody updateScheduleGroupTraining(
            Integer trainerId,
            Integer groupTrainingId,
            ScheduledGroupTrainingUpdateBody scheduledGroupTrainingUpdateBody);

    UpdateGroupTrainingResponseBody scheduleGroupTraining(
            Integer trainerId,
            Integer groupTrainingId,
            ScheduledGroupTrainingUpdateBody scheduledGroupTrainingUpdateBody);
}
