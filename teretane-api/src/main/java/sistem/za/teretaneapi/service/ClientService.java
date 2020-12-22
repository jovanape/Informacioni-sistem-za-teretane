package sistem.za.teretaneapi.service;

import sistem.za.teretaneapi.model.Client;

import java.util.List;

public interface ClientService {
    List<Client> getAllRegisteredClientsForGroupTraining(Integer groupTrainingId);
}
