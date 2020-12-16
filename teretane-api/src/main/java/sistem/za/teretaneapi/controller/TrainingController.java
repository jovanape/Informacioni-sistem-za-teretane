package sistem.za.teretaneapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import sistem.za.teretaneapi.service.TrainingService;

@RestController
@RequestMapping("/training")
public class TrainingController {

    @Autowired
    private TrainingService trainingService;

    @GetMapping("/group-trainings")
    public String getGroupTrainings(){
        return trainingService.getGroupTrainings();
    }


    @GetMapping("/personal-trainings")
    public String getPersonalTrainings(
            @RequestParam String trainer
    ){
        return trainingService.getPersonalTrainings(trainer);
    }

}
