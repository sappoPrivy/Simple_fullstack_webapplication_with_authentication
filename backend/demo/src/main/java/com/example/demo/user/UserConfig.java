package com.example.demo.user;

import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class UserConfig {
    @Bean
    CommandLineRunner commandLineRunner(UserRepository repository){
        return args -> {
		    User dummy1 = new User(
				1,
				"kenny",
				"Kenny2003",
				false
			);

            User dummy2 = new User(
				2,
				"lexi",
				"Lexi2007",
				false
			);

            repository.saveAll(
                List.of(dummy1, dummy2)
            );
        };
    }
}
