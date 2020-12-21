package sistem.za.teretaneapi.model;

import com.sun.istack.Nullable;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ScheduledGroupTrainingUpdateBody {
    @Nullable
    private Timestamp startTime;
    @Nullable
    private Timestamp endTime;
    @Nullable
    private Integer hallId;
    @Nullable
    private Integer trainingCapacity;
}
