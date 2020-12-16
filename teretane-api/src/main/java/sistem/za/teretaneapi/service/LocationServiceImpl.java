package sistem.za.teretaneapi.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import sistem.za.teretaneapi.model.Hall;
import sistem.za.teretaneapi.model.Location;
import sistem.za.teretaneapi.repository.LocationRepositoryImpl;

import java.util.List;

@Service
@AllArgsConstructor
public class LocationServiceImpl implements LocationService {
    private final LocationRepositoryImpl locationRepository;

    @Override
    public List<Location> getAllLocations() {
        return locationRepository.findAllLocations();
    }

    @Override
    public List<Hall> getAllHallsPerLocation(Integer locationId) {
        return locationRepository.findAllPerLocationId(locationId);
    }


}
