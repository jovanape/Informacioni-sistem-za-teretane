package sistem.za.teretaneapi.service;

import sistem.za.teretaneapi.model.Hall;
import sistem.za.teretaneapi.model.Location;

import java.util.List;

public interface LocationService {

    List<Location> getAllLocations();

    List<Hall> getAllHallsPerLocation(Integer locationId);

}
