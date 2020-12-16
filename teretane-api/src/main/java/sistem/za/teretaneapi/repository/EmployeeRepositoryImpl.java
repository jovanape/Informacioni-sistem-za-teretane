package sistem.za.teretaneapi.repository;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectReader;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;
import sistem.za.teretaneapi.model.Employee;
import sistem.za.teretaneapi.service.ResourceUtil;

import java.util.ArrayList;
import java.util.List;

@Component
public class EmployeeRepositoryImpl implements EmployeeRepository {

    private static final String ALL_EMPLOYEES = "classpath:employees/all_employees.json";
    private static final ObjectReader EMPLOYEES_READER = new ObjectMapper()
            .readerFor(new TypeReference<List<Employee>>() {
            });
    private List<Employee> listOfEmployees = new ArrayList<>();

    @Override
    public Employee findAllEmployeesByUserName(String userName) {
        return listOfEmployees.stream()
                .filter(employee -> employee.userName.equals(userName)).findFirst().orElseThrow();
    }

    @EventListener(ApplicationReadyEvent.class)
    public void readEmployeesFromResources() throws JsonProcessingException {
        List<Employee> employeesForFile =
                EMPLOYEES_READER.readValue(ResourceUtil.getResource(ALL_EMPLOYEES));
        listOfEmployees = new ArrayList<>(employeesForFile);
    }
}
