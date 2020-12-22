package sistem.za.teretaneapi.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import sistem.za.teretaneapi.model.Client;
import sistem.za.teretaneapi.model.ScheduledGroupTrainingResponse;
import sistem.za.teretaneapi.model.ScheduledGroupTrainingUpdateBody;
import sistem.za.teretaneapi.model.UpdateGroupTrainingResponseBody;
import sistem.za.teretaneapi.service.ClientService;
import sistem.za.teretaneapi.service.TrainingService;

import java.util.List;

@RestController
@AllArgsConstructor
public class TrainingController {

    private final TrainingService trainingService;
    private final ClientService clientService;

    @GetMapping(path = "/group-trainings/{trainerId}")
    public ResponseEntity<List<ScheduledGroupTrainingResponse>> getGroupTrainingsPerTrainerId(
            @PathVariable(name = "trainerId") Integer trainerId
    ) {
        return ResponseEntity.ok(trainingService.getGroupTrainingsPerTrainer(trainerId));
    }


    @PostMapping(path = "group-trainings/update/{trainerId}/{groupTrainingId}", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<UpdateGroupTrainingResponseBody> updateScheduleGroupTraining(
            @PathVariable(name = "trainerId") Integer trainerId,
            @PathVariable(name = "groupTrainingId") Integer groupTrainingId,
            @RequestBody ScheduledGroupTrainingUpdateBody scheduledGroupTrainingUpdateBody
    ) {
        return ResponseEntity.status(HttpStatus.OK).body(
                trainingService.updateScheduleGroupTraining(
                        trainerId,
                        groupTrainingId,
                        scheduledGroupTrainingUpdateBody));
    }

    @PostMapping(path = "group-trainings/schedule/{trainerId}/{groupTrainingId}", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<UpdateGroupTrainingResponseBody> scheduleGroupTraining(
            @PathVariable(name = "trainerId") Integer trainerId,
            @PathVariable(name = "groupTrainingId") Integer groupTrainingId,
            @RequestBody ScheduledGroupTrainingUpdateBody scheduledGroupTrainingUpdateBody
    ) {
        return ResponseEntity.status(HttpStatus.OK).body(
                trainingService.scheduleGroupTraining(
                        trainerId,
                        groupTrainingId,
                        scheduledGroupTrainingUpdateBody));
    }

    @GetMapping(path = "group-trainings/{groupTrainingId}/all-registered-clients")
    public ResponseEntity<List<Client>> getAllRegisteredClientsForGroupTraining(
            @PathVariable(name = "groupTrainingId") Integer groupTrainingId) {
        return ResponseEntity.ok(clientService.getAllRegisteredClientsForGroupTraining(groupTrainingId));
    }


}
