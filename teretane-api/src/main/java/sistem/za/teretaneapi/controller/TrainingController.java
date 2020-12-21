package sistem.za.teretaneapi.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sistem.za.teretaneapi.model.ScheduledGroupTrainingResponse;
import sistem.za.teretaneapi.model.ScheduledGroupTrainingUpdateBody;
import sistem.za.teretaneapi.model.UpdateGroupTrainingResponseBody;
import sistem.za.teretaneapi.service.TrainingService;

import java.util.List;

@RestController
@RequestMapping("/training")
@AllArgsConstructor
public class TrainingController {

    private final TrainingService trainingService;

    @GetMapping("/group-trainings/{trainerId}")
    public ResponseEntity<List<ScheduledGroupTrainingResponse>> getGroupTrainingsPerTrainerId(
            @PathVariable(name = "trainerId") Integer trainerId
    ) {
        return ResponseEntity.ok(trainingService.getGroupTrainingsPerTrainer(trainerId));
    }


    @PostMapping("group-trainings/{trainerId}/{groupTrainingId}")
    public ResponseEntity<UpdateGroupTrainingResponseBody> updateScheduleGroupTraining(
            @PathVariable(name = "trainerId") Integer trainerId,
            @PathVariable(name = "groupTrainingId") Integer groupTrainingId,
            @RequestBody ScheduledGroupTrainingUpdateBody scheduledGroupTrainingUpdateBody
    ) {
        return ResponseEntity.ok(
                trainingService.updateScheduleGroupTraining(
                        trainerId,
                        groupTrainingId,
                        scheduledGroupTrainingUpdateBody));
    }


}
