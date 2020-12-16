package sistem.za.teretaneapi.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import sistem.za.teretaneapi.model.Hall;
import sistem.za.teretaneapi.model.Location;
import sistem.za.teretaneapi.service.LocationService;

import java.util.List;

@AllArgsConstructor
@RestController
public class LocationController {

    private final LocationService locationService;

    @GetMapping("/location")
    public ResponseEntity<List<Location>> getAllHallsPerLocation() {
        return ResponseEntity.ok(locationService.getAllLocations());
    }

    @GetMapping("/location/{locationId}")
    public ResponseEntity<List<Hall>> getAllHallsPerLocation(
            @PathVariable(name = "locationId") Integer locationId
    ) {
        return ResponseEntity.ok(locationService.getAllHallsPerLocation(locationId));
    }
}
