package com.cg.controller;

import com.cg.model.User;
import com.cg.service.user.IUserService;
import com.cg.util.AppUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller
@RequestMapping("/users")
public class UserController {
    @Autowired
    private IUserService userService;
    @Autowired
    private AppUtil appUtil;
    @GetMapping
    private ModelAndView showListUser () {
        ModelAndView modelAndView = new ModelAndView("user/list");
        List<User> users = userService.findAll();
        modelAndView.addObject("users", users);

        String username = appUtil.getPrincipalUsername();
        modelAndView.addObject("username", username);
        return modelAndView;
    }
}
