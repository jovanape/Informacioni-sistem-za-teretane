package sistem.za.teretaneapi.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import sistem.za.teretaneapi.model.ScheduledGroupTrainingResponse;
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

}
