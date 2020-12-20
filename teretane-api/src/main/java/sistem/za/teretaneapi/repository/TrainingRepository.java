package sistem.za.teretaneapi.repository;

import sistem.za.teretaneapi.model.ScheduledGroupTrainingResponse;

import java.util.List;

public interface TrainingRepository {

    List<ScheduledGroupTrainingResponse> findAllScheduledGroupTrainingsPerTrainer(Integer trainerId);
}
