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
@RequestMapping("/products")
public class ProductController {
    @Autowired
    private IProductService productService;

    @Autowired
    private AppUtil appUtil;
    @GetMapping
    private ModelAndView showListProduct(){
        ModelAndView modelAndView = new ModelAndView("product/list");
        List<Product> products = productService.findAll();
        modelAndView.addObject("products", products);
        String username = appUtil.getPrincipalUsername();
        modelAndView.addObject("username", username);
        return modelAndView;
    }
}
