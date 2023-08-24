# mypetdoublelife
//천명 
backend에서 Controller 테스트 및 작동확인하고 싶으면 
src/main/resources 하위패키지로 templates 를 만들고 이곳에 html 또는 jsp를 넣어서 테스트하면 되고, 
html,jsp를 다루기위해선 의존성이 필요한데 build.gradle에 
implementation 'org.springframework.boot:spring-boot-starter-thymeleaf' 
implementation 'nz.net.ultraq.thymeleaf:thymeleaf-layout-dialect' 을 추가한 후 gradle refresh를 하면됨. 
js나 css는 resources 하위폴더 static을 만들어서 한다고함.
