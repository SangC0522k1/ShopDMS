package com.cg.controller;


import com.cg.model.Product;
import com.cg.service.product.IProductService;
import com.cg.util.AppUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller
@RequestMapping("/")
public class HomeController {

    @Autowired
    private AppUtil appUtil;

    @GetMapping
    public ModelAndView showHomePage() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("index");
        String username = appUtil.getPrincipalUsername();
        modelAndView.addObject("username", username);

        return modelAndView;
    }

    @GetMapping("/login")
    public ModelAndView showLoginPage() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("login");

        return modelAndView;
    }

    @GetMapping("/403")
    public ModelAndView showErrorPage() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("error/403");

        return modelAndView;
    }
}
