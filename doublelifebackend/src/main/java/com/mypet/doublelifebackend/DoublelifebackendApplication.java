package com.mypet.doublelifebackend;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;



@MapperScan(basePackageClasses = DoublelifebackendApplication.class) // @Mapper 서칭
@SpringBootApplication
public class DoublelifebackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(DoublelifebackendApplication.class, args);
	}

}
