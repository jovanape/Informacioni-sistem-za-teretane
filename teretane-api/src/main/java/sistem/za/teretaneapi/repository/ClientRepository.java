package sistem.za.teretaneapi.repository;

import sistem.za.teretaneapi.model.Client;

import java.util.List;

public interface ClientRepository {

    List<Client> getAllRegisteredClientsForGroupTraining(Integer groupTrainingId);
}
