package sistem.za.teretaneapi.repository;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectReader;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;
import sistem.za.teretaneapi.model.Hall;
import sistem.za.teretaneapi.model.Location;
import sistem.za.teretaneapi.service.ResourceUtil;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

@Component
public class LocationRepositoryImpl implements LocationRepository {

    private static final String ALL_LOCATIONS = "classpath:locations/all_locations.json";
    private static final String ALL_HALLS = "classpath:locations/all_halls.json";
    private static final ObjectReader LOCATION_READER = new ObjectMapper()
            .readerFor(new TypeReference<List<Location>>() {
            });
    private static final ObjectReader HALL_READER = new ObjectMapper()
            .readerFor(new TypeReference<List<Hall>>() {
            });

    private Map<Integer, Location> mapOfLocations = new HashMap<>();
    private Map<Integer, Hall> mapOfHalls = new HashMap<>();
    private Map<Integer, List<Hall>> mapOfHallsPerLocation = new HashMap<>();

    public List<Location> findAllLocations() {
        return new ArrayList<>(mapOfLocations.values());
    }

    @Override
    public List<Hall> findAllPerLocationId(Integer locationId) {
        return mapOfHallsPerLocation.get(locationId);
    }

    @Override
    public Hall findHallPerId(Integer hallId) {
        return mapOfHalls.get(hallId);
    }


    @EventListener(ApplicationReadyEvent.class)
    public void readLocationFromResources() throws JsonProcessingException {
        List<Location> locationFromFile =
                LOCATION_READER.readValue(ResourceUtil.getResource(ALL_LOCATIONS));
        mapOfLocations = locationFromFile.stream()
                .collect(Collectors.toMap(Location::getId, Function.identity()));

        List<Hall> hallsFromFile =
                HALL_READER.readValue(ResourceUtil.getResource(ALL_HALLS));

        mapOfHalls = hallsFromFile.stream()
                .collect(Collectors.toMap(Hall::getId, Function.identity()));

        mapOfHallsPerLocation = hallsFromFile.stream()
                .collect(Collectors.groupingBy(Hall::getLocationId, Collectors.toList()));
    }
}
