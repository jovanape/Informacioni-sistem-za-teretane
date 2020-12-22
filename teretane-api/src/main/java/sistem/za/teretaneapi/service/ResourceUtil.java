package sistem.za.teretaneapi.service;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import org.springframework.core.io.DefaultResourceLoader;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Component;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.Reader;
import java.util.stream.Collectors;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
@Component
public class ResourceUtil {
    private static final ResourceLoader RESOURCE_LOADER = new DefaultResourceLoader();

    public static String getResource(String resourceName) {
        Resource resource = RESOURCE_LOADER.getResource(resourceName);
        try (Reader inputStreamReader = new InputStreamReader(resource.getInputStream())) {
            BufferedReader bufferedReader = new BufferedReader(inputStreamReader);
            return bufferedReader.lines().collect(Collectors.joining());
        } catch (IOException e) {
            throw new IllegalArgumentException("Failed getting resouce: " + resourceName);
        }
    }
}
