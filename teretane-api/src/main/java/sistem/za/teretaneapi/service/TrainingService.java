package sistem.za.teretaneapi.service;

import sistem.za.teretaneapi.model.ScheduledGroupTrainingResponse;

import java.util.List;

public interface TrainingService {
    List<ScheduledGroupTrainingResponse> getGroupTrainingsPerTrainer(Integer trainerId);

}
