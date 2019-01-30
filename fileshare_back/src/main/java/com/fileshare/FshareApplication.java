package com.fileshare;

import com.fileshare.controllers.UploadFileController;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("com.fileshare.controllers")
public class FshareApplication {
    public static void main(String[] args) {
        SpringApplication.run(FshareApplication.class, args);
    }
}

