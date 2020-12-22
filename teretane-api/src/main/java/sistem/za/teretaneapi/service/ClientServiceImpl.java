package sistem.za.teretaneapi.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import sistem.za.teretaneapi.model.Client;
import sistem.za.teretaneapi.repository.ClientRepositoryImpl;

import java.util.List;

@AllArgsConstructor
@Service
public class ClientServiceImpl implements ClientService {

    private final ClientRepositoryImpl clientRepository;

    @Override
    public List<Client> getAllRegisteredClientsForGroupTraining(Integer groupTrainingId) {
        return clientRepository.getAllRegisteredClientsForGroupTraining(groupTrainingId);
    }
}
