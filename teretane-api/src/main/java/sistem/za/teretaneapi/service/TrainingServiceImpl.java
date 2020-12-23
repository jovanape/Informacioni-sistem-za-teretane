package sistem.za.teretaneapi.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import sistem.za.teretaneapi.model.ScheduledGroupTrainingResponse;
import sistem.za.teretaneapi.model.ScheduledGroupTrainingUpdateBody;
import sistem.za.teretaneapi.model.UpdateGroupTrainingResponseBody;
import sistem.za.teretaneapi.repository.TrainingRepositoryImpl;

import java.util.List;

@Service
@AllArgsConstructor
public class TrainingServiceImpl implements TrainingService {

    private final TrainingRepositoryImpl trainingRepository;

    @Override
    public List<ScheduledGroupTrainingResponse> getGroupTrainingsPerTrainer(Integer trainerId) {
        return trainingRepository.findAllScheduledGroupTrainingsPerTrainer(trainerId);
    }

    @Override
    public UpdateGroupTrainingResponseBody updateScheduleGroupTraining(
            Integer trainerId,
            Integer groupTrainingId,
            ScheduledGroupTrainingUpdateBody scheduledGroupTrainingUpdateBody) {
        return trainingRepository.updateScheduledTrainingPerTrainerId(
                trainerId,
                groupTrainingId,
                scheduledGroupTrainingUpdateBody);
    }

    @Override
    public UpdateGroupTrainingResponseBody scheduleGroupTraining(
            Integer trainerId,
            Integer groupTrainingId,
            ScheduledGroupTrainingUpdateBody scheduledGroupTrainingUpdateBody) {
        return trainingRepository.scheduledTrainingPerTrainerId(
                trainerId,
                groupTrainingId,
                scheduledGroupTrainingUpdateBody);
    }

    @Override
    public UpdateGroupTrainingResponseBody removeScheduledTraining(
            Integer trainerId,
            Integer groupTrainingId,
            ScheduledGroupTrainingUpdateBody scheduledGroupTrainingUpdateBody) {
        return trainingRepository.removeScheduledTraining(trainerId, groupTrainingId, scheduledGroupTrainingUpdateBody);
    }

}
