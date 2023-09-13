package com.mypet.doublelifebackend;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class TestController {

	@RequestMapping(value = "/test/hello")
	@ResponseBody
	public String test(Model model) {
		return "Test - GitTest1try";
	}
	
}