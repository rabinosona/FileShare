package com.fileshare.controllers;

import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class UploadFileController {
    @RequestMapping(value ="api/uploadFile", method = RequestMethod.POST)
    public void UploadFile(@RequestParam("file")MultipartFile file) {
        return;
    }
}
