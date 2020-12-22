package sistem.za.teretaneapi.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UpdateGroupTrainingResponseBody {

    @JsonProperty("message")
    private String message;

    @JsonProperty("trainerId")
    private Integer trainerId;
}
