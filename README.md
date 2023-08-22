# mypetdoublelife

---

백엔드 세팅 혹은 테스트 (2023-08-22)

- DB 세팅
    - Oracle
    - MyBatis


- 수정 파일
  - DoublelifebackendApplication.java
  - application.properties.xml
  - build.gradle


- 패키지 혹은 java 파일 추가
  - controller
    - MemberController.java
  - repository
    - MemberRepository.java
  - service
    - MemberService.java
  - vo
    - MemberVO.java


- resources에 파일 추가
  - mybatis-mapper
    - MemberMapper.xml
  - templates
    - MemberInsert.html
    - MemberView.html

---
(2023-08-22) 

추가/수정된 파일 주석 참고

웹페이지 요청 처리 순서 \
controller -> service -> repository -> mapper.xml -> DB

컨트롤러에 작동하는 테스트 주소 \
http://localhost:8080/signup 입니다.

---
