package sistem.za.teretaneapi.repository;

import sistem.za.teretaneapi.model.Hall;

import java.util.List;

public interface LocationRepository {

    List<Hall> findAllPerLocationId(Integer locationId);
}
