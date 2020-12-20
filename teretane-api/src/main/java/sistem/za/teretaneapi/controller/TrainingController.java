package sistem.za.teretaneapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sistem.za.teretaneapi.model.ScheduledGroupTrainingResponse;
import sistem.za.teretaneapi.service.TrainingService;

import java.util.List;

@RestController
@RequestMapping("/training")
public class TrainingController {

    @Autowired
    private TrainingService trainingService;

    @GetMapping("/group-trainings/{trainerId}")
    public ResponseEntity<List<ScheduledGroupTrainingResponse>> getGroupTrainingsPerTrainerId(
            @PathVariable(name = "trainerId") Integer trainerId
    ) {
        return ResponseEntity.ok(trainingService.getGroupTrainingsPerTrainer(trainerId));
    }

}
