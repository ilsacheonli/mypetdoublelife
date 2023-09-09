package com.mypet.doublelifebackend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;
@Controller
public class PetSalonController {
    @GetMapping("/findpetsalon")
    public ModelAndView showMap() {
        return new ModelAndView("FindPetFacility/findpetsalon");}

    }
