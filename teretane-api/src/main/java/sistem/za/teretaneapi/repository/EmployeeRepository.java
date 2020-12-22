package sistem.za.teretaneapi.repository;

import sistem.za.teretaneapi.model.Employee;

public interface EmployeeRepository {
    Employee findAllEmployeesByUserName(String userName);

}
