package sistem.za.teretaneapi.repository;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectReader;
import lombok.AllArgsConstructor;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;
import sistem.za.teretaneapi.model.GroupTraining;
import sistem.za.teretaneapi.model.ScheduledGroupTraining;
import sistem.za.teretaneapi.model.ScheduledGroupTrainingAndHall;
import sistem.za.teretaneapi.model.ScheduledGroupTrainingResponse;
import sistem.za.teretaneapi.model.ScheduledGroupTrainingUpdateBody;
import sistem.za.teretaneapi.model.UpdateGroupTrainingResponseBody;
import sistem.za.teretaneapi.service.LocationService;
import sistem.za.teretaneapi.service.ResourceUtil;

import java.sql.Timestamp;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Component
@AllArgsConstructor
public class TrainingRepositoryImpl implements TrainingRepository {

    private static final String ALL_GROUP_TRAININGS = "classpath:training/all_group_trainings.json";
    private static final String ALL_SCHEDULED_GROUP_TRAININGS = "classpath:training/all_scheduled_group_trainings.json";
    private static final ObjectReader SCHEDULED_GROUP_TRAININGS_READER = new ObjectMapper()
            .readerFor(new TypeReference<List<ScheduledGroupTraining>>() {
            });
    private static final ObjectReader GROUP_TRAININGS_READER = new ObjectMapper()
            .readerFor(new TypeReference<List<GroupTraining>>() {
            });
    private final LocationService locationService;
    private Map<Integer, List<ScheduledGroupTraining>> mapOfScheduledGroupTrainings;
    private Map<Integer, List<GroupTraining>> mapOfGroupTrainings;


    @Override
    public List<ScheduledGroupTrainingResponse> findAllScheduledGroupTrainingsPerTrainer(Integer trainerId) {
        return mapOfGroupTrainings.get(trainerId).stream()
                .map(this::getScheduledGroupTrainingAndHall).collect(Collectors.toList()).get(0);
    }

    @Override
    public UpdateGroupTrainingResponseBody updateScheduledTrainingPerTrainerId(
            Integer trainerId,
            Integer groupTrainingId,
            ScheduledGroupTrainingUpdateBody scheduledGroupTrainingUpdateBody) {
        if (scheduledGroupTrainingUpdateBody.getTrainingCapacity() != null)
            updateCapacityOfGroupTraining(trainerId, groupTrainingId, scheduledGroupTrainingUpdateBody);

        if (scheduledGroupTrainingUpdateBody.getStartTime() != null && scheduledGroupTrainingUpdateBody.getEndTime() != null)
            updateDateTimeOfGroupTraining(groupTrainingId,
                    scheduledGroupTrainingUpdateBody.getStartTime(),
                    scheduledGroupTrainingUpdateBody.getEndTime());

        if (scheduledGroupTrainingUpdateBody.getHallId() != null)
            updateHallIdOfGroupTraining(groupTrainingId, scheduledGroupTrainingUpdateBody.getHallId());

        return UpdateGroupTrainingResponseBody.builder().message("Training updated!").trainerId(trainerId).build();
    }

    private void updateCapacityOfGroupTraining(
            Integer trainerId,
            Integer groupTrainingId,
            ScheduledGroupTrainingUpdateBody scheduledGroupTrainingUpdateBody
    ) {
        mapOfGroupTrainings.get(trainerId).stream()
                .filter(groupTraining -> groupTraining.getId().equals(groupTrainingId))
                .findAny()
                .ifPresent(training -> training.setCapacity(scheduledGroupTrainingUpdateBody.getTrainingCapacity()));
    }

    private void updateDateTimeOfGroupTraining(
            Integer groupTrainingId,
            Timestamp startTime,
            Timestamp endTime
    ) {
        mapOfScheduledGroupTrainings.get(groupTrainingId).stream()
                .findFirst()
                .ifPresent(training -> {
                    training.setStartTime(startTime);
                    training.setEndTime(endTime);
                });
    }

    private void updateHallIdOfGroupTraining(Integer groupTrainingId, Integer hallId) {
        mapOfScheduledGroupTrainings.get(groupTrainingId).stream()
                .findFirst()
                .ifPresent(training -> training.setHallId(hallId));
    }

    private List<ScheduledGroupTrainingResponse> getScheduledGroupTrainingAndHall(GroupTraining training) {
        return findScheduledGroupTrainingPerGroupTrainingId(training.getGroupTrainerId()).stream()
                .map(groupTraining ->
                        ScheduledGroupTrainingResponse.builder()
                                .capacity(training.getCapacity())
                                .scheduledGroupTraining(
                                        new ScheduledGroupTrainingAndHall(
                                                groupTraining,
                                                locationService.getHallById(groupTraining.getHallId()))
                                ).build())
                .collect(Collectors.toList());
    }

    private List<ScheduledGroupTraining> findScheduledGroupTrainingPerGroupTrainingId(Integer groupTrainingId) {
        return mapOfScheduledGroupTrainings.get(groupTrainingId);
    }


    @EventListener(ApplicationReadyEvent.class)
    public void readLocationFromResources() throws JsonProcessingException {

        List<ScheduledGroupTraining> scheduledGroupTrainingsFromFile =
                SCHEDULED_GROUP_TRAININGS_READER.readValue(ResourceUtil.getResource(ALL_SCHEDULED_GROUP_TRAININGS));
        mapOfScheduledGroupTrainings = scheduledGroupTrainingsFromFile.stream()
                .collect(Collectors.groupingBy(ScheduledGroupTraining::getGroupId, Collectors.toList()));


        List<GroupTraining> allGroupTrainingsFromFile =
                GROUP_TRAININGS_READER.readValue(ResourceUtil.getResource(ALL_GROUP_TRAININGS));
        mapOfGroupTrainings = allGroupTrainingsFromFile.stream()
                .collect(Collectors.groupingBy(GroupTraining::getGroupTrainerId, Collectors.toList()));
    }


}
