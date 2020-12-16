package sistem.za.teretaneapi.service;

import org.springframework.stereotype.Service;

@Service
public class TrainingServiceImpl implements TrainingService {

    @Override
    public String getGroupTrainings() {
        return "Group Trainings";
    }

    @Override
    public String getPersonalTrainings(String trainer) {
        return "Personal Trainings for " + trainer;
    }
}
