package com.example.todo_app.Controllers;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;



@Controller
public class AppController {
    @GetMapping("/login")
    public String check() {
        return "html/login";
    }

}


    


