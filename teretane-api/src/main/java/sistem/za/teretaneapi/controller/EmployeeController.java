package sistem.za.teretaneapi.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sistem.za.teretaneapi.model.Employee;
import sistem.za.teretaneapi.service.EmployeeService;


@CrossOrigin(origins = "http://localhost:4200")
@AllArgsConstructor
@RestController
@RequestMapping(path = "/employee")
public class EmployeeController {

    private final EmployeeService employeeService;

    @GetMapping(path = "/{userName}")
    public ResponseEntity<Employee> getEmployeeByUserName(
            @PathVariable(value = "userName") String userName
    ) {
        return ResponseEntity.ok(employeeService.getEmployeeByType(userName));
    }

}
