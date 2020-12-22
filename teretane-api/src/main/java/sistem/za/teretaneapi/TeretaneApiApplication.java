package sistem.za.teretaneapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class TeretaneApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(TeretaneApiApplication.class, args);
    }

}
