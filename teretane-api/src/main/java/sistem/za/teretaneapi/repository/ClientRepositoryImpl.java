package sistem.za.teretaneapi.repository;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectReader;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;
import sistem.za.teretaneapi.model.Client;
import sistem.za.teretaneapi.model.RegisteredToGroupTraining;
import sistem.za.teretaneapi.service.ResourceUtil;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Component
public class ClientRepositoryImpl implements ClientRepository {
    private static final String ALL_CLIENTS = "classpath:clients/all_clients.json";
    private static final String ALL_CLIENTS_REGISTERED_TO_GROUP_TRAINING = "classpath:clients/all_registered_to_group_training.json";
    private static final ObjectReader CLIENTS_READER = new ObjectMapper()
            .readerFor(new TypeReference<List<Client>>() {
            });
    private static final ObjectReader CLIENTS_REGISTERED_TO_GROUP_TRAINING_READER = new ObjectMapper()
            .readerFor(new TypeReference<List<RegisteredToGroupTraining>>() {
            });
    private Map<Integer, List<Client>> mapOfClients;
    private Map<Integer, List<RegisteredToGroupTraining>> mapOfRegisteredToGroupTraining;

    @Override
    public List<Client> getAllRegisteredClientsForGroupTraining(Integer groupTrainingId) {

        return mapOfRegisteredToGroupTraining.get(groupTrainingId).stream()
                .map(registeredToGroupTraining -> mapOfClients.get(registeredToGroupTraining.getClientId()).get(0))
                .collect(Collectors.toList());
    }

    public void removeClientsRegisteredToGroupTraining(Integer groupTrainingId) {
        mapOfRegisteredToGroupTraining.remove(groupTrainingId);
    }

    @EventListener(ApplicationReadyEvent.class)
    public void readLocationFromResources() throws JsonProcessingException {

        List<Client> clients =
                CLIENTS_READER.readValue(ResourceUtil.getResource(ALL_CLIENTS));
        mapOfClients = clients.stream()
                .collect(Collectors.groupingBy(Client::getClientId, Collectors.toList()));

        List<RegisteredToGroupTraining> registeredToGroupTraining =
                CLIENTS_REGISTERED_TO_GROUP_TRAINING_READER.readValue(ResourceUtil.getResource(ALL_CLIENTS_REGISTERED_TO_GROUP_TRAINING));
        mapOfRegisteredToGroupTraining = registeredToGroupTraining.stream()
                .collect(Collectors.groupingBy(RegisteredToGroupTraining::getGroupTrainingId, Collectors.toList()));
    }

}
