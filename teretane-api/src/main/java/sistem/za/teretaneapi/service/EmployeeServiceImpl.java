package sistem.za.teretaneapi.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import sistem.za.teretaneapi.model.Employee;
import sistem.za.teretaneapi.repository.EmployeeRepositoryImpl;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepositoryImpl employeeRepositoryImpl;

    @Override
    public Employee getEmployeeByType(String userName) {
        return employeeRepositoryImpl.findAllEmployeesByUserName(userName);
    }
}
